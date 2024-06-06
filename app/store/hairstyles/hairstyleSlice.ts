import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { hairstyleApi } from "../../services/hairstyles/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getHairstyle = createAsyncThunk(
  "hairstyle/getHairstyle",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await hairstyleApi.fetchAllHairstyles();
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

export const createHairstyle = createAsyncThunk(
  "hairstyle/createHairstyle",
  async (
    formData: {
      id: number;
      hairstyle_name: string;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    const response: any = await hairstyleApi.createHairstyle(formData);
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

export const getHairstyleById = createAsyncThunk(
  "hairstyle/getHairstyleById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await hairstyleApi.fetchHairstyleById(id);
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

export const updateHairstyle = createAsyncThunk(
  "hairstyle/updateHairstyle",
  async (
    formData: {
      id: number;
      hairstyle_name: string;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    const { id, ...updateData } = formData;
    const response: any = await hairstyleApi.updateHairstyle(id, updateData);
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

export const deleteHairstyle = createAsyncThunk(
  "hairstyle/deleteHairstyle",
  async (id: number, { rejectWithValue }) => {
    const response: any = await hairstyleApi.deleteHairstyle(id);
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

export interface HairstyleState {
  // ステートの型
  id: number;
  hairstyle_name: string;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  hairstyle: HairstyleState[];
  loading: boolean;
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  hairstyle: [],
  loading: false,
  message: null,
  error: null,
};

const hairstyleSlice = createSlice({
  name: "hairstyle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHairstyle.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getHairstyle.fulfilled, (state, action) => {
      state.loading = false;
      state.hairstyle = [...state.hairstyle, ...action.payload.hairstyle];
      state.message = action.payload.message
        ? action.payload.message
        : "ヘアスタイル情報を取得しました！ ";
    });
    builder.addCase(getHairstyle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(createHairstyle.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createHairstyle.fulfilled, (state, action) => {
      state.loading = false;
      state.hairstyle = [...state.hairstyle, action.payload.hairstyle];
      state.message = action.payload.message
        ? action.payload.message
        : "ヘアスタイル情報を作成しました！";
    });
    builder.addCase(createHairstyle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(getHairstyleById.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getHairstyleById.fulfilled, (state, action) => {
      state.loading = false;
      state.hairstyle = [...state.hairstyle, action.payload.hairstyle];
      state.message = action.payload.message
        ? action.payload.message
        : "ヘアスタイル情報を取得しました！";
    });
    builder.addCase(getHairstyleById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(updateHairstyle.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateHairstyle.fulfilled, (state, action) => {
      state.loading = false;
      state.hairstyle = state.hairstyle.map((hairstyle) =>
        hairstyle.id === action.payload.hairstyle.id
          ? { ...hairstyle, ...action.payload.hairstyle }
          : hairstyle
      );
      state.message = action.payload.message
        ? action.payload.message
        : "ヘアスタイル情報を更新しました！";
    });

    builder.addCase(updateHairstyle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(deleteHairstyle.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteHairstyle.fulfilled, (state, action) => {
      state.loading = false;
      state.hairstyle = state.hairstyle.filter(
        (hairstyle) => hairstyle.id !== Number(action.payload.deleteId)
      );
    });
    builder.addCase(deleteHairstyle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.hairstyle = [...state.hairstyle, ...action.payload.hairstyles];
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.hairstyle = [...state.hairstyle, ...action.payload.hairstyles];
    });
  },
});

const hairstyleReducer = hairstyleSlice.reducer;

export default hairstyleReducer;
