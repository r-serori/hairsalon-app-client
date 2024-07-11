import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { dailySaleApi } from "../../../services/daily_sales/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getDaily_sales = createAsyncThunk(
  "daily_sales/getDaily_sales",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await dailySaleApi.fetchAllDailySales();

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

export const selectGetDaily_sales = createAsyncThunk(
  "daily_sales/selectGetDaily_sales",
  async (year: string, { rejectWithValue }) => {
    try {
      const response: any = await dailySaleApi.selectGetDailySales(year);

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

export const createDaily_sales = createAsyncThunk(
  "daily_sales/createDaily_sales",
  async (
    formData: { date: string; daily_sales: number },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await dailySaleApi.createDailySales(formData);

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

// export const getDaily_salesById = createAsyncThunk(
//   "daily_sales/getDaily_salesById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await dailySaleApi.fetchDailySalesById(id);
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

export const updateDaily_sales = createAsyncThunk(
  "daily_sales/updateDaily_sales",
  async (
    formData: {
      id: number;
      date: string;
      daily_sales: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await dailySaleApi.updateDailySales(formData);

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

export const deleteDaily_sales = createAsyncThunk(
  "daily_sales/deleteDaily_sales",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await dailySaleApi.deleteDailySales(id);

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

export interface Daily_salesState {
  // ステートの型
  id: number;
  date: string;
  daily_sales: number;
}

export interface RootState {
  // ルートステートの型を定義
  daily_sales: Daily_salesState[];
  status: "idle" | "loading" | "success" | "failed"; // ローディング状態
  message: string | null; // メッセージ
  error: string | null; // エラー
}

export const initialState: RootState = {
  // 初期状態
  daily_sales: [],
  status: "idle",
  message: null,
  error: null,
};

const daily_salesSlice = createSlice({
  name: "daily_sales",
  initialState,
  reducers: {
    changeDailySaleMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDaily_sales.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(getDaily_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.daily_sales = [...state.daily_sales, ...action.payload.dailySales];
      state.message = action.payload.message
        ? action.payload.message
        : "日次売上の取得に成功しました！";
    });
    builder.addCase(getDaily_sales.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "success";
    });

    builder.addCase(selectGetDaily_sales.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(selectGetDaily_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.daily_sales = [...state.daily_sales, ...action.payload.dailySales];
      state.message = action.payload.message
        ? action.payload.message
        : "日次売上の取得に成功しました！";
    });
    builder.addCase(selectGetDaily_sales.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });

    builder.addCase(createDaily_sales.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(createDaily_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.daily_sales = [...state.daily_sales, action.payload.dailySale];
      state.message = action.payload.message
        ? action.payload.message
        : "日次売上の作成に成功しました！";
    });
    builder.addCase(createDaily_sales.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });

    // builder.addCase(getDaily_salesById.pending, (state) => {
    //   state.status = "success";
    //   state.error = null;
    //   state.message = null;
    // });
    // builder.addCase(getDaily_salesById.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.daily_sales = [...state.daily_sales, action.payload.dailySale];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "日次売上の取得に成功しました！";
    // });
    // builder.addCase(getDaily_salesById.rejected, (state, action) => {
    //   state.error = (action.payload as any).message;;
    //   state.status = "failed";
    // });

    builder.addCase(updateDaily_sales.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(updateDaily_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.daily_sales = state.daily_sales.map((daily_sales) =>
        daily_sales.id === action.payload.dailySale.id
          ? { ...daily_sales, ...action.payload.dailySale }
          : daily_sales
      );
      state.message = action.payload.message
        ? action.payload.message
        : "日次売上の更新に成功しました！";
    });
    builder.addCase(updateDaily_sales.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });

    builder.addCase(deleteDaily_sales.pending, (state) => {
      state.status = "success";
      state.error = null;
      state.message = null;
    });
    builder.addCase(deleteDaily_sales.fulfilled, (state, action) => {
      state.status = "success";
      state.daily_sales = state.daily_sales.filter(
        (daily_sales) => daily_sales.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "日次売上の削除に成功しました！";
    });
    builder.addCase(deleteDaily_sales.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });
  },
});

export const { changeDailySaleMessage } = daily_salesSlice.actions;

const daily_salesReducer = daily_salesSlice.reducer;

export default daily_salesReducer;
