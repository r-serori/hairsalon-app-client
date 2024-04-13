import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";

export interface Monthly_salesState {
  // ステートの型
  id: number;
  date: Date;
  monthly_sales: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Monthly_salesState = {
  // 初期状態
  id: 0,
date: new Date(),
  monthly_sales: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const monthly_salesSlice = createSlice({
  name: "monthly_sales",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    },
    setMonthly_sales: (state, action: PayloadAction<number>) => {
      state.monthly_sales = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setDate, setMonthly_sales, setLoading, setError } =
  monthly_salesSlice.actions;
export const monthly_salesReducer = monthly_salesSlice.reducer;

export default monthly_salesReducer;

// Action Creators
export const createMonthly_sales =
  (formData: {
    id: number;
    date: Date;
    monthly_sales: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/monthly_sales", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
