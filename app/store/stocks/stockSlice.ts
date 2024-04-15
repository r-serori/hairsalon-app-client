import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../redux/store";
import { stockApi } from "../../services/stocks/api";

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
  loading: boolean;
  error: string | null;
}

const initialState: StockState = {
  // 初期状態
  id: 0,
  product_name: "",
  product_price: 0,
  quantity: 0,
  remarks: "",
  supplier: "",
  stock_category_id: 0,
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStockName: (state, action: PayloadAction<string>) => {
      state.product_name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.product_price = action.payload;
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
    setRemarks: (state, action: PayloadAction<string>) => {
      state.remarks = action.payload;
    },
    setSupplier: (state, action: PayloadAction<string>) => {
      state.supplier = action.payload;
    },
    setStockCategoryId: (state, action: PayloadAction<number>) => {
      state.stock_category_id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setStockName: setProductName,
  setPrice: setProductPrice,
  setQuantity: setQuantity,
  setRemarks: setRemarks,
  setSupplier: setSupplier,
  setStockCategoryId: setStockCategoryId,
  setLoading: setLoading,
  setError: setError,
} = stockSlice.actions;

export const stockReducer = stockSlice.reducer;

export default stockReducer;

// Action Creators
export const createStock =
  (formData: {
    id: number;
    product_name: string;
    product_price: number;
    quantity: string;
    remarks: string;
    supplier: string;
    stock_category_id: number;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await stockApi.createStock(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
