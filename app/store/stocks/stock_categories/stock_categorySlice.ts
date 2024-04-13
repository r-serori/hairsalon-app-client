import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";

export interface Stock_categoryState {
  // ステートの型
  id: number;
  category: string;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Stock_categoryState = {
  // 初期状態
  id: 0,
  category: "",
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const stock_categorySlice = createSlice({
  name: "stock_category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});


export const { setCategory, setLoading, setError } = stock_categorySlice.actions;

 const stock_categoryReducer = stock_categorySlice.reducer;

export default stock_categoryReducer;

// Action Creators
export const createStock_category =
  (formData: {
    id: number;
    category: string;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/stock_categories", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
