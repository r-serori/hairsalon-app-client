import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stockCategoryApi } from "../../../services/stock_categories/api";
import RootState from "../../../redux/reducers/rootReducer";

// APIから在庫カテゴリ情報を取得する非同期アクション//get
export const getStockCategory = createAsyncThunk(
  "stock_category/getStockCategory",
  async (owner_id: number, { rejectWithValue }) => {
    const response: any = await stockCategoryApi.fetchAllStockCategories(
      owner_id
    ); // APIからデータを取得
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

// 新しい在庫カテゴリ情報を作成する非同期アクション//post,store
export const createStockCategory = createAsyncThunk(
  "stock_category/createStockCategory",
  async (
    formData: {
      id: number;
      category: string;
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await stockCategoryApi.createStockCategory(formData);
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
// 在庫カテゴリ情報を取得する非同期アクション//show
// export const getStockCategoryById = createAsyncThunk(
//   "stock_category/getStockCategoryById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await stockCategoryApi.fetchStockCategoryById(id);
//     if (response.resStatus === "error") {
//       //エラー時の処理
//       console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
//       return rejectWithValue(response);
//     } else if (response.data.resStatus === "error") {
//       //エラー時の処理
//       console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
//       return rejectWithValue(response.data);
//     } else if (response.resStatus === "success") {
//       //成功時の処理
//       console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
//       return response;
//     } else if (response.data.resStatus === "success") {
//       //成功時の処理
//       console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
//       return response.data;
//     }
//   }
// );

// 在庫カテゴリ情報を更新する非同期アクション,put,update
export const updateStockCategory = createAsyncThunk(
  "stock_category/updateStockCategory",
  async (
    formData: {
      id: number;
      category: string;
    },
    { rejectWithValue }
  ) => {
    const response: any = await stockCategoryApi.updateStockCategory(formData);
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

// 在庫カテゴリ情報を削除する非同期アクション//delete
export const deleteStockCategory = createAsyncThunk(
  "stock_category/deleteStockCategory",
  async (id: number, { rejectWithValue }) => {
    const response: any = await stockCategoryApi.deleteStockCategory(id);
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

export interface Stock_categoryState {
  // ステートの型
  id: number;
  category: string;
  owner_id: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  stock_category: Stock_categoryState[];
  loading: boolean;
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  stock_category: [],
  loading: false,
  message: null,
  error: null,
};

const stock_categorySlice = createSlice({
  name: "stock_category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStockCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(getStockCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.stock_category = [
        ...state.stock_category,
        ...action.payload.stockCategories,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫カテゴリーの取得に成功しました！";
    });
    builder.addCase(getStockCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createStockCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(createStockCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.stock_category = [
        ...state.stock_category,
        action.payload.stockCategory,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫カテゴリーの作成に成功しました！";
    });
    builder.addCase(createStockCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // builder.addCase(getStockCategoryById.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    //   state.message = null;
    // });
    // builder.addCase(getStockCategoryById.fulfilled, (state, action) => {
    //   state.stock_category = [
    //     ...state.stock_category,
    //     action.payload.stockCategory,
    //   ];
    //   state.loading = false;
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "在庫カテゴリーの取得に成功しました！";
    // });
    // builder.addCase(getStockCategoryById.rejected, (state, action) => {
    //   state.error = action.error.message;
    //   state.loading = false;
    // });

    builder.addCase(updateStockCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(updateStockCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.stock_category = state.stock_category.map((stock_category) =>
        stock_category.id === action.payload.stockCategory.id
          ? { ...stock_category, ...action.payload.stockCategory }
          : stock_category
      );
      state.message = action.payload.message
        ? action.payload.message
        : "在庫カテゴリーの更新に成功しました！";
    });
    builder.addCase(updateStockCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(deleteStockCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(deleteStockCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.stock_category = state.stock_category.filter(
        (stock_category) =>
          stock_category.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "在庫カテゴリーの削除に成功しました！";
    });
    builder.addCase(deleteStockCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

const stockCategoryReducer = stock_categorySlice.reducer;

export default stockCategoryReducer;
