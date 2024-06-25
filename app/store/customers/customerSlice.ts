import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerApi } from "../../services/customers/api";
import RootState from "../../redux/reducers/rootReducer";
import {
  getSchedule,
  createCustomerAndSchedule,
  updateCustomerAndSchedule,
  updateCustomerAndScheduleCreate,
} from "../../store/schedules/scheduleSlice";

export const getCustomer = createAsyncThunk(
  "customer/getCustomer",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response: any = await customerApi.fetchAllCustomers(owner_id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
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
      user_id: number[];
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await customerApi.createCustomer(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

// export const getCustomerById = createAsyncThunk(
//   "customer/getCustomerById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await customerApi.fetchCustomerById(id);
//     if (response.resStatus === "error") {
//       //エラー時の処理
//       console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
//       return rejectWithValue(response);
//     } else if (response.data.resStatus === "error") {
//       //エラー時の処理
//       console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
//       return rejectWithValue(response.data);
//     } else if (response.resStatus === "success") {
//       //成功時の処理
//       console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
//       return response;
//     } else if (response.data.resStatus === "success") {
//       //成功時の処理
//       console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
//       return response.data;
//     }
//   }
// );

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
      user_id: number[];
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await customerApi.updateCustomer(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "customer/deleteCustomer",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await customerApi.deleteCustomer(id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
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
  user_id?: number[];
  owner_id: number;
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
      state.message = action.payload.message
        ? action.payload.message
        : "顧客情報を取得しました！";
    });
    builder.addCase(getCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as any).message;
    });

    builder.addCase(createCustomer.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = [...state.customers, action.payload.customer];
      state.message = action.payload.message
        ? action.payload.message
        : "顧客情報を作成しました！";
    });
    builder.addCase(createCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    // builder.addCase(getCustomerById.pending, (state) => {
    //   state.loading = true;
    //   state.message = null;
    //   state.error = null;
    // });
    // builder.addCase(getCustomerById.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.customers = [...state.customers, action.payload.customer];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "顧客情報を取得しました！";
    // });
    // builder.addCase(getCustomerById.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message!;
    // });

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
      state.message = action.payload.message
        ? action.payload.message
        : "顧客情報を更新しました！";
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
        (customer) => customer.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "顧客情報を削除しました！";
    });
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as any).message;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.customers = [...state.customers, ...action.payload.customers];
    });

    builder.addCase(createCustomerAndSchedule.fulfilled, (state, action) => {
      state.customers = [...state.customers, action.payload.customer];
    });

    builder.addCase(
      updateCustomerAndScheduleCreate.fulfilled,
      (state, action) => {
        state.customers = state.customers.map((customer) =>
          customer.id === action.payload.customer.id
            ? { ...customer, ...action.payload.customer }
            : customer
        );
      }
    );

    builder.addCase(updateCustomerAndSchedule.fulfilled, (state, action) => {
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
