import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stockCategoryApi } from "../../../services/stock_categories/api";
import RootState from "../../../redux/reducers/rootReducer";

// APIから在庫カテゴリ情報を取得する非同期アクション//get
export const getStockCategory = createAsyncThunk(
  "stock_category/getStockCategory",
  async () => {
    const stockCategoryData: any =
      await stockCategoryApi.fetchAllStockCategories(); // APIからデータを取得
    console.log("stockCategoryDataだよ");
    console.log(stockCategoryData.stock_categories);
    return stockCategoryData.stock_categories;
  }
);

// 新しい在庫カテゴリ情報を作成する非同期アクション//post,store
export const createStockCategory = createAsyncThunk(
  "stock_category/createStockCategory",
  async (formData: {
    id: number;
    category: string;
    created_at: string;
    updated_at: string;
  }) => {
    const stockCategoryData: any = await stockCategoryApi.createStockCategory(
      formData
    );
    console.log("stockCategoryCreateDataだよ");
    console.log(stockCategoryData.stock_categories);
  }
);

// 在庫カテゴリ情報を取得する非同期アクション//show
export const getStockCategoryById = createAsyncThunk(
  "stock_category/getStockCategoryById",
  async (id: number) => {
    const stockCategoryData: any =
      await stockCategoryApi.fetchStockCategoryById(id);
    console.log("stockCategoryShowDataだよ");
    console.log(stockCategoryData.stock_categories);
    return stockCategoryData.stock_categories;
  }
);

// 在庫カテゴリ情報を更新する非同期アクション,put,update
export const updateStockCategory = createAsyncThunk(
  "stock_category/updateStockCategory",
  async (formData: {
    id: number;
    category: string;
    created_at: string;
    updated_at: string;
  }) => {
    const { id, ...updateData } = formData; // idを除外する
    const stockCategoryData: any = await stockCategoryApi.updateStockCategory(
      id,
      updateData
    );
    console.log("stockCategoryUpdateDataだよ");
    console.log(stockCategoryData.stock_categories);
  }
);

// 在庫カテゴリ情報を削除する非同期アクション//delete
export const deleteStockCategory = createAsyncThunk(
  "stock_category/deleteStockCategory",
  async (id: number) => {
    const stockCategoryData: any = await stockCategoryApi.deleteStockCategory(
      id
    );
    console.log("stockCategoryDeleteDataだよ");
    console.log(stockCategoryData.stock_categories);
    return stockCategoryData.stock_categories;
  }
);

export interface Stock_categoryState {
  // ステートの型
  id: number;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  stock_category: Stock_categoryState[];
  loading: boolean;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  stock_category: [],
  loading: false,
  error: null,
};

const stock_categorySlice = createSlice({
  name: "stock_category",
  initialState,
  reducers: {
    updateStockCategoryInfo: (
      state,
      action: PayloadAction<Stock_categoryState>
    ) => {
      const updateStockCategory = action.payload;
      const index = state.stock_category.findIndex(
        (stock_category) => stock_category.id === updateStockCategory.id
      );
      if (index !== -1) {
        state.stock_category[index] = updateStockCategory;
      }
      return state;
    },

    updateStockCategoryName: (
      state,
      action: PayloadAction<Stock_categoryState>
    ) => {
      const updateStockCategory = action.payload;
      const index = state.stock_category.findIndex(
        (stock_category) => stock_category.id === updateStockCategory.id
      );
      if (index !== -1) {
        state.stock_category[index].category = updateStockCategory.category;
      }
      return state;
    },

    deleteStockCategoryInfo: (state, action: PayloadAction<number>) => {
      state.stock_category = state.stock_category.filter(
        (stock_category) => stock_category.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getStockCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStockCategory.fulfilled, (state, action) => {
      state.stock_category = action.payload;
      state.loading = false;
    });
    builder.addCase(getStockCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(createStockCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createStockCategory.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createStockCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(getStockCategoryById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStockCategoryById.fulfilled, (state, action) => {
      state.stock_category = action.payload;
      state.loading = false;
    });
    builder.addCase(getStockCategoryById.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(updateStockCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateStockCategory.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateStockCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(deleteStockCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteStockCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.stock_category = state.stock_category.filter(
        (stock_category) => stock_category.id !== action.payload
      );
    });
    builder.addCase(deleteStockCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const {
  updateStockCategoryInfo,
  updateStockCategoryName,
  deleteStockCategoryInfo,
} = stock_categorySlice.actions;

const stockCategoryReducer = stock_categorySlice.reducer;

export default stockCategoryReducer;
