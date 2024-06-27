import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stockCategoryApi } from "../../../services/stock_categories/api";
import RootState from "../../../redux/reducers/rootReducer";

// APIから在庫カテゴリ情報を取得する非同期アクション//get
export const getStockCategory = createAsyncThunk(
  "stock_category/getStockCategory",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response: any = await stockCategoryApi.fetchAllStockCategories(
        owner_id
      ); // APIからデータを取得

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
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
    try {
      const response: any = await stockCategoryApi.createStockCategory(
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
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
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await stockCategoryApi.updateStockCategory(
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

// 在庫カテゴリ情報を削除する非同期アクション//delete
export const deleteStockCategory = createAsyncThunk(
  "stock_category/deleteStockCategory",
  async (formData: { id: number; owner_id: number }, { rejectWithValue }) => {
    try {
      const response: any = await stockCategoryApi.deleteStockCategory(
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export interface Stock_categoryState {
  // ステートの型
  id: number;
  category: string;
  owner_id: number;
}

export interface RootState {
  stock_category: Stock_categoryState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  stock_category: [],
  status: "idle",
  message: null,
  error: null,
};

const stock_categorySlice = createSlice({
  name: "stock_category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStockCategory.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(getStockCategory.fulfilled, (state, action) => {
      state.status = "success";
      state.stock_category = [
        ...state.stock_category,
        ...action.payload.stockCategories,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫カテゴリーの取得に成功しました！";
    });
    builder.addCase(getStockCategory.rejected, (state, action) => {
      state.status = "success";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createStockCategory.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(createStockCategory.fulfilled, (state, action) => {
      state.status = "success";
      state.stock_category = [
        ...state.stock_category,
        action.payload.stockCategory,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "在庫カテゴリーの作成に成功しました！";
    });
    builder.addCase(createStockCategory.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });

    // builder.addCase(getStockCategoryById.pending, (state) => {
    //   state.status = "success";
    //   state.error = null;
    //   state.message = null;
    // });
    // builder.addCase(getStockCategoryById.fulfilled, (state, action) => {
    //   state.stock_category = [
    //     ...state.stock_category,
    //     action.payload.stockCategory,
    //   ];
    //   state.status = "success";
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "在庫カテゴリーの取得に成功しました！";
    // });
    // builder.addCase(getStockCategoryById.rejected, (state, action) => {
    //   state.error = (action.payload as any).message;;
    //   state.status = "failed";
    // });

    builder.addCase(updateStockCategory.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(updateStockCategory.fulfilled, (state, action) => {
      state.status = "success";
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
      state.error = (action.payload as any).message;
      state.status = "failed";
    });

    builder.addCase(deleteStockCategory.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(deleteStockCategory.fulfilled, (state, action) => {
      state.status = "success";
      state.stock_category = state.stock_category.filter(
        (stock_category) =>
          stock_category.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "在庫カテゴリーの削除に成功しました！";
    });
    builder.addCase(deleteStockCategory.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });
  },
});

const stockCategoryReducer = stock_categorySlice.reducer;

export default stockCategoryReducer;
