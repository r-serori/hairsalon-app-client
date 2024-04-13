import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { attendance_timeApi } from '../../../services/attendances/attendance_times/api';
import { AppThunk } from '../../../redux/store';


export interface Attendance_timeState {
  // ステートの型
  id: number;
  date: Date;
  start_time:Date;
  end_time: Date;
  break_time: number;
  attendance_id: number;//外部キー
  cerated_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Attendance_timeState = {
  // 初期状態
  id: 0,
  date: new Date(),
  start_time: new Date(),
  end_time: new Date(),
  break_time: 0,
  attendance_id: 0,
  cerated_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const attendance_timeSlice = createSlice({
  name: 'attendance_time',
  initialState,
  reducers: {
    setAttendanceTimeDate: (state, action: PayloadAction<Date>) => {
      state.date= action.payload;
    },
    setStartTime: (state, action: PayloadAction<Date>) => {
      state.start_time = action.payload;
    },
    setEndTime: (state, action: PayloadAction<Date>) => {
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


export const { setAttendanceTimeDate, setStartTime, setEndTime, setBreakTime, setAttendanceId, setLoading, setError } = attendance_timeSlice.actions;

export const attendance_timeReducer = attendance_timeSlice.reducer;

export default attendance_timeReducer;


// Action Creators
export const createAttendance_time = (formData: {
  id: number;
  date: Date;
  start_time: Date;
  end_time: Date;
  break_time: number;
  attendance_id: number;
  created_at: Date;
  updated_at: Date;
}): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await attendance_timeApi.create(formData);
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setError(error.toString()));
  }
  };

export const fetchAllAttendance_time = (attendance_id: number): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await attendance_timeApi.fetchAll(attendance_id);
    dispatch(setLoading(false));
    console.log(response);
    return response;
  } catch (error) {
    dispatch(setError(error.toString()));
  }
}