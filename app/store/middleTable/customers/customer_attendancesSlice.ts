import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { customerAttendanceApi } from "../../../services/middleTable/customers/customer_attendancesApi";

export interface customer_attendancesState {
  // ステートの型
  customers_id: number;
  attendances_id: number;
  loading: boolean;
  error: string | null;
}

const initialState: customer_attendancesState = {
  // 初期状態
  customers_id: 0,
  attendances_id: 0,
  loading: false,
  error: null,
};

const customer_attendancesSlice = createSlice({
  name: "customer_attendances",
  initialState,
  reducers: {
    setCustomer_id: (state, action: PayloadAction<number>) => {
      state.customers_id = action.payload;
    },
    setAttendance_id: (state, action: PayloadAction<number>) => {
      state.attendances_id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCustomer_id, setAttendance_id, setLoading, setError } =
  customer_attendancesSlice.actions;

export const customer_attendancesReducer = customer_attendancesSlice.reducer;

export default customer_attendancesReducer;

// Action Creators
export const createCustomer_attendances =
  (formData: { customers_id: number; attendances_id: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await customerAttendanceApi.createCustomerAttendance(
        formData
      );
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
