import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";

export interface Yearly_salesState {
  // ステートの型
  id: number;
  date: Date;
  yearly_sales: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Yearly_salesState = {
  // 初期状態
  id: 0,
date: new Date(),
  yearly_sales: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const yearly_salesSlice = createSlice({
  name: "yearly_sales",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
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

export const { setDate, setYearly_sales, setLoading, setError } =
  yearly_salesSlice.actions;
export const yearly_salesReducer = yearly_salesSlice.reducer;

export default yearly_salesReducer;

// Action Creators
export const createYearly_sales =
  (formData: {
    id: number;
    date: Date;
    yearly_sales: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/yearly_sales", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
