import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { merchandiseCustomerApi } from "../../../services/middleTable/customers/merchandise_customersApi";

export interface Merchandise_customersState {
  // ステートの型
  merchandises_id: number;
  customers_id: number;
  loading: boolean;
  error: string | null;
}

const initialState: Merchandise_customersState = {
  // 初期状態
  merchandises_id: 0,
  customers_id: 0,
  loading: false,
  error: null,
};

const merchandise_customersSlice = createSlice({
  name: "merchandise_customers",
  initialState,
  reducers: {
    setMerchandise_id: (state, action: PayloadAction<number>) => {
      state.merchandises_id = action.payload;
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

export const { setMerchandise_id, setCustomer_id, setLoading, setError } =
  merchandise_customersSlice.actions;

export const merchandise_customersReducer = merchandise_customersSlice.reducer;

export default merchandise_customersReducer;

// Action Creators
export const createMerchandise_customers =
  (formData: { merchandises_id: number; customers_id: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await merchandiseCustomerApi.createMerchandiseCustomer(
        formData
      );
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
