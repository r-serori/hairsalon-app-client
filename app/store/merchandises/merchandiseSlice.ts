import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseApi } from "../../services/merchandises/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getMerchandise = createAsyncThunk(
  "merchandise/getMerchandise",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response: any = await merchandiseApi.fetchAllMerchandises(owner_id);

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

export const createMerchandise = createAsyncThunk(
  "merchandise/createMerchandise",
  async (
    formData: {
      id: number;
      merchandise_name: string;
      price: number;
      owner_id: number;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await merchandiseApi.createMerchandise(formData);

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

// export const getMerchandiseById = createAsyncThunk(
//   "merchandise/getMerchandiseById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await merchandiseApi.fetchMerchandiseById(id);
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

export const updateMerchandise = createAsyncThunk(
  "merchandise/updateMerchandise",
  async (
    formData: {
      id: number;
      merchandise_name: string;
      price: number;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await merchandiseApi.updateMerchandise(formData);

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

export const deleteMerchandise = createAsyncThunk(
  "merchandise/deleteMerchandise",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await merchandiseApi.deleteMerchandise(id);

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

export interface MerchandiseState {
  // ステートの型
  id: number;
  merchandise_name: string;
  price: number;
  owner_id: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // RootStateの型
  merchandise: MerchandiseState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  merchandise: [],
  status: "idle",
  message: null,
  error: null,
};

const merchandiseSlice = createSlice({
  name: "merchandise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMerchandise.pending, (state, action) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getMerchandise.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "物販商品の取得に成功しました！";
      state.merchandise = [
        ...state.merchandise,
        ...action.payload.merchandises,
      ];
    });
    builder.addCase(getMerchandise.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createMerchandise.pending, (state, action) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createMerchandise.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "物販商品の作成に成功しました！";
      state.merchandise = [...state.merchandise, action.payload.merchandise];
    });
    builder.addCase(createMerchandise.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    // builder.addCase(getMerchandiseById.pending, (state, action) => {
    //   state.status = "success";
    //   state.message = null;
    //   state.error = null;
    // });
    // builder.addCase(getMerchandiseById.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.merchandise = [...state.merchandise, action.payload.merchandise];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "物販商品の取得に成功しました！";
    // });
    // builder.addCase(getMerchandiseById.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = (action.payload as any).message;!;
    // });

    builder.addCase(updateMerchandise.pending, (state, action) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateMerchandise.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "物販商品の更新に成功しました！";
      state.merchandise = state.merchandise.map((merchandise) =>
        merchandise.id === action.payload.merchandise.id
          ? { ...merchandise, ...action.payload.merchandise }
          : merchandise
      );
    });
    builder.addCase(updateMerchandise.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(deleteMerchandise.pending, (state, action) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteMerchandise.fulfilled, (state, action) => {
      state.status = "success";
      state.merchandise = state.merchandise.filter(
        (merchandise) => merchandise.id !== Number(action.payload.deleteId)
      );
    });
    builder.addCase(deleteMerchandise.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.merchandise = [
        ...state.merchandise,
        ...action.payload.merchandises,
      ];
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.merchandise = [
        ...state.merchandise,
        ...action.payload.merchandises,
      ];
    });
  },
});

const merchandiseReducer = merchandiseSlice.reducer;

export default merchandiseReducer;
