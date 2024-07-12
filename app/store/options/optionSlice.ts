import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { optionApi } from "../../services/options/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";

export const getOption = createAsyncThunk(
  "options/getOption",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await optionApi.fetchAllOptions();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
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

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

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

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const deleteOption = createAsyncThunk(
  "options/deleteOption",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await optionApi.deleteOption(id);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
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
      state.status = "loading";
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
      state.status = "loading";
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

    builder.addCase(updateOption.pending, (state) => {
      state.status = "loading";
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
      state.status = "loading";
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
      state.status = "success";
      state.options = action.payload.options
        ? state.options.length === action.payload.options
          ? state.options
          : action.payload.options
        : state.options;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.options = action.payload.options
        ? state.options.length === action.payload.options
          ? state.options
          : action.payload.options
        : state.options;
    });
  },
});

const optionReducer = optionSlice.reducer;

export default optionReducer;
