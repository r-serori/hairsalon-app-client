import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { hairstyleCustomerApi } from "../../../services/middleTable/customers/hairstyle_customersApi";
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

// export const getHairstyle_customers = createAsyncThunk(
//   "hairstyle_customers/getHairstyle_customers",
//   async (formData: {}, { rejectWithValue }) => {
//     try {
//       const response: any =
//         await hairstyleCustomerApi.fetchAllHairstyleCustomers();

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
export interface Hairstyle_customersState {
  // ステートの型
  hairstyle_id: number;
  customer_id: number;
}

export interface RootState {
  // RootStateの型
  hairstyle_customers: Hairstyle_customersState[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
}

export const initialState: RootState = {
  hairstyle_customers: [],
  status: "idle",
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
                stateHairstyleCustomer.customer_id ===
                payloadHairstyleCustomer.customer_id
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
                stateHairstyleCustomer.customer_id ===
                payloadHairstyleCustomer.customer_id
            )
        ),
        ...action.payload.hairstyle_customers,
      ];
    });

    builder.addCase(createCustomerAndSchedule.fulfilled, (state, action) => {
      state.hairstyle_customers = [
        ...state.hairstyle_customers,
        ...action.payload.hairstyle_customers,
      ];
    });

    builder.addCase(
      updateCustomerAndScheduleCreate.fulfilled,
      (state, action) => {
        state.hairstyle_customers = [
          ...state.hairstyle_customers.filter(
            (stateHairstyleCustomer) =>
              !action.payload.hairstyle_customers.some(
                (payloadHairstyleCustomer) =>
                  stateHairstyleCustomer.customer_id ===
                  payloadHairstyleCustomer.customer_id
              )
          ),
          ...action.payload.hairstyle_customers,
        ];
      }
    );

    builder.addCase(updateCustomerAndSchedule.fulfilled, (state, action) => {
      state.hairstyle_customers = [
        ...state.hairstyle_customers.filter(
          (stateHairstyleCustomer) =>
            !action.payload.hairstyle_customers.some(
              (payloadHairstyleCustomer) =>
                stateHairstyleCustomer.customer_id ===
                payloadHairstyleCustomer.customer_id
            )
        ),
        ...action.payload.hairstyle_customers,
      ];
    });
  },
});

const hairstyle_customersReducer = hairstyle_customersSlice.reducer;

export default hairstyle_customersReducer;
