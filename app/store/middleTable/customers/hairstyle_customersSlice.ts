import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { hairstyleCustomerApi } from "../../../services/middleTable/customers/hairstyle_customersApi";
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

export const getHairstyle_customers = createAsyncThunk(
  "hairstyle_customers/getHairstyle_customers",
  async (formData: {}, { rejectWithValue }) => {
    const response: any =
      await hairstyleCustomerApi.fetchAllHairstyleCustomers();
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
export interface Hairstyle_customersState {
  // ステートの型
  hairstyles_id: number;
  customers_id: number;
  owner_id: number;
}

export interface RootState {
  // RootStateの型
  hairstyle_customers: Hairstyle_customersState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  hairstyle_customers: [],
  loading: false,
  error: null,
};

const hairstyle_customersSlice = createSlice({
  name: "hairstyle_customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.hairstyle_customers = action.payload.hairstyle_customers;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.hairstyle_customers = action.payload.hairstyle_customers;
    });

    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.hairstyle_customers = [
        ...state.hairstyle_customers.filter(
          (stateHairstyleCustomer) =>
            !action.payload.hairstyle_customers.some(
              (payloadHairstyleCustomer) =>
                stateHairstyleCustomer.customers_id ===
                payloadHairstyleCustomer.customers_id
            )
        ),
        ...action.payload.hairstyle_customers,
      ];
    });

    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.hairstyle_customers = [
        ...state.hairstyle_customers.filter(
          (stateHairstyleCustomer) =>
            !action.payload.hairstyle_customers.some(
              (payloadHairstyleCustomer) =>
                stateHairstyleCustomer.customers_id ===
                payloadHairstyleCustomer.customers_id
            )
        ),
        ...action.payload.hairstyle_customers,
      ];
    });

    builder.addCase(createCustomerSchedule.fulfilled, (state, action) => {
      state.hairstyle_customers = [
        ...state.hairstyle_customers,
        ...action.payload.hairstyle_customers,
      ];
    });

    builder.addCase(updateCustomerSchedule.fulfilled, (state, action) => {
      state.hairstyle_customers = [
        ...state.hairstyle_customers.filter(
          (stateHairstyleCustomer) =>
            !action.payload.hairstyle_customers.some(
              (payloadHairstyleCustomer) =>
                stateHairstyleCustomer.customers_id ===
                payloadHairstyleCustomer.customers_id
            )
        ),
        ...action.payload.hairstyle_customers,
      ];
    });

    builder.addCase(updateCustomerOnlySchedule.fulfilled, (state, action) => {
      state.hairstyle_customers = [
        ...state.hairstyle_customers.filter(
          (stateHairstyleCustomer) =>
            !action.payload.hairstyle_customers.some(
              (payloadHairstyleCustomer) =>
                stateHairstyleCustomer.customers_id ===
                payloadHairstyleCustomer.customers_id
            )
        ),
        ...action.payload.hairstyle_customers,
      ];
    });
  },
});

const hairstyle_customersReducer = hairstyle_customersSlice.reducer;

export default hairstyle_customersReducer;
