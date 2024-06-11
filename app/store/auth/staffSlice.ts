import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import RootState from "../../redux/reducers/rootReducer";
import { staffApi } from "../../services/auth/staffApi";

export const staffRegister = createAsyncThunk(
  "staff/register",
  async (
    formData: {
      position: string;
      user_id: number;
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    const response = await staffApi.staffRegister(formData);
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

export interface StaffState {
  id: number;
  position: string;
  user_id: number;
  owner_id: number;
}

export interface RootState {
  staff: StaffState[];
  loading: boolean;
  message: string | null;
  error: any | null;
}

const initialState: RootState = {
  staff: [],
  loading: false,
  message: null,
  error: null,
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(staffRegister.pending, (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(staffRegister.fulfilled, (state, action) => {
      state.staff = action.payload.responseUser;
      state.loading = false;
      state.message = "登録が完了しました";
    });
    builder.addCase(staffRegister.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.loading = false;
    });
  },
});

const staffReducer = staffSlice.reducer;

export default staffReducer;
