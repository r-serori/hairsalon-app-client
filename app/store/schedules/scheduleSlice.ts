import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../redux/store';
import { sendRequest } from '../../services/requestApi';



export interface ScheduleState {
  // ステートの型
  id: number;
  date: Date;
  start_time: Date;
  end_time: Date;
  price: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: ScheduleState = {
  // 初期状態
  id: 0,
  date: new Date(),
  start_time: new Date(),
  end_time: new Date(),
  price: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    }
    ,
    setStartTime: (state, action: PayloadAction<Date>) => {
      state.start_time = action.payload;
    }
    ,
    setEndTime: (state, action: PayloadAction<Date>) => {
      state.end_time = action.payload;
    }
    ,
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    }
    ,
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setDate, setStartTime, setEndTime, setPrice, setLoading, setError } = scheduleSlice.actions;

export const scheduleReducer = scheduleSlice.reducer;

export default scheduleReducer;


// Action Creators
export const createSchedule = (formData: {
  id: number,
  date: Date,
  start_time: Date,
  end_time: Date,
  price: number,
  created_at: Date,
  updated_at: Date,
}): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await sendRequest('/schedules', 'POST', formData);
    dispatch(setLoading(false));
    console.log(response);
    return response;
  } catch (error) {
    dispatch(setError(error.toString()));
  }
}