import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseCustomerApi } from "../../../services/middleTable/customers/merchandise_customersApi";
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
} from "../../schedules/scheduleSlice";

export const getMerchandise_customers = createAsyncThunk(
  "merchandise_customers/getMerchandise_customers",
  async (formData: {}, { rejectWithValue }) => {
    const response: any =
      await merchandiseCustomerApi.fetchAllMerchandiseCustomers();
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
export interface Merchandise_customersState {
  // ステートの型
  merchandises_id: number;
  customers_id: number;
  owner_id: number;
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

    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.merchandise_customers = [
        ...state.merchandise_customers.filter(
          (stateMerchandise_customer) =>
            !action.payload.merchandise_customers.some(
              (payloadMerchandise_customer) =>
                stateMerchandise_customer.customers_id ===
                payloadMerchandise_customer.customers_id
            )
        ),
        ...action.payload.merchandise_customers,
      ];
    });

    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.merchandise_customers = [
        ...state.merchandise_customers.filter(
          (stateMerchandise_customer) =>
            !action.payload.merchandise_customers.some(
              (payloadMerchandise_customer) =>
                stateMerchandise_customer.customers_id ===
                payloadMerchandise_customer.customers_id
            )
        ),
        ...action.payload.merchandise_customers,
      ];
    });

    builder.addCase(createCustomerAndSchedule.fulfilled, (state, action) => {
      state.merchandise_customers = [
        ...state.merchandise_customers,
        ...action.payload.merchandise_customers,
      ];
    });

    builder.addCase(
      updateCustomerAndScheduleCreate.fulfilled,
      (state, action) => {
        state.merchandise_customers = [
          ...state.merchandise_customers.filter(
            (stateMerchandise_customer) =>
              !action.payload.merchandise_customers.some(
                (payloadMerchandise_customer) =>
                  stateMerchandise_customer.customers_id ===
                  payloadMerchandise_customer.customers_id
              )
          ),
          ...action.payload.merchandise_customers,
        ];
      }
    );

    builder.addCase(updateCustomerAndSchedule.fulfilled, (state, action) => {
      state.merchandise_customers = [
        ...state.merchandise_customers.filter(
          (stateMerchandise_customer) =>
            !action.payload.merchandise_customers.some(
              (payloadMerchandise_customer) =>
                stateMerchandise_customer.customers_id ===
                payloadMerchandise_customer.customers_id
            )
        ),
        ...action.payload.merchandise_customers,
      ];
    });
  },
});

const merchandise_customersReducer = merchandise_customersSlice.reducer;

export default merchandise_customersReducer;
