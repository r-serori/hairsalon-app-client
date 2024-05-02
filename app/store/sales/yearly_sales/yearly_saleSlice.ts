import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { yearlySaleApi } from "../../../services/yearly_sales/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getYearly_sales = createAsyncThunk(
  "yearly_sales/getYearly_sales",
  async () => {
    const yearly_salesData: any = await yearlySaleApi.fetchAllYearlySales();
    console.log("yearly_salesDataだよ");
    console.log(yearly_salesData.yearly_sales);
    return yearly_salesData.yearly_sales;
  }
);

export const createYearly_sales = createAsyncThunk(
  "yearly_sales/createYearly_sales",
  async (formData: { id: number; year: number; yearly_sales: number }) => {
    const yearly_salesData: any = await yearlySaleApi.createYearlySales(
      formData
    );
    console.log("yearly_salesCreateDataだよ");
    console.log(yearly_salesData.yearly_sales);
  }
);

export const getYearly_salesById = createAsyncThunk(
  "yearly_sales/getYearly_salesById",
  async (id: number) => {
    const yearly_salesData: any = await yearlySaleApi.fetchYearlySalesById(id);
    console.log("yearly_salesShowDataだよ");
    console.log(yearly_salesData.yearly_sales);
    return yearly_salesData.yearly_sales;
  }
);

export const updateYearly_sales = createAsyncThunk(
  "yearly_sales/updateYearly_sales",
  async (formData: { id: number; year: number; yearly_sales: number }) => {
    const { id, ...updateData } = formData;
    const yearly_salesData: any = await yearlySaleApi.updateYearlySales(
      id,
      updateData
    );
    console.log("yearly_salesUpdateDataだよ");
    console.log(yearly_salesData.yearly_sales);
  }
);

export const deleteYearly_sales = createAsyncThunk(
  "yearly_sales/deleteYearly_sales",
  async (id: number) => {
    const yearly_salesData: any = await yearlySaleApi.deleteYearlySales(id);
    console.log("yearly_salesDeleteDataだよ");
    console.log(yearly_salesData.yearly_sales);
    return yearly_salesData.yearly_sales;
  }
);

export interface Yearly_salesState {
  // ステートの型
  id: number;
  year: number;
  yearly_sales: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  yearly_sales: Yearly_salesState[];
  loading: boolean; // ローディング状態
  error: string | null; // エラー
}

export const initialState: RootState = {
  yearly_sales: [],
  loading: false,
  error: null,
};

const yearly_salesSlice = createSlice({
  name: "yearly_sales",
  initialState,
  reducers: {
    updateYearlySalesInfo(state, action: PayloadAction<Yearly_salesState>) {
      const updatedYearlySales = action.payload;
      const index = state.yearly_sales.findIndex(
        (yearly_sales) => yearly_sales.id === updatedYearlySales.id
      );
      if (index !== -1) {
        state.yearly_sales[index] = updatedYearlySales;
      }
      return state;
    },

    updateYear(state, action: PayloadAction<Yearly_salesState>) {
      const updatedYearlySales = action.payload;
      const index = state.yearly_sales.findIndex(
        (yearly_sales) => yearly_sales.id === updatedYearlySales.id
      );
      if (index !== -1) {
        state.yearly_sales[index].year = updatedYearlySales.year;
      }
      return state;
    },

    updateYearly_sale(state, action: PayloadAction<Yearly_salesState>) {
      const updatedYearlySales = action.payload;
      const index = state.yearly_sales.findIndex(
        (yearly_sales) => yearly_sales.id === updatedYearlySales.id
      );
      if (index !== -1) {
        state.yearly_sales[index].yearly_sales =
          updatedYearlySales.yearly_sales;
      }
      return state;
    },

    deleteYearlySalesInfo(state, action: PayloadAction<number>) {
      state.yearly_sales = state.yearly_sales.filter(
        (yearly_sales) => yearly_sales.id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(getYearly_sales.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = action.payload;
    });
    builder.addCase(getYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createYearly_sales.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getYearly_salesById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getYearly_salesById.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = action.payload;
    });
    builder.addCase(getYearly_salesById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateYearly_sales.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteYearly_sales.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = action.payload;
    });
    builder.addCase(deleteYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  updateYearlySalesInfo,
  updateYear,
  updateYearly_sale,
  deleteYearlySalesInfo,
} = yearly_salesSlice.actions;

const yearly_salesReducer = yearly_salesSlice.reducer;

export default yearly_salesReducer;
