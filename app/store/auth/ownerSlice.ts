import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ownerApi } from "../../services/auth/ownerApi";
import RootState from "../../redux/reducers/rootReducer";
import { number } from "yup";

export const ownerRegister = createAsyncThunk(
  "owner/register",
  async (
    formData: {
      store_name: string;
      address: string;
      phone_number: string;

      user_id: number;
    },
    { rejectWithValue }
  ) => {
    const response = await ownerApi.ownerRegister(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
    }
  }
);

export interface OwnerState {
  id: number;
  store_name: string;
  address: string;
  phone_number: string;

  user_id: number;
}

export interface RootState {
  owner: OwnerState[];
  loading: boolean;
  message: string | null;
  error: any | null;
}

const initialState: RootState = {
  owner: [],
  loading: false,
  message: null,
  error: null,
};

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ownerRegister.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(ownerRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.owner = action.payload;
      state.message = "オーナー登録が完了しました。";
    });
    builder.addCase(ownerRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as any).message;
    });
  },
});

const ownerReducer = ownerSlice.reducer;

export default ownerReducer;
