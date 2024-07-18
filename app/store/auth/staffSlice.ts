import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import RootState from "../../redux/reducers/rootReducer";
import { staffRegister } from "./userSlice";
import { handleErrorResponse, handleCatchError } from "../errorHandler";
import { ErrorType } from "../../components/Hooks/interface";

export interface StaffState {
  id: number;
  position: string;
  user_id: number;
  owner_id: number;
}

export interface RootState {
  staff: StaffState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: ErrorType;
}

const initialState: RootState = {
  staff: [],
  status: "idle",
  message: null,
  error: {
    message: null,
    status: 0,
  }, // エラーメッセージ
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

const staffReducer = staffSlice.reducer;

export default staffReducer;
