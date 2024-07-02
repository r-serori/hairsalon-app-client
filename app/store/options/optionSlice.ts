import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { optionApi } from "../../services/options/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getOption = createAsyncThunk(
  "options/getOption",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await optionApi.fetchAllOptions();

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

export const createOption = createAsyncThunk(
  "options/createOption",
  async (
    formData: {
      id: number;
      option_name: string;
      price: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await optionApi.createOption(formData);

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

// export const getOptionById = createAsyncThunk(
//   "options/getOptionById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await optionApi.fetchOptionById(id);
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

export const updateOption = createAsyncThunk(
  "options/updateOption",
  async (
    formData: {
      id: number;
      option_name: string;
      price: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await optionApi.updateOption(formData);

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

export const deleteOption = createAsyncThunk(
  "options/deleteOption",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await optionApi.deleteOption(id);

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

export interface OptionState {
  // ステートの型
  id: number;
  option_name: string;
  price: number;
}

export interface RootState {
  options: OptionState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  options: [],
  status: "idle",
  message: null,
  error: null,
};

const optionSlice = createSlice({
  name: "options",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOption.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getOption.fulfilled, (state, action) => {
      state.status = "success";
      state.options = [...state.options, ...action.payload.options];
      state.message = action.payload.message
        ? action.payload.message
        : "オプションの取得に成功しました！";
    });
    builder.addCase(getOption.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "success";
    });

    builder.addCase(createOption.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createOption.fulfilled, (state, action) => {
      state.status = "success";
      state.options = [...state.options, action.payload.option];
      state.message = action.payload.message
        ? action.payload.message
        : "オプションの登録に成功しました！";
    });
    builder.addCase(createOption.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });

    // builder.addCase(getOptionById.pending, (state) => {
    //   state.status = "success";
    //   state.message = null;
    //   state.error = null;
    // });
    // builder.addCase(getOptionById.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.options = [...state.options, action.payload.option];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "オプション情報を取得しました！";
    // });
    // builder.addCase(getOptionById.rejected, (state, action) => {
    //   state.error = (action.payload as any).message;!;
    //   state.status = "failed";
    // });

    builder.addCase(updateOption.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateOption.fulfilled, (state, action) => {
      state.status = "success";
      state.options = state.options.map((option) =>
        option.id === action.payload.option.id
          ? { ...option, ...action.payload.option }
          : option
      );
      state.message = action.payload.message
        ? action.payload.message
        : "オプション情報を更新しました！";
    });
    builder.addCase(updateOption.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });

    builder.addCase(deleteOption.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteOption.fulfilled, (state, action) => {
      state.status = "success";
      state.options = state.options.filter(
        (option) => option.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "オプション情報を削除しました！";
    });
    builder.addCase(deleteOption.rejected, (state, action) => {
      state.error = (action.payload as any).message;
      state.status = "failed";
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.options =
        state.options.length === action.payload.options
          ? state.options
          : action.payload.options;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.options =
        state.options.length === action.payload.options
          ? state.options
          : action.payload.options;
    });
  },
});

const optionReducer = optionSlice.reducer;

export default optionReducer;
