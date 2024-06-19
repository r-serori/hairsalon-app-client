import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseApi } from "../../services/merchandises/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getMerchandise = createAsyncThunk(
  "merchandise/getMerchandise",
  async (owner_id: number, { rejectWithValue }) => {
    const response: any = await merchandiseApi.fetchAllMerchandises(owner_id);
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
    const response: any = await merchandiseApi.createMerchandise(formData);
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
    const response: any = await merchandiseApi.updateMerchandise(formData);
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
export const deleteMerchandise = createAsyncThunk(
  "merchandise/deleteMerchandise",
  async (id: number, { rejectWithValue }) => {
    const response: any = await merchandiseApi.deleteMerchandise(id);
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
      state.message = action.payload.message
        ? action.payload.message
        : "物販商品の取得に成功しました！";
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
      state.message = action.payload.message
        ? action.payload.message
        : "物販商品の作成に成功しました！";
      state.merchandise = [...state.merchandise, action.payload.merchandise];
    });
    builder.addCase(createMerchandise.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    // builder.addCase(getMerchandiseById.pending, (state, action) => {
    //   state.loading = true;
    //   state.message = null;
    //   state.error = null;
    // });
    // builder.addCase(getMerchandiseById.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.merchandise = [...state.merchandise, action.payload.merchandise];
    //   state.message = action.payload.message
    //     ? action.payload.message
    //     : "物販商品の取得に成功しました！";
    // });
    // builder.addCase(getMerchandiseById.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message!;
    // });

    builder.addCase(updateMerchandise.pending, (state, action) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateMerchandise.fulfilled, (state, action) => {
      state.loading = false;
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
        (merchandise) => merchandise.id !== Number(action.payload.deleteId)
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
