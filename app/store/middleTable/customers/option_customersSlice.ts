import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { optionCustomerApi } from "../../../services/middleTable/customers/option_customersApi";
import RootState from "../../../redux/reducers/rootReducer";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
} from "../../customers/customerSlice";
import {
  getSchedule,
  createCustomerSchedule,
  updateCustomerOnlySchedule,
  updateCustomerSchedule,
} from "../../schedules/scheduleSlice";

export const getOption_customers = createAsyncThunk(
  "option_customers/getOption_customers",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await optionCustomerApi.fetchAllOptionCustomers();
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
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
      state.option_customers = [
        ...state.option_customers,
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers,
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers.filter(
          (stateOptionCustomer) =>
            !action.payload.option_customers.some(
              (payloadOptionCustomer) =>
                stateOptionCustomer.customers_id ===
                payloadOptionCustomer.customers_id
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
                stateOptionCustomers.customers_id ===
                payloadOptionCustomers.customers_id
            )
        ),
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(createCustomerSchedule.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers,
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(updateCustomerOnlySchedule.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers.filter(
          (stateOptionCustomers) =>
            !action.payload.option_customers.some(
              (payloadOptionCustomers) =>
                stateOptionCustomers.customers_id ===
                payloadOptionCustomers.customers_id
            )
        ),
        ...action.payload.option_customers,
      ];
    });

    builder.addCase(updateCustomerSchedule.fulfilled, (state, action) => {
      state.option_customers = [
        ...state.option_customers.filter(
          (stateOptionCustomers) =>
            !action.payload.option_customers.some(
              (payloadOptionCustomers) =>
                stateOptionCustomers.customers_id ===
                payloadOptionCustomers.customers_id
            )
        ),
        ...action.payload.option_customers,
      ];
    });
  },
});

const option_customersReducer = option_customersSlice.reducer;

export default option_customersReducer;
