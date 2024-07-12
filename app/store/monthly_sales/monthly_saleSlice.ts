import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { monthlySaleApi } from "../../services/monthly_sales/api";
import RootState from "../../redux/reducers/rootReducer";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";

export const getMonthly_sales = createAsyncThunk(
  "monthly_sales/getMonthly_sales",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await monthlySaleApi.fetchAllMonthlySales();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const selectGetMonthly_sales = createAsyncThunk(
  "monthly_sales/selectGetMonthly_sales",
  async (year: string, { rejectWithValue }) => {
    try {
      const response: any = await monthlySaleApi.selectGetMonthlySales(year);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const createMonthly_sales = createAsyncThunk(
  "monthly_sales/createMonthly_sales",
  async (
    formData: { year_month: string; monthly_sales: number },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await monthlySaleApi.createMonthlySales(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
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
    try {
      const response: any = await monthlySaleApi.updateMonthlySales(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const deleteMonthly_sales = createAsyncThunk(
  "monthly_sales/deleteMonthly_sales",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await monthlySaleApi.deleteMonthlySales(id);
      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface Monthly_salesState {
  // ステートの型
  id: number;
  year_month: string;
  monthly_sales: number;
}

export interface RootState {
  // ルートステートの型を定義
  monthly_sales: Monthly_salesState[];
  status: "idle" | "loading" | "success" | "failed"; // ローディング状態
  message: string | null; // メッセージ
  error: string | null; // エラー
}

export const initialState: RootState = {
  monthly_sales: [],
  status: "idle",
  message: null,
  error: null,
};

const monthly_salesSlice = createSlice({
  name: "monthly_sales",
  initialState,
  reducers: {
    changeMonthlySaleMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(getMonthly_sales.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
      state.message = null;
    });
    builder.addCase(getMonthly_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.monthly_sales = [
        ...state.monthly_sales,
        ...action.payload.monthlySales,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "月次売上の取得に成功しました！";
    });
    builder.addCase(getMonthly_sales.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(selectGetMonthly_sales.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
      state.message = null;
    });
    builder.addCase(selectGetMonthly_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.monthly_sales = [
        ...state.monthly_sales,
        ...action.payload.monthlySales,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "月次売上の取得に成功しました！";
    });
    builder.addCase(selectGetMonthly_sales.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createMonthly_sales.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
      state.message = null;
    });
    builder.addCase(createMonthly_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.monthly_sales = [
        ...state.monthly_sales,
        action.payload.monthlySale,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "月次売上の作成に成功しました！";
    });
    builder.addCase(createMonthly_sales.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateMonthly_sales.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
      state.message = null;
    });
    builder.addCase(updateMonthly_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.monthly_sales = state.monthly_sales.map((monthly_sales) =>
        monthly_sales.id === action.payload.monthlySale.id
          ? { ...monthly_sales, ...action.payload.monthlySale }
          : monthly_sales
      );
      state.message = action.payload.message
        ? action.payload.message
        : "月次売上の更新に成功しました！";
    });
    builder.addCase(updateMonthly_sales.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(deleteMonthly_sales.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
      state.message = null;
    });
    builder.addCase(deleteMonthly_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.monthly_sales = state.monthly_sales.filter(
        (monthly_sales) => monthly_sales.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "月次売上の削除に成功しました！";
    });
    builder.addCase(deleteMonthly_sales.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });
  },
});

export const { changeMonthlySaleMessage } = monthly_salesSlice.actions;

const monthly_salesReducer = monthly_salesSlice.reducer;

export default monthly_salesReducer;
