import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseApi } from "../../services/merchandises/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getMerchandise = createAsyncThunk(
  "merchandise/getMerchandise",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await merchandiseApi.fetchAllMerchandises();
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
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
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    const response: any = await merchandiseApi.createMerchandise(formData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const getMerchandiseById = createAsyncThunk(
  "merchandise/getMerchandiseById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await merchandiseApi.fetchMerchandiseById(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

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
    const { id, ...updateData } = formData;
    const response: any = await merchandiseApi.updateMerchandise(
      id,
      updateData
    );
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);
export const deleteMerchandise = createAsyncThunk(
  "merchandise/deleteMerchandise",
  async (id: number, { rejectWithValue }) => {
    const response: any = await merchandiseApi.deleteMerchandise(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export interface MerchandiseState {
  // ステートの型
  id: number;
  merchandise_name: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // RootStateの型
  merchandise: MerchandiseState[];
  loading: boolean;
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  merchandise: [],
  loading: false,
  message: null,
  error: null,
};

const merchandiseSlice = createSlice({
  name: "merchandise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMerchandise.pending, (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getMerchandise.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "物販商品の取得に成功しました！";
      state.merchandise = [
        ...state.merchandise,
        ...action.payload.merchandises,
      ];
    });
    builder.addCase(getMerchandise.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createMerchandise.pending, (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createMerchandise.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "物販商品の作成に成功しました！";
      state.merchandise = [...state.merchandise, action.payload.merchandise];
    });
    builder.addCase(createMerchandise.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(getMerchandiseById.pending, (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getMerchandiseById.fulfilled, (state, action) => {
      state.loading = false;
      state.merchandise = [...state.merchandise, action.payload.merchandise];
      state.message = "物販商品の取得に成功しました！";
    });
    builder.addCase(getMerchandiseById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(updateMerchandise.pending, (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateMerchandise.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "物販商品の更新に成功しました！";
      state.merchandise = state.merchandise.map((merchandise) =>
        merchandise.id === action.payload.merchandise.id
          ? { ...merchandise, ...action.payload.merchandise }
          : merchandise
      );
    });
    builder.addCase(updateMerchandise.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteMerchandise.pending, (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteMerchandise.fulfilled, (state, action) => {
      state.loading = false;
      state.merchandise = state.merchandise.filter(
        (merchandise) => merchandise.id !== action.payload.deleteId
      );
    });
    builder.addCase(deleteMerchandise.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
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
