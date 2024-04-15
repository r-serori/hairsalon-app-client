import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { optionCustomerApi } from "../../../services/middleTable/customers/option_customersApi";

export interface Option_customersState {
  // ステートの型
  options_id: number;
  customers_id: number;
  loading: boolean;
  error: string | null;
}

const initialState: Option_customersState = {
  // 初期状態
  options_id: 0,
  customers_id: 0,
  loading: false,
  error: null,
};

const option_customersSlice = createSlice({
  name: "option_customers",
  initialState,
  reducers: {
    setOption_id: (state, action: PayloadAction<number>) => {
      state.options_id = action.payload;
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

export const { setOption_id, setCustomer_id, setLoading, setError } =
  option_customersSlice.actions;

export const option_customersReducer = option_customersSlice.reducer;

export default option_customersReducer;

// Action Creators
export const createOption_customers =
  (formData: { options_id: number; customers_id: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await optionCustomerApi.createOptionCustomer(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
