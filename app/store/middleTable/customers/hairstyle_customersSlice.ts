import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { hairstyleCustomerApi } from "../../../services/middleTable/customers/hairstyle_customersApi";

export interface Hairstyle_customersState {
  // ステートの型
  hairstyles_id: number;
  customers_id: number;
  loading: boolean;
  error: string | null;
}

const initialState: Hairstyle_customersState = {
  // 初期状態
  hairstyles_id: 0,
  customers_id: 0,
  loading: false,
  error: null,
};

const hairstyle_customersSlice = createSlice({
  name: "hairstyle_customers",
  initialState,
  reducers: {
    setHairstyle_id: (state, action: PayloadAction<number>) => {
      state.hairstyles_id = action.payload;
    },
    setCustomer_id: (state, action: PayloadAction<number>) => {
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

export const { setHairstyle_id, setCustomer_id, setLoading, setError } =
  hairstyle_customersSlice.actions;

export const hairstyle_customersReducer = hairstyle_customersSlice.reducer;

export default hairstyle_customersReducer;

// Action Creators
export const createHairstyle_customers =
  (formData: { hairstyles_id: number; customers_id: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await hairstyleCustomerApi.createHairstyleCustomer(
        formData
      );
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
