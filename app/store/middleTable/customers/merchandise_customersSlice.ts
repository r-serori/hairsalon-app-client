import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseCustomerApi } from "../../../services/middleTable/customers/merchandise_customersApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getMerchandise_customers = createAsyncThunk(
  "merchandise_customers/getMerchandise_customers",
  async () => {
    const merchandise_customersData: any =
      await merchandiseCustomerApi.fetchAllMerchandiseCustomers();
    console.log("merchandise_customersDataだよ");
    console.log(merchandise_customersData.merchandise_customers);
    return merchandise_customersData.merchandise_customers;
  }
);

export interface Merchandise_customersState {
  // ステートの型
  merchandises_id: number;
  customers_id: number;
}

export interface RootState {
  // RootStateの型
  merchandise_customers: Merchandise_customersState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  merchandise_customers: [],
  loading: false,
  error: null,
};

const merchandise_customersSlice = createSlice({
  name: "merchandise_customers",
  initialState,
  reducers: {
    updateMerchandise_customersInfo(
      state,
      action: PayloadAction<Merchandise_customersState[]>
    ) {
      const newMerchandise_customers = action.payload;
      state.merchandise_customers.push(...newMerchandise_customers);
      return state;
    },

    deleteMerchandise_customersInfo(state, action: PayloadAction<number>) {
      state.merchandise_customers = state.merchandise_customers.filter(
        (merchandise_customers) =>
          merchandise_customers.customers_id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMerchandise_customers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMerchandise_customers.fulfilled, (state, action) => {
      state.merchandise_customers = action.payload;
      state.loading = false;
    });
    builder.addCase(getMerchandise_customers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  updateMerchandise_customersInfo,
  deleteMerchandise_customersInfo,
} = merchandise_customersSlice.actions;

const merchandise_customersReducer = merchandise_customersSlice.reducer;

export default merchandise_customersReducer;
