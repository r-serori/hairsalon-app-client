import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { hairstyleApi } from "../../services/hairstyles/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";
import { stat } from "fs";

export const getHairstyle = createAsyncThunk(
  "hairstyles/getHairstyle",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await hairstyleApi.fetchAllHairstyles();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const createHairstyle = createAsyncThunk(
  "hairstyles/createHairstyle",
  async (
    formData: {
      id: number;
      hairstyle_name: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await hairstyleApi.createHairstyle(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateHairstyle = createAsyncThunk(
  "hairstyles/updateHairstyle",
  async (
    formData: {
      id: number;
      hairstyle_name: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await hairstyleApi.updateHairstyle(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const deleteHairstyle = createAsyncThunk(
  "hairstyles/deleteHairstyle",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await hairstyleApi.deleteHairstyle(id);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface HairstyleState {
  // ステートの型
  id: number;
  hairstyle_name: string;
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
      state.status = "loading";
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
      state.status = "loading";
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

    builder.addCase(updateHairstyle.pending, (state) => {
      state.status = "loading";
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
      state.status = "loading";
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
      state.status = "success";
      state.hairstyles = action.payload.hairstyles
        ? state.hairstyles.length === action.payload.hairstyles
          ? state.hairstyles
          : action.payload.hairstyles
        : state.hairstyles;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.hairstyles = action.payload.hairstyles
        ? state.hairstyles.length === action.payload.hairstyles
          ? state.hairstyles
          : action.payload.hairstyles
        : state.hairstyles;
    });
  },
});

const hairstyleReducer = hairstyleSlice.reducer;

export default hairstyleReducer;
