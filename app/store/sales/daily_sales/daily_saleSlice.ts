import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";

export interface Daily_salesState {
  // ステートの型
  id: number;
  date: Date;
  daily_sales: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Daily_salesState = {
  // 初期状態
  id: 0,
  date: new Date(),
  daily_sales: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const daily_salesSlice = createSlice({
  name: "daily_sales",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date>) => {
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
  (formData: {
    id: number;
    date: Date;
    daily_sales: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/daily_sales", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
