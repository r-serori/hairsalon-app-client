import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseCustomerApi } from "../../../services/middleTable/customers/merchandise_customersApi";
import RootState from "../../../redux/reducers/rootReducer";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
} from "../../customers/customerSlice";
import { getSchedule } from "../../schedules/scheduleSlice";

export const getMerchandise_customers = createAsyncThunk(
  "merchandise_customers/getMerchandise_customers",
  async (formData: {}, { rejectWithValue }) => {
    const response: any =
      await merchandiseCustomerApi.fetchAllMerchandiseCustomers();
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
export interface Merchandise_customersState {
  // ステートの型
  merchandises_id: number;
  customers_id: number;
}

export interface RootState {
  // RootStateの型
  merchandise_customers: Merchandise_customersState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  merchandise_customers: [],
  loading: false,
  error: null,
};

const merchandise_customersSlice = createSlice({
  name: "merchandise_customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.merchandise_customers = action.payload.merchandise_customers;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.merchandise_customers = action.payload.merchandise_customers;
    });

    // builder.addCase(createCustomer.fulfilled, (state, action) => {
    //   state.merchandise_customers = state.merchandise_customers.map(
    //     (stateMerchandise_customer) =>
    //       action.payload.merchandise_customers.map(
    //         (payloadMerchandise_customer) =>
    //           stateMerchandise_customer.customers_id ===
    //           payloadMerchandise_customer.customers_id
    //             ? {
    //                 ...stateMerchandise_customer,
    //                 ...payloadMerchandise_customer,
    //               }
    //             : stateMerchandise_customer
    //       )
    //   );
    // });

    // builder.addCase(updateCustomer.fulfilled, (state, action) => {
    //   state.merchandise_customers = state.merchandise_customers.map(
    //     (stateMerchandise_customer) =>
    //       action.payload.merchandise_customers.map(
    //         (payloadMerchandise_customer) =>
    //           stateMerchandise_customer.customers_id ===
    //           payloadMerchandise_customer.customers_id
    //             ? {
    //                 ...stateMerchandise_customer,
    //                 ...payloadMerchandise_customer,
    //               }
    //             : stateMerchandise_customer
    //       )
    //   );
    // });
  },
});

const merchandise_customersReducer = merchandise_customersSlice.reducer;

export default merchandise_customersReducer;
