import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import RootState from "../../redux/reducers/rootReducer";
import { staffRegister } from "./authSlice";

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
    builder.addCase(staffRegister.fulfilled, (state, action) => {
      state.staff = action.payload.responseStaff;
      state.loading = false;
      state.message = "スタッフの登録が完了しました!";
    });
  },
});

const staffReducer = staffSlice.reducer;

export default staffReducer;
