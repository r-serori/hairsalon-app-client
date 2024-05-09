import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stockApi } from "../../services/stocks/api";
import RootState from "../../redux/reducers/rootReducer";

// APIから在庫情報を取得する非同期アクション//get
export const getStock = createAsyncThunk("stock/getStock", async () => {
  const stockData: any = await stockApi.fetchAllStocks(); // APIからデータを取得
  console.log("stockDataだよ");
  console.log(stockData.stocks);
  return stockData.stocks;
});

// 新しい在庫情報を作成する非同期アクション//post,store
export const createStock = createAsyncThunk(
  "stock/createStock",
  async (formData: {
    id: number;
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    supplier: string;
    stock_category_id: number;
  }) => {
    const stockData: any = await stockApi.createStock(formData);
    console.log("stockCreateDataだよ");
    console.log(stockData.stocks);
  }
);

// 在庫情報を取得する非同期アクション//show
export const getStockById = createAsyncThunk(
  "stock/getStockById",
  async (id: number) => {
    const stockData: any = await stockApi.fetchStockById(id);
    console.log("stockShowDataだよ");
    console.log(stockData.stocks);
    return stockData.stocks;
  }
);

// 在庫情報を更新する非同期アクション,put,update
export const updateStock = createAsyncThunk(
  "stock/updateStock",
  async (formData: {
    id: number;
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    supplier: string;
    stock_category_id: number;
  }) => {
    const { id, ...updateData } = formData; // idを除外する
    const stockData: any = await stockApi.updateStock(id, updateData);
    console.log("stockUpdateDataだよ");
    console.log(stockData.stocks);
  }
);

// 在庫情報を削除する非同期アクション//delete
export const deleteStock = createAsyncThunk(
  "stock/deleteStock",
  async (id: number) => {
    const stockData: any = await stockApi.deleteStock(id);
    console.log("stockDeleteDataだよ");
    console.log(stockData.stocks);
    return stockData.stocks;
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
  stock_category_id: number; //在庫カテゴリー、外部キー
  created_at: string;
  updated_at: string;
}

export interface RootState {
  stocks: StockState[];
  loading: boolean;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  stocks: [],
  loading: false,
  error: null,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    // ここに同期処理のreducerを記述
    updateStockInfo(state, action: PayloadAction<StockState>) {
      const updateStock = action.payload;
      const index = state.stocks.findIndex(
        (stock) => stock.id === updateStock.id
      );
      if (index !== -1) {
        state.stocks[index] = updateStock;
      }
      return state;
    },

    updateProductName(state, action: PayloadAction<StockState>) {
      const updateStock = action.payload;
      const index = state.stocks.findIndex(
        (stock) => stock.id === updateStock.id
      );
      if (index !== -1) {
        state.stocks[index].product_name = updateStock.product_name;
      }
      return state;
    },

    updateProductPrice(state, action: PayloadAction<StockState>) {
      const updateStock = action.payload;
      const index = state.stocks.findIndex(
        (stock) => stock.id === updateStock.id
      );
      if (index !== -1) {
        state.stocks[index].product_price = updateStock.product_price;
      }
      return state;
    },

    updateStockQuantity(state, action: PayloadAction<StockState>) {
      const updateStock = action.payload;
      const index = state.stocks.findIndex(
        (stock) => stock.id === updateStock.id
      );
      if (index !== -1) {
        state.stocks[index].quantity = updateStock.quantity;
      }
      return state;
    },

    updateStockRemarks(state, action: PayloadAction<StockState>) {
      const updateStock = action.payload;
      const index = state.stocks.findIndex(
        (stock) => stock.id === updateStock.id
      );
      if (index !== -1) {
        state.stocks[index].remarks = updateStock.remarks;
      }
      return state;
    },

    updateStockSupplier(state, action: PayloadAction<StockState>) {
      const updateStock = action.payload;
      const index = state.stocks.findIndex(
        (stock) => stock.id === updateStock.id
      );
      if (index !== -1) {
        state.stocks[index].supplier = updateStock.supplier;
      }
      return state;
    },

    updateStockCategoryId(state, action: PayloadAction<StockState>) {
      const updateStock = action.payload;
      const index = state.stocks.findIndex(
        (stock) => stock.id === updateStock.id
      );
      if (index !== -1) {
        state.stocks[index].stock_category_id = updateStock.stock_category_id;
      }
      return state;
    },

    deleteStockInfo(state, action: PayloadAction<number>) {
      state.stocks = state.stocks.filter(
        (stock) => stock.id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    // ここに非同期処理のreducerを記述
    builder.addCase(getStock.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStock.fulfilled, (state, action) => {
      state.loading = false;
      state.stocks = action.payload;
    });
    builder.addCase(getStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createStock.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createStock.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getStockById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStockById.fulfilled, (state, action) => {
      state.loading = false;
      state.stocks = action.payload;
    });
    builder.addCase(getStockById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateStock.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateStock.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteStock.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteStock.fulfilled, (state, action) => {
      state.loading = false;
      state.stocks = state.stocks.filter(
        (stock) => stock.id !== action.payload
      );
    });
    builder.addCase(deleteStock.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  updateStockInfo,
  updateProductName,
  updateProductPrice,
  updateStockQuantity,
  updateStockRemarks,
  updateStockSupplier,
  updateStockCategoryId,
  deleteStockInfo,
} = stockSlice.actions;

const stockReducer = stockSlice.reducer;

export default stockReducer;
