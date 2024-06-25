import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { yearlySaleApi } from "../../../services/yearly_sales/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getYearly_sales = createAsyncThunk(
  "yearly_sales/getYearly_sales",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response: any = await yearlySaleApi.fetchAllYearlySales(owner_id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
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

export const createYearly_sales = createAsyncThunk(
  "yearly_sales/createYearly_sales",
  async (
    formData: { year: string; yearly_sales: number; owner_id: number },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await yearlySaleApi.createYearlySales(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
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
// export const getYearly_salesById = createAsyncThunk(
//   "yearly_sales/getYearly_salesById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await yearlySaleApi.fetchYearlySalesById(id);
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

export const updateYearly_sales = createAsyncThunk(
  "yearly_sales/updateYearly_sales",
  async (
    formData: { id: number; year: string; yearly_sales: number },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await yearlySaleApi.updateYearlySales(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
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

export const deleteYearly_sales = createAsyncThunk(
  "yearly_sales/deleteYearly_sales",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await yearlySaleApi.deleteYearlySales(id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
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

export interface Yearly_salesState {
  // ステートの型
  id: number;
  year: string;
  yearly_sales: number;
  owner_id: number;
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
      state.yearly_sales = [
        ...state.yearly_sales,
        ...action.payload.yearlySales,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "年間売上の取得に成功しました！";
    });
    builder.addCase(getYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as any).message;
    });

    builder.addCase(createYearly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(createYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = [...state.yearly_sales, action.payload.yearlySale];
      state.message = action.payload.message
        ? action.payload.message
        : "年間売上の登録に成功しました！";
    });
    builder.addCase(createYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as any).message;
    });

    // builder.addCase(getYearly_salesById.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    //   state.message = null;
    // });
    // builder.addCase(getYearly_salesById.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.yearly_sales = [...state.yearly_sales, action.payload.yearlySale];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "年間売上の取得に成功しました！";
    // });
    // builder.addCase(getYearly_salesById.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = (action.payload as any).message;;
    // });

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
      state.message = action.payload.message
        ? action.payload.message
        : "年間売上の更新に成功しました！";
    });
    builder.addCase(updateYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as any).message;
    });

    builder.addCase(deleteYearly_sales.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(deleteYearly_sales.fulfilled, (state, action) => {
      state.loading = false;
      state.yearly_sales = state.yearly_sales.filter(
        (yearly_sales) => yearly_sales.id !== Number(action.payload.deleteId)
      );
    });
    builder.addCase(deleteYearly_sales.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as any).message;
    });
  },
});

const yearly_salesReducer = yearly_salesSlice.reducer;

export default yearly_salesReducer;
