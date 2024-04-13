import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../redux/store";
import { sendRequest } from "../../services/requestApi";

export interface MerchandiseState {
  // ステートの型
  id: number;
  merchandise_name: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: MerchandiseState = {
  // 初期状態
  id: 0,
  merchandise_name: "",
  price: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const merchandiseSlice = createSlice({
  name: "merchandise",
  initialState,
  reducers: {
    setMerchandiseName: (state, action: PayloadAction<string>) => {
      state.merchandise_name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setMerchandiseName, setPrice, setLoading, setError } =
  merchandiseSlice.actions;

export const merchandiseReducer = merchandiseSlice.reducer;

export default merchandiseReducer;

// Action Creators
export const createMerchandise =
  (formData: {
    id: number;
    merchandise_name: string;
    price: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/merchandises", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
