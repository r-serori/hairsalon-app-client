import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { yearlySaleApi } from "../../../services/yearly_sales/api";

export interface Yearly_salesState {
  // ステートの型
  id: number;
  year: number;
  yearly_sales: number;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: Yearly_salesState = {
  // 初期状態
  id: 0,
  year: 0,
  yearly_sales: 0,
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const yearly_salesSlice = createSlice({
  name: "yearly_sales",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setYearly_sales: (state, action: PayloadAction<number>) => {
      state.yearly_sales = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setYear, setYearly_sales, setLoading, setError } =
  yearly_salesSlice.actions;
export const yearly_salesReducer = yearly_salesSlice.reducer;

export default yearly_salesReducer;

// Action Creators
export const createYearly_sales =
  (formData: { year: number; yearly_sales: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await yearlySaleApi.createYearlySales(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
