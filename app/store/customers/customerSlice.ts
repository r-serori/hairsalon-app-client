import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../redux/store";
import { customerApi } from "../../services/customers/api";

export interface CustomerState {
  // ステートの型
  id: number;
  customer_name: string;
  phone_number: string;
  remarks: string;
  new_customer: boolean;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: CustomerState = {
  // 初期状態
  id: 0,
  customer_name: "",
  phone_number: "",
  remarks: "",
  new_customer: false,
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerName: (state, action: PayloadAction<string>) => {
      state.customer_name = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phone_number = action.payload;
    },
    setRemarks: (state, action: PayloadAction<string>) => {
      state.remarks = action.payload;
    },
    setNewCustomer: (state, action: PayloadAction<boolean>) => {
      state.new_customer = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCustomerName,
  setPhoneNumber,
  setRemarks,
  setNewCustomer,
  setLoading,
  setError,
} = customerSlice.actions;

export const customerReducer = customerSlice.reducer;

export default customerReducer;

// Action Creators
export const createCustomer =
  (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    new_customer: boolean;
    address: string;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await customerApi.createCustomer(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
