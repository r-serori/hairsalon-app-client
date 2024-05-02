import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { customerApi } from "../../services/customers/api";
import RootState from "../../redux/reducers/rootReducer";

export const getCustomer = createAsyncThunk(
  "customer/getCustomer",
  async () => {
    const customerData: any = await customerApi.fetchAllCustomers();
    console.log("customerDataだよ");
    console.log(customerData.customers);
    return customerData.customers;
  }
);

export const createCustomer = createAsyncThunk(
  "customer/createCustomer",
  async (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    new_customer: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    attendances_id: number[];
  }) => {
    const customerData: any = await customerApi.createCustomer(formData);
    console.log("customerCreateDataだよ");
    console.log(customerData.customers);
  }
);

export const getCustomerById = createAsyncThunk(
  "customer/getCustomerById",
  async (id: number) => {
    const customerData: any = await customerApi.fetchCustomerById(id);
    console.log("customerShowDataだよ");
    console.log(customerData.customers);
    return customerData.customers;
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    new_customer: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    attendances_id: number[];
  }) => {
    const { id, ...updateData } = formData;
    console.log("updateDataだよ");
    console.log(updateData);
    const customerData: any = await customerApi.updateCustomer(id, updateData);
    console.log("customerUpdateDataだよ");
    console.log(customerData.customers);
  }
);

export const deleteCustomer = createAsyncThunk(
  "customer/deleteCustomer",
  async (id: number) => {
    const customerData: any = await customerApi.deleteCustomer(id);
    console.log("customerDeleteDataだよ");
    console.log(customerData.customers);
    return customerData.customers;
  }
);

export interface CustomerState {
  // ステートの型
  id: number;
  customer_name: string;
  phone_number: string;
  remarks: string;
  new_customer: string;
  courses_id: number[];
  options_id: number[];
  merchandises_id: number[];
  hairstyles_id: number[];
  attendances_id: number[];
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  customers: CustomerState[]; // 顧客情報の配列
  loading: boolean; // ローディング状態
  error: string; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  customers: [], // 顧客情報の配列
  loading: false, // ローディング状態
  error: "", // エラーメッセージ
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    updateCustomerInfo: (state, action: PayloadAction<CustomerState>) => {
      const updateCustomer = action.payload;
      const index = state.customers.findIndex(
        (customer) => customer.id === updateCustomer.id
      );
      if (index !== -1) {
        state.customers[index] = updateCustomer;
      }
      return state;
    },

    updateCustomerName: (state, action: PayloadAction<CustomerState>) => {
      const updateCustomer = action.payload;
      const index = state.customers.findIndex(
        (customer) => customer.id === updateCustomer.id
      );
      if (index !== -1) {
        state.customers[index].customer_name = updateCustomer.customer_name;
      }
      return state;
    },

    updateCustomerPhoneNumber: (
      state,
      action: PayloadAction<CustomerState>
    ) => {
      const updateCustomer = action.payload;
      const index = state.customers.findIndex(
        (customer) => customer.id === updateCustomer.id
      );
      if (index !== -1) {
        state.customers[index].phone_number = updateCustomer.phone_number;
      }
      return state;
    },

    updateCustomerRemarks: (state, action: PayloadAction<CustomerState>) => {
      const updateCustomer = action.payload;
      const index = state.customers.findIndex(
        (customer) => customer.id === updateCustomer.id
      );
      if (index !== -1) {
        state.customers[index].remarks = updateCustomer.remarks;
      }
      return state;
    },

    updateCustomerNewCustomer: (
      state,
      action: PayloadAction<CustomerState>
    ) => {
      const updateCustomer = action.payload;
      const index = state.customers.findIndex(
        (customer) => customer.id === updateCustomer.id
      );
      if (index !== -1) {
        state.customers[index].new_customer = updateCustomer.new_customer;
      }
      return state;
    },

    deleteCustomerInfo: (state, action: PayloadAction<number>) => {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = action.payload;
    });
    builder.addCase(getCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(createCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(getCustomerById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCustomerById.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = action.payload;
    });
    builder.addCase(getCustomerById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(updateCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(deleteCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = action.payload;
    });
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export const {
  updateCustomerInfo,
  updateCustomerName,
  updateCustomerPhoneNumber,
  updateCustomerRemarks,
  updateCustomerNewCustomer,
  deleteCustomerInfo,
} = customerSlice.actions;

const customerReducer = customerSlice.reducer;

export default customerReducer;
