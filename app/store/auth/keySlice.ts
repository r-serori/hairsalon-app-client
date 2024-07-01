import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import RootState from "../../redux/reducers/rootReducer";
import { getKeyApi } from "../../services/auth/key";

export const getKey = createAsyncThunk(
  "key/getKey",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response = await getKeyApi.getKey();

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
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
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

export interface KeyState {
  key: string | null;
}

export interface RootState {
  key: string | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: RootState = {
  key: null,
  status: "idle",
};

export const keySlice = createSlice({
  name: "key",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getKey.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getKey.fulfilled, (state, action) => {
      state.status = "success";
      state.key = action.payload.roleKey;
    });
    builder.addCase(getKey.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const selectKey = (state: RootState) => state.key;

const keyReducer = keySlice.reducer;

export default keyReducer;
