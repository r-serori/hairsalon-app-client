import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ownerApi } from "../../services/auth/ownerApi";
import RootState from "../../redux/reducers/rootReducer";
import { login } from "./userSlice";

export const ownerRegister = createAsyncThunk(
  "owner/register",
  async (
    formData: {
      store_name: string;
      postal_code: string;
      prefecture: string;
      city: string;
      addressLine1: string;
      addressLine2?: string;
      phone_number: string;
      user_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await ownerApi.ownerRegister(formData);

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

export interface OwnerState {
  id: number;
  store_name: string;
  postal_code: string;
  prefecture: string;
  city: string;
  address_line1: string;
  address_line2?: string;
  phone_number: string;
  user_id: number;
}

export interface RootState {
  owner: OwnerState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: any | null;
}

const initialState: RootState = {
  owner: [],
  status: "idle",
  message: null,
  error: null,
};

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ownerRegister.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(ownerRegister.fulfilled, (state, action) => {
      state.status = "success";
      state.owner = action.payload;
      state.message = "オーナー登録が完了しました。";
    });
    builder.addCase(ownerRegister.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });
  },
});

const ownerReducer = ownerSlice.reducer;

export default ownerReducer;
