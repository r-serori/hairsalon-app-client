import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseApi } from "../../services/merchandises/api";
import RootState from "../../redux/reducers/rootReducer";

export const getMerchandise = createAsyncThunk(
  "merchandise/getMerchandise",
  async () => {
    const merchandiseData: any = await merchandiseApi.fetchAllMerchandises();
    console.log("merchandiseDataだよ");
    console.log(merchandiseData.merchandises);
    return merchandiseData.merchandises;
  }
);

export const createMerchandise = createAsyncThunk(
  "merchandise/createMerchandise",
  async (formData: {
    id: number;
    merchandise_name: string;
    price: number;
    created_at: string;
    updated_at: string;
  }) => {
    const merchandiseData: any = await merchandiseApi.createMerchandise(
      formData
    );
    console.log("merchandiseCreateDataだよ");
    console.log(merchandiseData.merchandises);
  }
);

export const getMerchandiseById = createAsyncThunk(
  "merchandise/getMerchandiseById",
  async (id: number) => {
    const merchandiseData: any = await merchandiseApi.fetchMerchandiseById(id);
    console.log("merchandiseShowDataだよ");
    console.log(merchandiseData.merchandises);
    return merchandiseData.merchandises;
  }
);

export const updateMerchandise = createAsyncThunk(
  "merchandise/updateMerchandise",
  async (formData: {
    id: number;
    merchandise_name: string;
    price: number;
    created_at: string;
    updated_at: string;
  }) => {
    const { id, ...updateData } = formData;
    const merchandiseData: any = await merchandiseApi.updateMerchandise(
      id,
      updateData
    );
    console.log("merchandiseUpdateDataだよ");
    console.log(merchandiseData.merchandises);
    return merchandiseData.merchandises;
  }
);

export const deleteMerchandise = createAsyncThunk(
  "merchandise/deleteMerchandise",
  async (id: number) => {
    const merchandiseData: any = await merchandiseApi.deleteMerchandise(id);
    console.log("merchandiseDeleteDataだよ");
    console.log(merchandiseData.merchandises);
    return merchandiseData.merchandises;
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
  error: string;
}

const initialState: RootState = {
  // 初期状態
  merchandise: [],
  loading: false,
  error: "",
};

const merchandiseSlice = createSlice({
  name: "merchandise",
  initialState,
  reducers: {
    updateMerchandiseInfo: (state, action: PayloadAction<MerchandiseState>) => {
      const updatedMerchandise = action.payload;
      const index = state.merchandise.findIndex(
        (merchandise) => merchandise.id === updatedMerchandise.id
      );
      if (index !== -1) {
        state.merchandise[index] = updatedMerchandise;
      }
      return state;
    },

    updateMerchandiseName: (state, action: PayloadAction<MerchandiseState>) => {
      const updatedMerchandise = action.payload;
      const index = state.merchandise.findIndex(
        (merchandise) => merchandise.id === updatedMerchandise.id
      );
      if (index !== -1) {
        state.merchandise[index].merchandise_name =
          updatedMerchandise.merchandise_name;
      }
      return state;
    },

    updateMerchandisePrice: (
      state,
      action: PayloadAction<MerchandiseState>
    ) => {
      const updatedMerchandise = action.payload;
      const index = state.merchandise.findIndex(
        (merchandise) => merchandise.id === updatedMerchandise.id
      );
      if (index !== -1) {
        state.merchandise[index].price = updatedMerchandise.price;
      }
      return state;
    },

    deleteMerchandiseInfo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.merchandise = state.merchandise.filter(
        (merchandise) => merchandise.id !== id
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMerchandise.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMerchandise.fulfilled, (state, action) => {
      state.loading = false;
      state.merchandise = action.payload;
    });
    builder.addCase(getMerchandise.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(createMerchandise.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createMerchandise.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createMerchandise.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(getMerchandiseById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMerchandiseById.fulfilled, (state, action) => {
      state.loading = false;
      state.merchandise = action.payload;
    });
    builder.addCase(getMerchandiseById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(updateMerchandise.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateMerchandise.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateMerchandise.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(deleteMerchandise.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteMerchandise.fulfilled, (state, action) => {
      state.loading = false;
      state.merchandise = state.merchandise.filter(
        (merchandise) => merchandise.id !== action.payload
      );
    });
    builder.addCase(deleteMerchandise.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export const {
  updateMerchandiseInfo,
  updateMerchandiseName,
  updateMerchandisePrice,
  deleteMerchandiseInfo,
} = merchandiseSlice.actions;

const merchandiseReducer = merchandiseSlice.reducer;

export default merchandiseReducer;
