import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { monthlySaleApi } from "../../../services/monthly_sales/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getMonthly_sales = createAsyncThunk(
  "monthly_sales/getMonthly_sales",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await monthlySaleApi.fetchAllMonthlySales();
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const createMonthly_sales = createAsyncThunk(
  "monthly_sales/createMonthly_sales",
  async (
    formData: { year_month: string; monthly_sales: number },
    { rejectWithValue }
  ) => {
    const response: any = await monthlySaleApi.createMonthlySales(formData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const getMonthly_salesById = createAsyncThunk(
  "monthly_sales/getMonthly_salesById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await monthlySaleApi.fetchMonthlySalesById(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const updateMonthly_sales = createAsyncThunk(
  "monthly_sales/updateMonthly_sales",
  async (
    formData: {
      id: number;
      year_month: string;
      monthly_sales: number;
    },
    { rejectWithValue }
  ) => {
    const { id, ...updateData } = formData;
    const response: any = await monthlySaleApi.updateMonthlySales(
      id,
      updateData
    );
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const deleteMonthly_sales = createAsyncThunk(
  "monthly_sales/deleteMonthly_sales",
  async (id: number, { rejectWithValue }) => {
    const response: any = await monthlySaleApi.deleteMonthlySales(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
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
  message: string | null; // メッセージ
  error: string | null; // エラー
}

export const initialState: RootState = {
  monthly_sales: [],
  loading: false,
  message: null,
  error: null,
};

const monthly_salesSlice = createSlice({
  name: "monthly_sales",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMonthly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(getMonthly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.monthly_sales = action.payload.monthlySales;
      state.message = "月次売上の取得に成功しました！";
    });
    builder.addCase(getMonthly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createMonthly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(createMonthly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.monthly_sales.push(action.payload.monthlySale);
      state.message = "月次売上の作成に成功しました！";
    });
    builder.addCase(createMonthly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getMonthly_salesById.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(getMonthly_salesById.fulfilled, (state, action) => {
      state.loading = false;
      state.monthly_sales = action.payload.monthlySale;
      state.message = "月次売上の取得に成功しました！";
    });
    builder.addCase(getMonthly_salesById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateMonthly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(updateMonthly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.monthly_sales = state.monthly_sales.map((monthly_sales) =>
        monthly_sales.id === action.payload.monthlySale.id
          ? { ...monthly_sales, ...action.payload.monthlySale }
          : monthly_sales
      );
      state.message = "月次売上の更新に成功しました！";
    });
    builder.addCase(updateMonthly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteMonthly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(deleteMonthly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.monthly_sales = state.monthly_sales.filter(
        (monthly_sales) => monthly_sales.id !== action.payload.deleteId
      );
      state.message = "月次売上の削除に成功しました！";
    });
    builder.addCase(deleteMonthly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const monthly_salesReducer = monthly_salesSlice.reducer;

export default monthly_salesReducer;
