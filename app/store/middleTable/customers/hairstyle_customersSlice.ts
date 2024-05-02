import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { hairstyleCustomerApi } from "../../../services/middleTable/customers/hairstyle_customersApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getHairstyle_customers = createAsyncThunk(
  "hairstyle_customers/getHairstyle_customers",
  async () => {
    const hairstyle_customersData: any =
      await hairstyleCustomerApi.fetchAllHairstyleCustomers();
    console.log("hairstyle_customersDataだよ");
    console.log(hairstyle_customersData.hairstyle_customers);
    return hairstyle_customersData.hairstyle_customers;
  }
);

export interface Hairstyle_customersState {
  // ステートの型
  hairstyles_id: number;
  customers_id: number;
}

export interface RootState {
  // RootStateの型
  hairstyle_customers: Hairstyle_customersState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  hairstyle_customers: [],
  loading: false,
  error: null,
};

const hairstyle_customersSlice = createSlice({
  name: "hairstyle_customers",
  initialState,
  reducers: {
    updateHairstyle_customersInfo(
      state,
      action: PayloadAction<Hairstyle_customersState[]>
    ) {
      const newHairstyle_customers = action.payload;
      state.hairstyle_customers.push(...newHairstyle_customers);
      return state;
    },

    deleteHairstyle_customersInfo(state, action: PayloadAction<number>) {
      state.hairstyle_customers = state.hairstyle_customers.filter(
        (hairstyle_customers) =>
          hairstyle_customers.customers_id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHairstyle_customers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHairstyle_customers.fulfilled, (state, action) => {
      state.hairstyle_customers = action.payload;
      state.loading = false;
    });
    builder.addCase(getHairstyle_customers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateHairstyle_customersInfo, deleteHairstyle_customersInfo } =
  hairstyle_customersSlice.actions;

const hairstyle_customersReducer = hairstyle_customersSlice.reducer;

export default hairstyle_customersReducer;
