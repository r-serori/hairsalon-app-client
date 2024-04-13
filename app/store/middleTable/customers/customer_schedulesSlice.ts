import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";

export interface customer_schedulesState {
  // ステートの型
  customers_id: number;
  schedules_id: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: customer_schedulesState = {
  // 初期状態
  customers_id: 0,
  schedules_id: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const customer_schedulesSlice = createSlice({
  name: "customer_schedules",
  initialState,
  reducers: {

    setCustomer_id: (state, action: PayloadAction<number>) => {
      state.customers_id = action.payload;
    },
    setSchedule_id: (state, action: PayloadAction<number>) => {
      state.schedules_id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});


export const { setCustomer_id, setSchedule_id, setLoading, setError } =
  customer_schedulesSlice.actions;

export const customer_schedulesReducer = customer_schedulesSlice.reducer;

export default customer_schedulesReducer;


// Action Creators
export const createCustomer_schedules =
  (formData: {
    customers_id: number;
    schedules_id: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/customer_schedules", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
