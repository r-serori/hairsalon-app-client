import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerApi } from "../../services/customers/api";
import RootState from "../../redux/reducers/rootReducer";
import { getSchedule } from "../schedules/scheduleSlice";

export const getCustomer = createAsyncThunk(
  "customer/getCustomer",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await customerApi.fetchAllCustomers();
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
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
      courses_id: number[];
      options_id: number[];
      merchandises_id: number[];
      hairstyles_id: number[];
      attendances_id: number[];
    },
    { rejectWithValue }
  ) => {
    const response: any = await customerApi.createCustomer(formData);
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

export const getCustomerById = createAsyncThunk(
  "customer/getCustomerById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await customerApi.fetchCustomerById(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
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
      courses_id: number[];
      options_id: number[];
      merchandises_id: number[];
      hairstyles_id: number[];
      attendances_id: number[];
    },
    { rejectWithValue }
  ) => {
    const response: any = await customerApi.updateCustomer(formData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "customer/deleteCustomer",
  async (id: number, { rejectWithValue }) => {
    const response: any = await customerApi.deleteCustomer(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export interface CustomerState {
  // ステートの型
  id: number;
  customer_name: string;
  phone_number: string;
  remarks: string;
  courses_id?: number[];
  options_id?: number[];
  merchandises_id?: number[];
  hairstyles_id?: number[];
  attendances_id?: number[];
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  customers: CustomerState[]; // 顧客情報の配列
  loading: boolean; // ローディング状態
  message: string | null; // メッセージ
  error: string | null; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  customers: [], // 顧客情報の配列
  loading: false, // ローディング状態
  message: null, // メッセージ
  error: null, // エラーメッセージ
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = [...state.customers, ...action.payload.customers];
      state.message = "顧客情報を取得しました！";
    });
    builder.addCase(getCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createCustomer.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = [...state.customers, action.payload.customer];
      state.message = "顧客情報を作成しました！";
    });
    builder.addCase(createCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(getCustomerById.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getCustomerById.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = [...state.customers, action.payload.customer];
      state.message = "顧客情報を取得しました！";
    });
    builder.addCase(getCustomerById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(updateCustomer.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });

    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = state.customers.map((customer) =>
        customer.id === action.payload.customer.id
          ? { ...customer, ...action.payload.customer }
          : customer
      );
      state.message = "顧客情報を更新しました！";
    });

    builder.addCase(updateCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(deleteCustomer.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload.deleteId
      );
    });
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.customers = [...state.customers, ...action.payload.customers];
    });
  },
});

const customerReducer = customerSlice.reducer;

export default customerReducer;
