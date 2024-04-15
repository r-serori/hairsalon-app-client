import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../redux/store";
import { schedulesApi } from "../../services/schedules/api";

export interface ScheduleState {
  // ステートの型
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  price: number;
  customers_id: number;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: ScheduleState = {
  // 初期状態
  id: 0,
  date: new Date().toISOString(),
  start_time: new Date().toISOString(),
  end_time: new Date().toISOString(),
  price: 0,
  customers_id: 0,
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setStartTime: (state, action: PayloadAction<string>) => {
      state.start_time = action.payload;
    },
    setEndTime: (state, action: PayloadAction<string>) => {
      state.end_time = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setCustomerId: (state, action: PayloadAction<number>) => {
      state.customers_id = action.payload;
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
  setDate,
  setStartTime,
  setEndTime,
  setPrice,
  setLoading,
  setError,
} = scheduleSlice.actions;

export const scheduleReducer = scheduleSlice.reducer;

export default scheduleReducer;

// Action Creators
export const createSchedule =
  (formData: {
    id: number;
    date: string;
    start_time: string;
    end_time: string;
    price: number;
    customers_id: number;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await schedulesApi.createSchedule(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
