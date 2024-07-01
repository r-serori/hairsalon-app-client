import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { merchandiseCustomerApi } from "../../../services/middleTable/customers/merchandise_customersApi";
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

// export const getMerchandise_customers = createAsyncThunk(
//   "merchandise_customers/getMerchandise_customers",
//   async (formData: {}, { rejectWithValue }) => {
//     try {
//       const response: any =
//         await merchandiseCustomerApi.fetchAllMerchandiseCustomers();

//       if (response.status >= 200 && response.status < 300) {
//         // 成功時の処理
//         console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
//         return response.data; // response.dataを返すことで、必要なデータのみを返す
//       } else if (response.status >= 400 && response.status < 500) {
//         // クライアントエラー時の処理
//         console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
//         return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
//       } else if (response.status >= 500) {
//         // サーバーエラー時の処理
//         console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
//         return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
//       } else {
//         return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
//       }
//     } catch (err) {
//       console.log("errだよ", err);
//       return rejectWithValue(
//         err.response
//           ? err.response.data
//           : { message: "予期しないエラーが発生しました" }
//       );
//     }
//   }
// );
export interface Merchandise_customersState {
  // ステートの型
  merchandise_id: number;
  customer_id: number;
}

export interface RootState {
  // RootStateの型
  merchandise_customers: Merchandise_customersState[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
}

export const initialState: RootState = {
  merchandise_customers: [],
  status: "idle",
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
                stateMerchandise_customer.customer_id ===
                payloadMerchandise_customer.customer_id
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
                stateMerchandise_customer.customer_id ===
                payloadMerchandise_customer.customer_id
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
                  stateMerchandise_customer.customer_id ===
                  payloadMerchandise_customer.customer_id
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
                stateMerchandise_customer.customer_id ===
                payloadMerchandise_customer.customer_id
            )
        ),
        ...action.payload.merchandise_customers,
      ];
    });
  },
});

const merchandise_customersReducer = merchandise_customersSlice.reducer;

export default merchandise_customersReducer;
