import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { monthlySaleApi } from "../../../services/monthly_sales/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getMonthly_sales = createAsyncThunk(
  "monthly_sales/getMonthly_sales",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response: any = await monthlySaleApi.fetchAllMonthlySales(owner_id);

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

export const createMonthly_sales = createAsyncThunk(
  "monthly_sales/createMonthly_sales",
  async (
    formData: { year_month: string; monthly_sales: number; owner_id: number },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await monthlySaleApi.createMonthlySales(formData);

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

// export const getMonthly_salesById = createAsyncThunk(
//   "monthly_sales/getMonthly_salesById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await monthlySaleApi.fetchMonthlySalesById(id);
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

export const updateMonthly_sales = createAsyncThunk(
  "monthly_sales/updateMonthly_sales",
  async (
    formData: {
      id: number;
      year_month: string;
      monthly_sales: number;
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await monthlySaleApi.updateMonthlySales(formData);

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

export const deleteMonthly_sales = createAsyncThunk(
  "monthly_sales/deleteMonthly_sales",
  async (formData: { id: number; owner_id: number }, { rejectWithValue }) => {
    try {
      const response: any = await monthlySaleApi.deleteMonthlySales(formData);
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

export interface Monthly_salesState {
  // ステートの型
  id: number;
  year: number;
  month: number;
  monthly_sales: number;
  owner_id: number;
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMonthly_sales.pending, (state, action) => {
      state.status = "success";
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
      state.status = "success";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createMonthly_sales.pending, (state, action) => {
      state.status = "success";
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

    // builder.addCase(getMonthly_salesById.pending, (state, action) => {
    //   state.status = "success";
    //   state.error = null;
    //   state.message = null;
    // });
    // builder.addCase(getMonthly_salesById.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.monthly_sales = [
    //     ...state.monthly_sales,
    //     action.payload.monthlySale,
    //   ];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "月次売上の取得に成功しました！";
    // });
    // builder.addCase(getMonthly_salesById.rejected, (state, action) => {
    //   state.status ="failed";
    //   state.error = (action.payload as any).message;;
    // });

    builder.addCase(updateMonthly_sales.pending, (state, action) => {
      state.status = "success";
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
      state.status = "success";
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

const monthly_salesReducer = monthly_salesSlice.reducer;

export default monthly_salesReducer;
