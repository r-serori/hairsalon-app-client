import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { optionApi } from "../../services/options/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getOption = createAsyncThunk(
  "option/getOption",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await optionApi.fetchAllOptions();
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

export const createOption = createAsyncThunk(
  "option/createOption",
  async (
    formData: { id: number; option_name: string; price: number },
    { rejectWithValue }
  ) => {
    const response: any = await optionApi.createOption(formData);
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

export const getOptionById = createAsyncThunk(
  "option/getOptionById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await optionApi.fetchOptionById(id);
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

export const updateOption = createAsyncThunk(
  "option/updateOption",
  async (
    formData: { id: number; option_name: string; price: number },
    { rejectWithValue }
  ) => {
    const { id, ...updateData } = formData;
    const response: any = await optionApi.updateOption(id, updateData);
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

export const deleteOption = createAsyncThunk(
  "option/deleteOption",
  async (id: number, { rejectWithValue }) => {
    const response: any = await optionApi.deleteOption(id);
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

export interface OptionState {
  // ステートの型
  id: number;
  option_name: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  option: OptionState[];
  loading: boolean;
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  option: [],
  loading: false,
  message: null,
  error: null,
};

const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOption.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getOption.fulfilled, (state, action) => {
      state.loading = false;
      state.option = [...state.option, ...action.payload.options];
      state.message = action.payload.message
        ? action.payload.message
        : "オプションの取得に成功しました！";
    });
    builder.addCase(getOption.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(createOption.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createOption.fulfilled, (state, action) => {
      state.loading = false;
      state.option = [...state.option, action.payload.option];
      state.message = action.payload.message
        ? action.payload.message
        : "オプションの登録に成功しました！";
    });
    builder.addCase(createOption.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(getOptionById.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getOptionById.fulfilled, (state, action) => {
      state.loading = false;
      state.option = [...state.option, action.payload.option];
      state.message = action.payload.message
        ? action.payload.message
        : "オプション情報を取得しました！";
    });
    builder.addCase(getOptionById.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(updateOption.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateOption.fulfilled, (state, action) => {
      state.loading = false;
      state.option = state.option.map((option) =>
        option.id === action.payload.option.id
          ? { ...option, ...action.payload.option }
          : option
      );
      state.message = action.payload.message
        ? action.payload.message
        : "オプション情報を更新しました！";
    });
    builder.addCase(updateOption.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(deleteOption.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteOption.fulfilled, (state, action) => {
      state.loading = false;
      state.option = state.option.filter(
        (option) => option.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "オプション情報を削除しました！";
    });
    builder.addCase(deleteOption.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.option = [...state.option, ...action.payload.options];
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.option = [...state.option, ...action.payload.options];
    });
  },
});

const optionReducer = optionSlice.reducer;

export default optionReducer;
