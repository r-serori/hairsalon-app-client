import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerApi } from "../../services/customers/api";
import RootState from "../../redux/reducers/rootReducer";
import {
  getSchedule,
  createCustomerAndSchedule,
  updateCustomerAndSchedule,
  updateCustomerAndScheduleCreate,
} from "../../store/schedules/scheduleSlice";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";
import { stat } from "fs";

export const getCustomer = createAsyncThunk(
  "customer/getCustomer",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await customerApi.fetchAllCustomers();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const createCustomer = createAsyncThunk(
  "customer/createCustomer",
  async (
    formData: {
      id: number;
      customer_name: string;
      phone_number: string;
      remarks: string;
      course_id: number[];
      option_id: number[];
      merchandise_id: number[];
      hairstyle_id: number[];
      user_id: number[];
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await customerApi.createCustomer(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async (
    formData: {
      id: number;
      customer_name: string;
      phone_number: string;
      remarks: string;
      course_id: number[];
      option_id: number[];
      merchandise_id: number[];
      hairstyle_id: number[];
      user_id: number[];
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await customerApi.updateCustomer(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "customer/deleteCustomer",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await customerApi.deleteCustomer(id);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface CustomerState {
  // ステートの型
  id: number;
  customer_name: string;
  phone_number: string | null;
  remarks: string | null;
  course_id: number[] | null;
  option_id: number[] | null;
  merchandise_id: number[] | null;
  hairstyle_id: number[] | null;
  user_id: number[] | null;
}

export interface RootState {
  // ルートステートの型を定義
  customers: CustomerState[]; // 顧客情報の配列
  status: "idle" | "loading" | "success" | "failed"; // ローディング状態
  message: string | null; // メッセージ
  error: string | null; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  customers: [], // 顧客情報の配列
  status: "idle", // ローディング状態
  message: null, // メッセージ
  error: null, // エラーメッセージ
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.status = "success";

      state.customers =
        action.payload.customers.length === 0
          ? []
          : action.payload.customers.length
          ? [...state.customers, ...action.payload.customers]
          : state.customers;

      state.message = action.payload.message
        ? action.payload.message
        : "顧客情報を取得しました！";
    });
    builder.addCase(getCustomer.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createCustomer.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.status = "success";
      state.customers = [...state.customers, action.payload.customer];
      state.message = action.payload.message
        ? action.payload.message
        : "顧客情報を作成しました！";
    });
    builder.addCase(createCustomer.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateCustomer.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });

    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.status = "success";
      state.customers =
        state.customers.length === 1
          ? [action.payload.customer]
          : state.customers.map((customer) =>
              customer.id === action.payload.customer.id
                ? { ...customer, ...action.payload.customer }
                : customer
            );
      state.message = action.payload.message
        ? action.payload.message
        : "顧客情報を更新しました！";
    });

    builder.addCase(updateCustomer.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(deleteCustomer.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.status = "success";
      state.customers = state.customers.filter(
        (customer) => customer.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "顧客情報を削除しました！";
    });
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.customers = action.payload.customers;
    });

    builder.addCase(createCustomerAndSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.customers =
        state.customers.length === 0
          ? [action.payload.customer]
          : [...state.customers, action.payload.customer];
    });

    builder.addCase(
      updateCustomerAndScheduleCreate.fulfilled,
      (state, action) => {
        state.status = "success";
        state.customers = state.customers.map((customer) =>
          customer.id === action.payload.customer.id
            ? { ...customer, ...action.payload.customer }
            : customer
        );
      }
    );

    builder.addCase(updateCustomerAndSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.customers = state.customers.map((customer) =>
        customer.id === action.payload.customer.id
          ? { ...customer, ...action.payload.customer }
          : customer
      );
    });
  },
});

const customerReducer = customerSlice.reducer;

export default customerReducer;
