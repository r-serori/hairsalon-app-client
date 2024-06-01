import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerAttendanceApi } from "../../../services/middleTable/customers/customer_attendancesApi";
import RootState from "../../../redux/reducers/rootReducer";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
} from "../../customers/customerSlice";
import { getSchedule } from "../../schedules/scheduleSlice";

export const getCustomer_attendances = createAsyncThunk(
  "customer_attendances/getCustomer_attendances",
  async (formData: {}, { rejectWithValue }) => {
    const response: any =
      await customerAttendanceApi.fetchAllCustomerAttendances();
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export interface Customer_attendancesState {
  // ステートの型
  customers_id: number;
  attendances_id: number;
}

export interface RootState {
  // RootStateの型
  customer_attendances: Customer_attendancesState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  customer_attendances: [],
  loading: false,
  error: null,
};

const customer_attendancesSlice = createSlice({
  name: "customer_attendances",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.customer_attendances = action.payload.customer_attendances;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.customer_attendances = action.payload.customer_attendances;
    });

    // builder.addCase(createCustomer.fulfilled, (state, action) => {
    //   state.customer_attendances = state.customer_attendances.map(
    //     (stateCustomer_attendance) =>
    //       action.payload.customer_attendances.map(
    //         (payloadCustomer_attendance) =>
    //           stateCustomer_attendance.customers_id ===
    //           payloadCustomer_attendance.customers_id
    //             ? {
    //                 ...stateCustomer_attendance,
    //                 ...payloadCustomer_attendance,
    //               }
    //             : stateCustomer_attendance
    //       )
    //   );
    // });

    // builder.addCase(updateCustomer.fulfilled, (state, action) => {
    //   state.customer_attendances = state.customer_attendances.map(
    //     (stateCustomer_attendance) =>
    //       action.payload.customer_attendances.map(
    //         (payloadCustomer_attendance) =>
    //           stateCustomer_attendance.customers_id ===
    //           payloadCustomer_attendance.customers_id
    //             ? {
    //                 ...stateCustomer_attendance,
    //                 ...payloadCustomer_attendance,
    //               }
    //             : stateCustomer_attendance
    //       )
    //   );
    // });
  },
});

const customer_attendancesReducer = customer_attendancesSlice.reducer;

export default customer_attendancesReducer;
