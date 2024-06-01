import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { yearlySaleApi } from "../../../services/yearly_sales/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getYearly_sales = createAsyncThunk(
  "yearly_sales/getYearly_sales",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await yearlySaleApi.fetchAllYearlySales();
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const createYearly_sales = createAsyncThunk(
  "yearly_sales/createYearly_sales",
  async (
    formData: { year: string; yearly_sales: number },
    { rejectWithValue }
  ) => {
    const response: any = await yearlySaleApi.createYearlySales(formData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);
export const getYearly_salesById = createAsyncThunk(
  "yearly_sales/getYearly_salesById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await yearlySaleApi.fetchYearlySalesById(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const updateYearly_sales = createAsyncThunk(
  "yearly_sales/updateYearly_sales",
  async (
    formData: { id: number; year: string; yearly_sales: number },
    { rejectWithValue }
  ) => {
    const { id, ...updateData } = formData;
    const response: any = await yearlySaleApi.updateYearlySales(id, updateData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const deleteYearly_sales = createAsyncThunk(
  "yearly_sales/deleteYearly_sales",
  async (id: number, { rejectWithValue }) => {
    const response: any = await yearlySaleApi.deleteYearlySales(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export interface Yearly_salesState {
  // ステートの型
  id: number;
  year: string;
  yearly_sales: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  yearly_sales: Yearly_salesState[];
  loading: boolean; // ローディング状態
  message: string | null; // メッセージ
  error: string | null; // エラー
}

export const initialState: RootState = {
  yearly_sales: [],
  loading: false,
  message: null,
  error: null,
};

const yearly_salesSlice = createSlice({
  name: "yearly_sales",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getYearly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(getYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = action.payload.yearlySales;
      state.message = "年間売上の取得に成功しました！";
    });
    builder.addCase(getYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createYearly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(createYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales.push(action.payload.yearlySale);
      state.message = "年間売上の登録に成功しました！";
    });
    builder.addCase(createYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getYearly_salesById.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(getYearly_salesById.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = action.payload.yearlySale;
      state.message = "年間売上の取得に成功しました！";
    });
    builder.addCase(getYearly_salesById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateYearly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(updateYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = state.yearly_sales.map((yearly_sale) =>
        yearly_sale.id === action.payload.yearlySale.id
          ? { ...yearly_sale, ...action.payload.yearlySale }
          : yearly_sale
      );
      state.message = "年間売上の更新に成功しました！";
    });
    builder.addCase(updateYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteYearly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(deleteYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = state.yearly_sales.filter(
        (yearly_sales) => yearly_sales.id !== action.payload.deleteId
      );
    });
    builder.addCase(deleteYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const yearly_salesReducer = yearly_salesSlice.reducer;

export default yearly_salesReducer;
