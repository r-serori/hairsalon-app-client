import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerScheduleApi } from "../../../services/middleTable/customers/customer_schedulesApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getCustomer_schedules = createAsyncThunk(
  "customer_schedules/getCustomer_schedules",
  async () => {
    const customer_schedulesData: any =
      await customerScheduleApi.fetchAllCustomerSchedules();
    console.log("customer_schedulesDataだよ");
    console.log(customer_schedulesData.customer_schedules);
    return customer_schedulesData.customer_schedules;
  }
);

export interface Customer_schedulesState {
  // ステートの型
  id: number;
  customers_id: number;
  schedules_id: number;
}

export interface RootState {
  // RootStateの型
  customer_schedules: Customer_schedulesState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  customer_schedules: [],
  loading: false,
  error: null,
};

const customer_schedulesSlice = createSlice({
  name: "customer_schedules",
  initialState,
  reducers: {
    updateCustomer_schedulesInfo(
      state,
      action: PayloadAction<Customer_schedulesState>
    ) {
      const updatedCustomer_schedules = action.payload;
      const index = state.customer_schedules.findIndex(
        (customer_schedules) =>
          customer_schedules.id === updatedCustomer_schedules.id
      );
      if (index !== -1) {
        state.customer_schedules[index] = updatedCustomer_schedules;
      }
      return state;
    },

    deleteCustomer_schedulesInfo(state, action: PayloadAction<number>) {
      state.customer_schedules = state.customer_schedules.filter(
        (customer_schedules) => customer_schedules.id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCustomer_schedules.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCustomer_schedules.fulfilled, (state, action) => {
      state.customer_schedules = action.payload;
      state.loading = false;
    });
    builder.addCase(getCustomer_schedules.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateCustomer_schedulesInfo, deleteCustomer_schedulesInfo } =
  customer_schedulesSlice.actions;

const customer_schedulesReducer = customer_schedulesSlice.reducer;

export default customer_schedulesReducer;
