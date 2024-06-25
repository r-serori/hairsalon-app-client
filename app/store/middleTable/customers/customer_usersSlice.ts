import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerUserApi } from "../../../services/middleTable/customers/customer_usersApi";
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

export const getCustomer_users = createAsyncThunk(
  "customer_users/getCustomer_users",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await customerUserApi.fetchAllCustomerUsers();

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

export interface Customer_usersState {
  // ステートの型
  customers_id: number;
  user_id: number;
  owner_id: number;
}

export interface RootState {
  // RootStateの型
  customer_users: Customer_usersState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  customer_users: [],
  loading: false,
  error: null,
};

const customer_usersSlice = createSlice({
  name: "customer_users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.customer_users = [
        ...state.customer_users,
        ...action.payload.customer_users,
      ];
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.customer_users = [
        ...state.customer_users,
        ...action.payload.customer_users,
      ];
    });

    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.customer_users = [
        ...state.customer_users.filter(
          (stateCustomerAttendance) =>
            !action.payload.customer_users.some(
              (payloadCustomerAttendance) =>
                stateCustomerAttendance.customers_id ===
                payloadCustomerAttendance.customers_id
            )
        ),
        ...action.payload.customer_users,
      ];
    });

    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.customer_users = [
        ...state.customer_users.filter(
          (stateCustomerAttendance) =>
            !action.payload.customer_users.some(
              (payloadCustomerAttendance) =>
                stateCustomerAttendance.customers_id ===
                payloadCustomerAttendance.customers_id
            )
        ),
        ...action.payload.customer_users,
      ];
    });

    builder.addCase(createCustomerAndSchedule.fulfilled, (state, action) => {
      state.customer_users = [
        ...state.customer_users,
        ...action.payload.customer_users,
      ];
    });

    builder.addCase(
      updateCustomerAndScheduleCreate.fulfilled,
      (state, action) => {
        state.customer_users = [
          ...state.customer_users.filter(
            (stateCustomerAttendance) =>
              !action.payload.customer_users.some(
                (payloadCustomerAttendance) =>
                  stateCustomerAttendance.customers_id ===
                  payloadCustomerAttendance.customers_id
              )
          ),
          ...action.payload.customer_users,
        ];
      }
    );

    builder.addCase(updateCustomerAndSchedule.fulfilled, (state, action) => {
      state.customer_users = [
        ...state.customer_users.filter(
          (stateCustomerAttendance) =>
            !action.payload.customer_users.some(
              (payloadCustomerAttendance) =>
                stateCustomerAttendance.customers_id ===
                payloadCustomerAttendance.customers_id
            )
        ),
        ...action.payload.customer_users,
      ];
    });
  },
});

const customer_usersReducer = customer_usersSlice.reducer;

export default customer_usersReducer;
