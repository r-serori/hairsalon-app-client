import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerApi } from "../../services/customers/api";
import RootState from "../../redux/reducers/rootReducer";
import {
  getSchedule,
  createCustomerAndSchedule,
  updateCustomerAndSchedule,
  updateCustomerAndScheduleCreate,
} from "../../store/schedules/scheduleSlice";
import { s } from "@fullcalendar/core/internal-common";

export const getCustomer = createAsyncThunk(
  "customer/getCustomer",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await customerApi.fetchAllCustomers();

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
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

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
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

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
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
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
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
      state.status = "success";
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
      state.status = "success";
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

    // builder.addCase(getCustomerById.pending, (state) => {
    //   state.status = "success";
    //   state.message = null;
    //   state.error = null;
    // });
    // builder.addCase(getCustomerById.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.customers = [...state.customers, action.payload.customer];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "顧客情報を取得しました！";
    // });
    // builder.addCase(getCustomerById.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = (action.payload as any).message;
    // });

    builder.addCase(updateCustomer.pending, (state) => {
      state.status = "success";
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
      state.status = "success";
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
      state.customers = action.payload.customers;
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
