import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { monthlySaleApi } from "../../../services/monthly_sales/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getMonthly_sales = createAsyncThunk(
  "monthly_sales/getMonthly_sales",
  async () => {
    const monthly_salesData: any = await monthlySaleApi.fetchAllMonthlySales();
    console.log("monthly_salesDataだよ");
    console.log(monthly_salesData.monthly_sales);
    return monthly_salesData.monthly_sales;
  }
);

export const createMonthly_sales = createAsyncThunk(
  "monthly_sales/createMonthly_sales",
  async (formData: {
    id: number;
    year: number;
    month: number;
    monthly_sales: number;
  }) => {
    const monthly_salesData: any = await monthlySaleApi.createMonthlySales(
      formData
    );
    console.log("monthly_salesCreateDataだよ");
    console.log(monthly_salesData.monthly_sales);
  }
);

export const getMonthly_salesById = createAsyncThunk(
  "monthly_sales/getMonthly_salesById",
  async (id: number) => {
    const monthly_salesData: any = await monthlySaleApi.fetchMonthlySalesById(
      id
    );
    console.log("monthly_salesShowDataだよ");
    console.log(monthly_salesData.monthly_sales);
    return monthly_salesData.monthly_sales;
  }
);

export const updateMonthly_sales = createAsyncThunk(
  "monthly_sales/updateMonthly_sales",
  async (formData: {
    id: number;
    year: number;
    month: number;
    monthly_sales: number;
  }) => {
    const { id, ...updateData } = formData;
    const monthly_salesData: any = await monthlySaleApi.updateMonthlySales(
      id,
      updateData
    );
    console.log("monthly_salesUpdateDataだよ");
    console.log(monthly_salesData.monthly_sales);
  }
);

export const deleteMonthly_sales = createAsyncThunk(
  "monthly_sales/deleteMonthly_sales",
  async (id: number) => {
    const monthly_salesData: any = await monthlySaleApi.deleteMonthlySales(id);
    console.log("monthly_salesDeleteDataだよ");
    console.log(monthly_salesData.monthly_sales);
    return monthly_salesData.monthly_sales;
  }
);

export interface Monthly_salesState {
  // ステートの型
  id: number;
  year: number;
  month: number;
  monthly_sales: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  monthly_sales: Monthly_salesState[];
  loading: boolean; // ローディング状態
  error: string | null; // エラー
}

export const initialState: RootState = {
  monthly_sales: [],
  loading: false,
  error: null,
};

const monthly_salesSlice = createSlice({
  name: "monthly_sales",
  initialState,
  reducers: {
    updateMonthlySalesInfo(state, action: PayloadAction<Monthly_salesState>) {
      const updatedMonthlySales = action.payload;
      const index = state.monthly_sales.findIndex(
        (monthly_sales) => monthly_sales.id === updatedMonthlySales.id
      );
      if (index !== -1) {
        state.monthly_sales[index] = updatedMonthlySales;
      }
      return state;
    },

    updateMYear(state, action: PayloadAction<Monthly_salesState>) {
      const updatedMonthlySales = action.payload;
      const index = state.monthly_sales.findIndex(
        (monthly_sales) => monthly_sales.id === updatedMonthlySales.id
      );
      if (index !== -1) {
        state.monthly_sales[index].year = updatedMonthlySales.year;
      }
      return state;
    },

    updateMonth(state, action: PayloadAction<Monthly_salesState>) {
      const updatedMonthlySales = action.payload;
      const index = state.monthly_sales.findIndex(
        (monthly_sales) => monthly_sales.id === updatedMonthlySales.id
      );
      if (index !== -1) {
        state.monthly_sales[index].month = updatedMonthlySales.month;
      }
      return state;
    },

    updateMonthly_sale(state, action: PayloadAction<Monthly_salesState>) {
      const updatedMonthlySales = action.payload;
      const index = state.monthly_sales.findIndex(
        (monthly_sales) => monthly_sales.id === updatedMonthlySales.id
      );
      if (index !== -1) {
        state.monthly_sales[index].monthly_sales =
          updatedMonthlySales.monthly_sales;
      }
      return state;
    },

    deleteMonthlySalesInfo(state, action: PayloadAction<number>) {
      state.monthly_sales = state.monthly_sales.filter(
        (monthly_sales) => monthly_sales.id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(getMonthly_sales.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMonthly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.monthly_sales = action.payload;
    });
    builder.addCase(getMonthly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createMonthly_sales.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createMonthly_sales.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createMonthly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getMonthly_salesById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMonthly_salesById.fulfilled, (state, action) => {
      state.loading = false;
      state.monthly_sales = action.payload;
    });
    builder.addCase(getMonthly_salesById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateMonthly_sales.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateMonthly_sales.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateMonthly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteMonthly_sales.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteMonthly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.monthly_sales = action.payload;
    });
    builder.addCase(deleteMonthly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  updateMonthlySalesInfo,
  updateMYear,
  updateMonth,
  updateMonthly_sale,
  deleteMonthlySalesInfo,
} = monthly_salesSlice.actions;

const monthly_salesReducer = monthly_salesSlice.reducer;

export default monthly_salesReducer;
