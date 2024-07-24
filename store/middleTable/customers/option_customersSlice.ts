import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { optionCustomerApi } from "../../../services/middleTable/customers/option_customersApi";
import RootState from "../../../redux/reducers/rootReducer";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
} from "../../customers/customerSlice";
import {
  getSchedule,
  createCustomerAndSchedule,
  updateCustomerAndSchedule,
  updateCustomerAndScheduleCreate,
  createCustomerAndUpdateSchedule,
} from "../../schedules/scheduleSlice";
import { deleteOption } from "../../options/optionSlice";
import { ErrorType } from "../../../components/Hooks/interface";

export interface Option_customersState {
  // ステートの型
  option_id: number;
  customer_id: number;
}

export interface RootState {
  // RootStateの型
  option_customers: Option_customersState[];
  status: "idle" | "loading" | "success" | "failed";
  error: ErrorType;
}

export const initialState: RootState = {
  option_customers: [],
  status: "idle",
  error: {
    message: "",
    status: 0,
  },
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

    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers.filter(
          (stateOptionCustomer) =>
            !action.payload.option_customers.some(
              (payloadOptionCustomer) =>
                stateOptionCustomer.customer_id ===
                payloadOptionCustomer.customer_id
            )
        ),
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers.filter(
          (stateOptionCustomers) =>
            !action.payload.option_customers.some(
              (payloadOptionCustomers) =>
                stateOptionCustomers.customer_id ===
                payloadOptionCustomers.customer_id
            )
        ),
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(createCustomerAndSchedule.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers,
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(
      updateCustomerAndScheduleCreate.fulfilled,
      (state, action) => {
        state.option_customers = [
          ...state.option_customers.filter(
            (stateOptionCustomers) =>
              !action.payload.option_customers.some(
                (payloadOptionCustomers) =>
                  stateOptionCustomers.customer_id ===
                  payloadOptionCustomers.customer_id
              )
          ),
          ...action.payload.option_customers,
        ];
      }
    );

    builder.addCase(updateCustomerAndSchedule.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers.filter(
          (stateOptionCustomers) =>
            !action.payload.option_customers.some(
              (payloadOptionCustomers) =>
                stateOptionCustomers.customer_id ===
                payloadOptionCustomers.customer_id
            )
        ),
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(
      createCustomerAndUpdateSchedule.fulfilled,
      (state, action) => {
        state.option_customers = [
          ...state.option_customers,
          ...action.payload.option_customers,
        ];
      }
    );

    builder.addCase(deleteOption.fulfilled, (state, action) => {
      state.option_customers = state.option_customers.filter(
        (option_customer) =>
          option_customer.option_id !== action.payload.deleteId
      );
    });
  },
});

const option_customersReducer = option_customersSlice.reducer;

export default option_customersReducer;
