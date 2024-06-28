import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { hairstyleApi } from "../../services/hairstyles/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getHairstyle = createAsyncThunk(
  "hairstyles/getHairstyle",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response: any = await hairstyleApi.fetchAllHairstyles(owner_id);

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

export const createHairstyle = createAsyncThunk(
  "hairstyles/createHairstyle",
  async (
    formData: {
      id: number;
      hairstyle_name: string;
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await hairstyleApi.createHairstyle(formData);

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

// export const getHairstyleById = createAsyncThunk(
//   "hairstyles/getHairstyleById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await hairstyleApi.fetchHairstyleById(id);
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

export const updateHairstyle = createAsyncThunk(
  "hairstyles/updateHairstyle",
  async (
    formData: {
      id: number;
      hairstyle_name: string;
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await hairstyleApi.updateHairstyle(formData);

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

export const deleteHairstyle = createAsyncThunk(
  "hairstyles/deleteHairstyle",
  async (formData: { id: number; owner_id: number }, { rejectWithValue }) => {
    try {
      const response: any = await hairstyleApi.deleteHairstyle(formData);

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

export interface HairstyleState {
  // ステートの型
  id: number;
  hairstyle_name: string;
  owner_id: number;
}

export interface RootState {
  // ルートステートの型を定義
  hairstyles: HairstyleState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  hairstyles: [],
  status: "idle",
  message: null,
  error: null,
};

const hairstyleSlice = createSlice({
  name: "hairstyles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHairstyle.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getHairstyle.fulfilled, (state, action) => {
      state.status = "success";
      state.hairstyles = [...state.hairstyles, ...action.payload.hairstyles];
      state.message = action.payload.message
        ? action.payload.message
        : "ヘアスタイル情報を取得しました！ ";
    });
    builder.addCase(getHairstyle.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createHairstyle.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createHairstyle.fulfilled, (state, action) => {
      state.status = "success";
      state.hairstyles = [...state.hairstyles, action.payload.hairstyle];
      state.message = action.payload.message
        ? action.payload.message
        : "ヘアスタイル情報を作成しました！";
    });
    builder.addCase(createHairstyle.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    // builder.addCase(getHairstyleById.pending, (state) => {
    //   state.status = "success";
    //   state.message = null;
    //   state.error = null;
    // });
    // builder.addCase(getHairstyleById.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.hairstyles = [...state.hairstyles, action.payload.hairstyle];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "ヘアスタイル情報を取得しました！";
    // });
    // builder.addCase(getHairstyleById.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = (action.payload as any).message;!;
    // });

    builder.addCase(updateHairstyle.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateHairstyle.fulfilled, (state, action) => {
      state.status = "success";
      state.hairstyles = state.hairstyles.map((hairstyle) =>
        hairstyle.id === action.payload.hairstyle.id
          ? { ...hairstyle, ...action.payload.hairstyle }
          : hairstyle
      );
      state.message = action.payload.message
        ? action.payload.message
        : "ヘアスタイル情報を更新しました！";
    });

    builder.addCase(updateHairstyle.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(deleteHairstyle.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteHairstyle.fulfilled, (state, action) => {
      state.status = "success";
      state.hairstyles = state.hairstyles.filter(
        (hairstyle) => hairstyle.id !== Number(action.payload.deleteId)
      );
    });
    builder.addCase(deleteHairstyle.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.hairstyles = [...state.hairstyles, ...action.payload.hairstyles];
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.hairstyles = [...state.hairstyles, ...action.payload.hairstyles];
    });
  },
});

const hairstyleReducer = hairstyleSlice.reducer;

export default hairstyleReducer;
