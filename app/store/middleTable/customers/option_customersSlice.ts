import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { optionCustomerApi } from "../../../services/middleTable/customers/option_customersApi";
import RootState from "../../../redux/reducers/rootReducer";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
} from "../../customers/customerSlice";
import { getSchedule } from "../../schedules/scheduleSlice";

export const getOption_customers = createAsyncThunk(
  "option_customers/getOption_customers",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await optionCustomerApi.fetchAllOptionCustomers();
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
export interface Option_customersState {
  // ステートの型
  options_id: number;
  customers_id: number;
}

export interface RootState {
  // RootStateの型
  option_customers: Option_customersState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  option_customers: [],
  loading: false,
  error: null,
};

const option_customersSlice = createSlice({
  name: "option_customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.option_customers = action.payload.option_customers;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.option_customers = action.payload.option_customers;
    });

    // builder.addCase(createCustomer.fulfilled, (state, action) => {
    //   state.option_customers = state.option_customers.map(
    //     (stateOption_customer) =>
    //       action.payload.option_customers.map((payloadOption_customer) =>
    //         stateOption_customer.customers_id ===
    //         payloadOption_customer.customers_id
    //           ? {
    //               ...stateOption_customer,
    //               ...payloadOption_customer,
    //             }
    //           : stateOption_customer
    //       )
    //   );
    // });

    // builder.addCase(updateCustomer.fulfilled, (state, action) => {
    //   state.option_customers = state.option_customers.map(
    //     (stateOption_customer) =>
    //       action.payload.option_customers.map((payloadOption_customer) =>
    //         stateOption_customer.customers_id ===
    //         payloadOption_customer.customers_id
    //           ? {
    //               ...stateOption_customer,
    //               ...payloadOption_customer,
    //             }
    //           : stateOption_customer
    //       )
    //   );
    // });
  },
});

const option_customersReducer = option_customersSlice.reducer;

export default option_customersReducer;
