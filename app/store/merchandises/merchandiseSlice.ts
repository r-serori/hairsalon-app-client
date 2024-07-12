import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseApi } from "../../services/merchandises/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";

export const getMerchandise = createAsyncThunk(
  "merchandises/getMerchandise",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await merchandiseApi.fetchAllMerchandises();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const createMerchandise = createAsyncThunk(
  "merchandises/createMerchandise",
  async (
    formData: {
      id: number;
      merchandise_name: string;
      price: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await merchandiseApi.createMerchandise(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateMerchandise = createAsyncThunk(
  "merchandises/updateMerchandise",
  async (
    formData: {
      id: number;
      merchandise_name: string;
      price: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await merchandiseApi.updateMerchandise(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const deleteMerchandise = createAsyncThunk(
  "merchandises/deleteMerchandise",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await merchandiseApi.deleteMerchandise(id);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface MerchandiseState {
  // ステートの型
  id: number;
  merchandise_name: string;
  price: number;
}

export interface RootState {
  // RootStateの型
  merchandises: MerchandiseState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  merchandises: [],
  status: "idle",
  message: null,
  error: null,
};

const merchandiseSlice = createSlice({
  name: "merchandises",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMerchandise.pending, (state, action) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getMerchandise.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "物販商品の取得に成功しました！";
      state.merchandises = [
        ...state.merchandises,
        ...action.payload.merchandises,
      ];
    });
    builder.addCase(getMerchandise.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createMerchandise.pending, (state, action) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createMerchandise.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "物販商品の作成に成功しました！";
      state.merchandises = [...state.merchandises, action.payload.merchandise];
    });
    builder.addCase(createMerchandise.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateMerchandise.pending, (state, action) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateMerchandise.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "物販商品の更新に成功しました！";
      state.merchandises = state.merchandises.map((merchandise) =>
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
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteMerchandise.fulfilled, (state, action) => {
      state.status = "success";
      state.merchandises = state.merchandises.filter(
        (merchandise) => merchandise.id !== Number(action.payload.deleteId)
      );
    });
    builder.addCase(deleteMerchandise.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.status = "success";
      state.merchandises = action.payload.merchandises
        ? state.merchandises.length === action.payload.merchandises
          ? state.merchandises
          : action.payload.merchandises
        : state.merchandises;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.merchandises = action.payload.merchandises
        ? state.merchandises.length === action.payload.merchandises
          ? state.merchandises
          : action.payload.merchandises
        : state.merchandises;
    });
  },
});

const merchandiseReducer = merchandiseSlice.reducer;

export default merchandiseReducer;
