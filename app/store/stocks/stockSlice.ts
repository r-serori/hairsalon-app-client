import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stockApi } from "../../services/stocks/api";
import RootState from "../../redux/reducers/rootReducer";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";
// APIから在庫情報を取得する非同期アクション//get
export const getStock = createAsyncThunk(
  "stocks/getStock",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await stockApi.fetchAllStocks(); // APIからデータを取得

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

// 新しい在庫情報を作成する非同期アクション//post,store
export const createStock = createAsyncThunk(
  "stocks/createStock",
  async (
    formData: {
      id: number;
      product_name: string;
      product_price: number;
      quantity: number;
      remarks: string;
      supplier: string;
      notice: number;
      stock_category_id: number | null;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await stockApi.createStock(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

// 在庫情報を更新する非同期アクション,put,update
export const updateStock = createAsyncThunk(
  "stocks/updateStock",
  async (
    formData: {
      id: number;
      product_name: string;
      product_price: number;
      quantity: number;
      remarks: string;
      supplier: string;
      notice: number;
      stock_category_id: number | null;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await stockApi.updateStock(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

// 在庫情報を削除する非同期アクション//delete
export const deleteStock = createAsyncThunk(
  "stocks/deleteStock",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await stockApi.deleteStock(id);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface StockState {
  // ステートの型
  id: number;
  product_name: string;
  product_price: number;
  quantity: number | null;
  remarks: string | null;
  supplier: string | null; //仕入れ先
  notice: number; //通知
  stock_category_id: number | null; //在庫カテゴリー、外部キー
}

export interface RootState {
  stocks: StockState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  stocks: [],
  status: "idle",
  message: null,
  error: null,
};

const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ここに非同期処理のreducerを記述
    builder.addCase(getStock.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getStock.fulfilled, (state, action) => {
      state.status = "success";
      state.stocks = [...state.stocks, ...action.payload.stocks];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫情報を取得しました！";
    });
    builder.addCase(getStock.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createStock.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createStock.fulfilled, (state, action) => {
      state.status = "success";
      state.stocks = [...state.stocks, action.payload.stock];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫情報を作成しました！";
    });
    builder.addCase(createStock.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateStock.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateStock.fulfilled, (state, action) => {
      state.status = "success";
      state.stocks = state.stocks.map((stock) =>
        stock.id === action.payload.stock.id
          ? { ...stock, ...action.payload.stock }
          : stock
      );
      state.message = action.payload.message
        ? action.payload.message
        : "在庫情報を更新しました！";
    });
    builder.addCase(updateStock.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(deleteStock.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteStock.fulfilled, (state, action) => {
      state.status = "success";
      state.stocks = state.stocks.filter(
        (stock) => stock.id !== Number(action.payload.deleteId)
      );
    });
    builder.addCase(deleteStock.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });
  },
});

const stockReducer = stockSlice.reducer;

export default stockReducer;
