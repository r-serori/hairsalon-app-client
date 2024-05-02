import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { hairstyleApi } from "../../services/hairstyles/api";
import RootState from "../../redux/reducers/rootReducer";

export const getHairstyle = createAsyncThunk(
  "hairstyle/getHairstyle",
  async () => {
    const hairstyleData: any = await hairstyleApi.fetchAllHairstyles();
    console.log("hairstyleDataだよ");
    console.log(hairstyleData.hairstyles);
    return hairstyleData.hairstyles;
  }
);

export const createHairstyle = createAsyncThunk(
  "hairstyle/createHairstyle",
  async (formData: {
    id: number;
    hairstyle_name: string;
    created_at: string;
    updated_at: string;
  }) => {
    const hairstyleData: any = await hairstyleApi.createHairstyle(formData);
    console.log("hairstyleCreateDataだよ");
    console.log(hairstyleData.hairstyles);
  }
);

export const getHairstyleById = createAsyncThunk(
  "hairstyle/getHairstyleById",
  async (id: number) => {
    const hairstyleData: any = await hairstyleApi.fetchHairstyleById(id);
    console.log("hairstyleShowDataだよ");
    console.log(hairstyleData.hairstyles);
    return hairstyleData.hairstyles;
  }
);

export const updateHairstyle = createAsyncThunk(
  "hairstyle/updateHairstyle",
  async (formData: {
    id: number;
    hairstyle_name: string;
    created_at: string;
    updated_at: string;
  }) => {
    const { id, ...updateData } = formData;
    const hairstyleData: any = await hairstyleApi.updateHairstyle(
      id,
      updateData
    );
    console.log("hairstyleUpdateDataだよ");
    console.log(hairstyleData.hairstyles);
  }
);

export const deleteHairstyle = createAsyncThunk(
  "hairstyle/deleteHairstyle",
  async (id: number) => {
    const hairstyleData: any = await hairstyleApi.deleteHairstyle(id);
    console.log("hairstyleDeleteDataだよ");
    console.log(hairstyleData.hairstyles);
    return hairstyleData.hairstyles;
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
  error: string;
}

const initialState: RootState = {
  // 初期状態
  hairstyle: [],
  loading: false,
  error: "",
};

const hairstyleSlice = createSlice({
  name: "hairstyle",
  initialState,
  reducers: {
    updateHairstyleInfo: (state, action: PayloadAction<HairstyleState>) => {
      const updatedHairstyle = action.payload;
      const index = state.hairstyle.findIndex(
        (hairstyle) => hairstyle.id === updatedHairstyle.id
      );
      if (index !== -1) {
        state.hairstyle[index] = updatedHairstyle;
      }
      return state;
    },

    updateHairstyleName: (state, action: PayloadAction<HairstyleState>) => {
      const updatedHairstyle = action.payload;
      const index = state.hairstyle.findIndex(
        (hairstyle) => hairstyle.id === updatedHairstyle.id
      );
      if (index !== -1) {
        state.hairstyle[index].hairstyle_name = updatedHairstyle.hairstyle_name;
      }
      return state;
    },

    deleteHairstyleInfo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.hairstyle = state.hairstyle.filter(
        (hairstyle) => hairstyle.id !== id
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHairstyle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHairstyle.fulfilled, (state, action) => {
      state.loading = false;
      state.hairstyle = action.payload;
    });
    builder.addCase(getHairstyle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(createHairstyle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createHairstyle.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createHairstyle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(getHairstyleById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHairstyleById.fulfilled, (state, action) => {
      state.loading = false;
      state.hairstyle = action.payload;
    });
    builder.addCase(getHairstyleById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(updateHairstyle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateHairstyle.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateHairstyle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(deleteHairstyle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteHairstyle.fulfilled, (state, action) => {
      state.loading = false;
      state.hairstyle = action.payload;
    });
    builder.addCase(deleteHairstyle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export const { updateHairstyleInfo, updateHairstyleName, deleteHairstyleInfo } =
  hairstyleSlice.actions;

const hairstyleReducer = hairstyleSlice.reducer;

export default hairstyleReducer;
