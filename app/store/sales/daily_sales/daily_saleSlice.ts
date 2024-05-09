import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { dailySaleApi } from "../../../services/daily_sales/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getDaily_sales = createAsyncThunk(
  "daily_sales/getDaily_sales",
  async () => {
    const daily_salesData: any = await dailySaleApi.fetchAllDailySales();
    console.log("daily_salesDataだよ");
    console.log(daily_salesData.daily_sales);
    return daily_salesData.daily_sales;
  }
);

export const createDaily_sales = createAsyncThunk(
  "daily_sales/createDaily_sales",
  async (formData: { date: string; daily_sales: number }) => {
    const daily_salesData: any = await dailySaleApi.createDailySales(formData);
    console.log("daily_salesCreateDataだよ");
    console.log(daily_salesData.daily_sales);
  }
);

export const getDaily_salesById = createAsyncThunk(
  "daily_sales/getDaily_salesById",
  async (id: number) => {
    const daily_salesData: any = await dailySaleApi.fetchDailySalesById(id);
    console.log("daily_salesShowDataだよ");
    console.log(daily_salesData.daily_sales);
    return daily_salesData.daily_sales;
  }
);

export const updateDaily_sales = createAsyncThunk(
  "daily_sales/updateDaily_sales",
  async (formData: { id: number; date: string; daily_sales: number }) => {
    const { id, ...updateData } = formData;
    const daily_salesData: any = await dailySaleApi.updateDailySales(
      id,
      updateData
    );
    console.log("daily_salesUpdateDataだよ");
    console.log(daily_salesData.daily_sales);
  }
);

export const deleteDaily_sales = createAsyncThunk(
  "daily_sales/deleteDaily_sales",
  async (id: number) => {
    const daily_salesData: any = await dailySaleApi.deleteDailySales(id);
    console.log("daily_salesDeleteDataだよ");
    console.log(daily_salesData.daily_sales);
    return daily_salesData.daily_sales;
  }
);

export interface Daily_salesState {
  // ステートの型
  id: number;
  date: string;
  daily_sales: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  daily_sales: Daily_salesState[];
  loading: boolean; // ローディング状態
  error: string | null; // エラー
}

export const initialState: RootState = {
  // 初期状態
  daily_sales: [],
  loading: false,
  error: null,
};

const daily_salesSlice = createSlice({
  name: "daily_sales",
  initialState,
  reducers: {
    updateDailySalesInfo(state, action: PayloadAction<Daily_salesState>) {
      const updatedDailySales = action.payload;
      const index = state.daily_sales.findIndex(
        (daily_sales) => daily_sales.id === updatedDailySales.id
      );
      if (index !== -1) {
        state.daily_sales[index] = updatedDailySales;
      }
      return state;
    },

    updateDate(state, action: PayloadAction<Daily_salesState>) {
      const updatedDailySales = action.payload;
      const index = state.daily_sales.findIndex(
        (daily_sales) => daily_sales.id === updatedDailySales.id
      );
      if (index !== -1) {
        state.daily_sales[index].date = updatedDailySales.date;
      }
      return state;
    },

    updateDaily_sale(state, action: PayloadAction<Daily_salesState>) {
      const updatedDailySales = action.payload;
      const index = state.daily_sales.findIndex(
        (daily_sales) => daily_sales.id === updatedDailySales.id
      );
      if (index !== -1) {
        state.daily_sales[index].daily_sales = updatedDailySales.daily_sales;
      }
      return state;
    },

    deleteDailySalesInfo(state, action: PayloadAction<number>) {
      state.daily_sales = state.daily_sales.filter(
        (daily_sales) => daily_sales.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDaily_sales.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDaily_sales.fulfilled, (state, action) => {
      state.daily_sales = action.payload;
      state.loading = false;
    });
    builder.addCase(getDaily_sales.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(createDaily_sales.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createDaily_sales.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createDaily_sales.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(getDaily_salesById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDaily_salesById.fulfilled, (state, action) => {
      state.daily_sales = action.payload;
      state.loading = false;
    });
    builder.addCase(getDaily_salesById.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(updateDaily_sales.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateDaily_sales.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateDaily_sales.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(deleteDaily_sales.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteDaily_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.daily_sales = state.daily_sales.filter(
        (daily_sales) => daily_sales.id !== action.payload
      );
    });
    builder.addCase(deleteDaily_sales.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const {
  updateDailySalesInfo,
  updateDate,
  updateDaily_sale,
  deleteDailySalesInfo,
} = daily_salesSlice.actions;

const daily_salesReducer = daily_salesSlice.reducer;

export default daily_salesReducer;
