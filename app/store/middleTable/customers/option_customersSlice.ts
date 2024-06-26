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
} from "../../schedules/scheduleSlice";

// export const getOption_customers = createAsyncThunk(
//   "option_customers/getOption_customers",
//   async (formData: {}, { rejectWithValue }) => {
//     try {
//       const response: any = await optionCustomerApi.fetchAllOptionCustomers();

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
export interface Option_customersState {
  // ステートの型
  option_id: number;
  customer_id: number;
  owner_id: number;
}

export interface RootState {
  // RootStateの型
  option_customers: Option_customersState[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
}

export const initialState: RootState = {
  option_customers: [],
  status: "idle",
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
  },
});

const option_customersReducer = option_customersSlice.reducer;

export default option_customersReducer;
