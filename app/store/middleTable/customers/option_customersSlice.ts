import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { optionCustomerApi } from "../../../services/middleTable/customers/option_customersApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getOption_customers = createAsyncThunk(
  "option_customers/getOption_customers",
  async () => {
    const option_customersData: any =
      await optionCustomerApi.fetchAllOptionCustomers();
    console.log("option_customersDataだよ");
    console.log(option_customersData.option_customers);
    return option_customersData.option_customers;
  }
);

export interface Option_customersState {
  // ステートの型
  options_id: number;
  customers_id: number;
}

export interface RootState {
  // RootStateの型
  option_customers: Option_customersState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  option_customers: [],
  loading: false,
  error: null,
};

const option_customersSlice = createSlice({
  name: "option_customers",
  initialState,
  reducers: {
    updateOption_customersInfo(
      state,
      action: PayloadAction<Option_customersState[]>
    ) {
      const newOption_customers = action.payload;
      state.option_customers.push(...newOption_customers);
      return state;
    },

    deleteOption_customersInfo(state, action: PayloadAction<number>) {
      state.option_customers = state.option_customers.filter(
        (option_customers) => option_customers.customers_id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOption_customers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOption_customers.fulfilled, (state, action) => {
      state.option_customers = action.payload;
      state.loading = false;
    });
    builder.addCase(getOption_customers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateOption_customersInfo, deleteOption_customersInfo } =
  option_customersSlice.actions;

const option_customersReducer = option_customersSlice.reducer;

export default option_customersReducer;
