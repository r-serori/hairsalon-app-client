import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stockApi } from "../../services/stocks/api";
import RootState from "../../redux/reducers/rootReducer";

// APIから在庫情報を取得する非同期アクション//get
export const getStock = createAsyncThunk(
  "stock/getStock",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await stockApi.fetchAllStocks(); // APIからデータを取得
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
    }
  }
);

// 新しい在庫情報を作成する非同期アクション//post,store
export const createStock = createAsyncThunk(
  "stock/createStock",
  async (
    formData: {
      id: number;
      product_name: string;
      product_price: number;
      quantity: number;
      remarks: string;
      supplier: string;
      notice: number;
      stock_category_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await stockApi.createStock(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
    }
  }
);

// 在庫情報を取得する非同期アクション//show
export const getStockById = createAsyncThunk(
  "stock/getStockById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await stockApi.fetchStockById(id);
    console.log("stockShowDataだよ");
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
    }
  }
);

// 在庫情報を更新する非同期アクション,put,update
export const updateStock = createAsyncThunk(
  "stock/updateStock",
  async (
    formData: {
      id: number;
      product_name: string;
      product_price: number;
      quantity: number;
      remarks: string;
      supplier: string;
      notice: number;
      stock_category_id: number;
    },
    { rejectWithValue }
  ) => {
    const { id, ...updateData } = formData; // idを除外する
    const response: any = await stockApi.updateStock(id, updateData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
    }
  }
);

// 在庫情報を削除する非同期アクション//delete
export const deleteStock = createAsyncThunk(
  "stock/deleteStock",
  async (id: number, { rejectWithValue }) => {
    const response: any = await stockApi.deleteStock(id);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
    }
  }
);

export interface StockState {
  // ステートの型
  id: number;
  product_name: string;
  product_price: number;
  quantity: number;
  remarks: string;
  supplier: string; //仕入れ先
  notice: number; //通知
  stock_category_id: number; //在庫カテゴリー、外部キー
  created_at: string;
  updated_at: string;
}

export interface RootState {
  stocks: StockState[];
  loading: boolean;
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  stocks: [],
  loading: false,
  message: null,
  error: null,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ここに非同期処理のreducerを記述
    builder.addCase(getStock.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getStock.fulfilled, (state, action) => {
      state.loading = false;
      state.stocks = [...state.stocks, ...action.payload.stocks];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫情報を取得しました！";
    });
    builder.addCase(getStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createStock.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createStock.fulfilled, (state, action) => {
      state.loading = false;
      state.stocks = [...state.stocks, action.payload.stock];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫情報を作成しました！";
    });
    builder.addCase(createStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getStockById.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getStockById.fulfilled, (state, action) => {
      state.loading = false;
      state.stocks = [...state.stocks, action.payload.stock];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫情報を取得しました！";
    });
    builder.addCase(getStockById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateStock.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateStock.fulfilled, (state, action) => {
      state.loading = false;
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
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteStock.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteStock.fulfilled, (state, action) => {
      state.loading = false;
      state.stocks = state.stocks.filter(
        (stock) => stock.id !== Number(action.payload.deleteId)
      );
    });
    builder.addCase(deleteStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const stockReducer = stockSlice.reducer;

export default stockReducer;
