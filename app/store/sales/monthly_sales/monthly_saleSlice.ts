import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { monthlySaleApi } from "../../../services/monthly_sales/api";
export interface Monthly_salesState {
  // ステートの型
  id: number;
  year: number;
  month: number;
  monthly_sales: number;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: Monthly_salesState = {
  // 初期状態
  id: 0,
  year: 0,
  month: 0,
  monthly_sales: 0,
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const monthly_salesSlice = createSlice({
  name: "monthly_sales",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
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

export const { setYear, setMonth, setMonthly_sales, setLoading, setError } =
  monthly_salesSlice.actions;
export const monthly_salesReducer = monthly_salesSlice.reducer;

export default monthly_salesReducer;

// Action Creators
export const createMonthly_sales =
  (formData: {
    id: number;
    year: number;
    month: number;
    monthly_sales: number;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await monthlySaleApi.createMonthlySales(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
