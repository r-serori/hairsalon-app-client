import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { vioRoleApi } from "../../services/auth/vioRole";

export const getPermission = createAsyncThunk(
  "permission/getPermission",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response = await vioRoleApi.getVioRole();
      console.log("responseMyRole", response);
      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404 ||
          response.status === 419
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500 || response.status === 503) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export type PermissionsState = "オーナー" | "マネージャー" | "スタッフ" | null;

export interface RootState {
  permission: PermissionsState;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: RootState = {
  permission: null,
  status: "idle",
};

export const permissionSlice = createSlice({
  name: "permission",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPermission.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPermission.fulfilled, (state, action) => {
        state.permission = action.payload.myRole;
        state.status = "success";
      })
      .addCase(getPermission.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

const permissionReducer = permissionSlice.reducer;

export default permissionReducer;
