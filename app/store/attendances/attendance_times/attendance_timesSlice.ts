import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { attendance_timeApi } from "../../../services/attendances/attendance_times/api";
import { AppThunk } from "../../../redux/store";

export interface Attendance_timeState {
  // ステートの型
  id: number;
  date: string; // Date型からstring型に変更
  start_time: string; // Date型からstring型に変更
  end_time: string; // Date型からstring型に変更
  break_time: number;
  attendance_id: number; // 外部キー
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: Attendance_timeState = {
  // 初期状態
  id: 0,
  date: new Date().toISOString(), // 日付を文字列に変換
  start_time: new Date().toISOString(), // 日付を文字列に変換
  end_time: new Date().toISOString(), // 日付を文字列に変換
  break_time: 0,
  attendance_id: 0,
  created_at: "", // 初期値は空の文字列
  updated_at: "", // 初期値は空の文字列
  loading: false,
  error: null,
};

const attendance_timeSlice = createSlice({
  name: "attendance_time",
  initialState,
  reducers: {
    setAttendanceTimeDate: (state, action: PayloadAction<string>) => {
      // 文字列型に変更
      state.date = action.payload;
    },
    setStartTime: (state, action: PayloadAction<string>) => {
      // 文字列型に変更
      state.start_time = action.payload;
    },
    setEndTime: (state, action: PayloadAction<string>) => {
      // 文字列型に変更
      state.end_time = action.payload;
    },
    setBreakTime: (state, action: PayloadAction<number>) => {
      state.break_time = action.payload;
    },
    setAttendanceId: (state, action: PayloadAction<number>) => {
      state.attendance_id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setAttendanceTimeDate,
  setStartTime,
  setEndTime,
  setBreakTime,
  setAttendanceId,
  setLoading,
  setError,
} = attendance_timeSlice.actions;

export const attendance_timeReducer = attendance_timeSlice.reducer;

export default attendance_timeReducer;

// Action Creators
export const createAttendance_time =
  (formData: {
    id: number;
    date: string; // 文字列型に変更
    start_time: string; // 文字列型に変更
    end_time: string; // 文字列型に変更
    break_time: number;
    attendance_id: number;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const convertedFormData = {
        ...formData,
        date: new Date(formData.date),
        start_time: new Date(formData.start_time),
        end_time: new Date(formData.end_time),
      };
      const response = await attendance_timeApi.createAttendanceTimes(
        convertedFormData
      );
      dispatch(setLoading(false));
      console.log("Attendance time created successfully", response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
