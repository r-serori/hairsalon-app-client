import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { dailySaleApi } from "../../../services/daily_sales/api";
export interface Daily_salesState {
  // ステートの型
  id: number;
  date: string;
  daily_sales: number;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: Daily_salesState = {
  // 初期状態
  id: 0,
  date: new Date().toISOString(),
  daily_sales: 0,
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const daily_salesSlice = createSlice({
  name: "daily_sales",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setDaily_sales: (state, action: PayloadAction<number>) => {
      state.daily_sales = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setDate, setDaily_sales, setLoading, setError } =
  daily_salesSlice.actions;

export const daily_salesReducer = daily_salesSlice.reducer;

export default daily_salesReducer;

// Action Creators
export const createDaily_sales =
  (formData: { date: string; daily_sales: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await dailySaleApi.createDailySales(formData);
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
