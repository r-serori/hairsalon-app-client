import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerAttendanceApi } from "../../../services/middleTable/customers/customer_attendancesApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getCustomer_attendances = createAsyncThunk(
  "customer_attendances/getCustomer_attendances",
  async () => {
    const customer_attendancesData: any =
      await customerAttendanceApi.fetchAllCustomerAttendances();
    console.log("customer_attendancesDataだよ");
    console.log(customer_attendancesData.customer_attendances);
    return customer_attendancesData.customer_attendances;
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
  reducers: {
    updateCustomer_attendancesInfo(
      state,
      action: PayloadAction<Customer_attendancesState[]>
    ) {
      const newCustomer_attendance = action.payload;
      state.customer_attendances.push(...newCustomer_attendance);
      return state;
    },

    deleteCustomer_attendancesInfo(state, action: PayloadAction<number>) {
      state.customer_attendances = state.customer_attendances.filter(
        (customer_attendances) =>
          customer_attendances.customers_id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCustomer_attendances.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCustomer_attendances.fulfilled, (state, action) => {
      state.customer_attendances = action.payload;
      state.loading = false;
    });
    builder.addCase(getCustomer_attendances.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  updateCustomer_attendancesInfo,
  deleteCustomer_attendancesInfo,
} = customer_attendancesSlice.actions;

const customer_attendancesReducer = customer_attendancesSlice.reducer;

export default customer_attendancesReducer;
