import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerScheduleApi } from "../../../services/middleTable/customers/customer_schedulesApi";
import RootState from "../../../redux/reducers/rootReducer";
import {
  getSchedule,
  selectGetSchedules,
  createCustomerSchedule,
  updateCustomerOnlySchedule,
  updateCustomerSchedule,
} from "../../schedules/scheduleSlice";

export const getCustomer_schedules = createAsyncThunk(
  "customer_schedules/getCustomer_schedules",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await customerScheduleApi.fetchAllCustomerSchedules();
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export interface Customer_schedulesState {
  // ステートの型
  id: number;
  customers_id: number;
  schedules_id: number;
}

export interface RootState {
  // RootStateの型
  customer_schedules: Customer_schedulesState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  customer_schedules: [],
  loading: false,
  error: null,
};

const customer_schedulesSlice = createSlice({
  name: "customer_schedules",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.customer_schedules = [
        ...state.customer_schedules,
        ...action.payload.customer_schedules,
      ];
    });
    builder.addCase(selectGetSchedules.fulfilled, (state, action) => {
      state.customer_schedules = [
        ...state.customer_schedules,
        ...action.payload.customer_schedules,
      ];
    });

    builder.addCase(createCustomerSchedule.fulfilled, (state, action) => {
      state.customer_schedules = [
        ...state.customer_schedules,
        action.payload.customer_schedules,
      ];
    });

    builder.addCase(updateCustomerOnlySchedule.fulfilled, (state, action) => {
      state.customer_schedules = [
        ...state.customer_schedules,
        action.payload.customer_schedules,
      ];
    });

    builder.addCase(updateCustomerSchedule.fulfilled, (state, action) => {
      state.customer_schedules = [
        ...state.customer_schedules,
        action.payload.customer_schedules,
      ];
    });
  },
});

const customer_schedulesReducer = customer_schedulesSlice.reducer;

export default customer_schedulesReducer;
