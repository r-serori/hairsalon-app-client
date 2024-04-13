import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { attendanceApi } from '../../services/attendances/api';
import { AppThunk } from '../../redux/store';


export interface AttendanceState {
  // ステートの型
  id: number;
  attendance_name: string;
  position: string;
  phone_number: string;
  address: string;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: AttendanceState = {
  // 初期状態
id: 0,
  attendance_name: '',
  position: '',
  phone_number: '',
  address: '',
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    setAttendanceName: (state, action: PayloadAction<string>) => {
      state.attendance_name = action.payload;
    },
    setPosition: (state, action: PayloadAction<string>) => {
      state.position = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phone_number = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setAttendanceName, setPosition, setPhoneNumber, setAddress, setLoading, setError } = attendanceSlice.actions;


export const attendanceReducer = attendanceSlice.reducer;

export default attendanceReducer;


// Action Creators
export const createAttendance = (formData:{
  attendance_name: string,
  position: string,
  phone_number: string,
  address: string,
  created_at: Date,
  updated_at: Date,
}): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await attendanceApi(formData);
    dispatch(setLoading(false));
    console.log(response);
    return response;
  } catch (error) {
    dispatch(setError(error.toString()));
  }
}