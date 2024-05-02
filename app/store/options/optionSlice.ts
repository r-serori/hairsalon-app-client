import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { optionApi } from "../../services/options/api";
import RootState from "../../redux/reducers/rootReducer";

export const getOption = createAsyncThunk("option/getOption", async () => {
  const optionData: any = await optionApi.fetchAllOptions();
  console.log("optionDataだよ");
  console.log(optionData.options);
  return optionData.options;
});

export const createOption = createAsyncThunk(
  "option/createOption",
  async (formData: { id: number; option_name: string; price: number }) => {
    const optionData: any = await optionApi.createOption(formData);
    console.log("optionCreateDataだよ");
    console.log(optionData.options);
  }
);

export const getOptionById = createAsyncThunk(
  "option/getOptionById",
  async (id: number) => {
    const optionData: any = await optionApi.fetchOptionById(id);
    console.log("optionShowDataだよ");
    console.log(optionData.options);
    return optionData.options;
  }
);

export const updateOption = createAsyncThunk(
  "option/updateOption",
  async (formData: { id: number; option_name: string; price: number }) => {
    const { id, ...updateData } = formData;
    const optionData: any = await optionApi.updateOption(id, updateData);
    console.log("optionUpdateDataだよ");
    console.log(optionData.options);
  }
);

export const deleteOption = createAsyncThunk(
  "option/deleteOption",
  async (id: number) => {
    const optionData: any = await optionApi.deleteOption(id);
    console.log("optionDeleteDataだよ");
    console.log(optionData.options);
    return optionData.options;
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
  error: string;
}

const initialState: RootState = {
  option: [],
  loading: false,
  error: "",
};

const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    updateOptionInfo: (state, action: PayloadAction<OptionState>) => {
      const updatedOption = action.payload;
      const index = state.option.findIndex(
        (option) => option.id === updatedOption.id
      );
      if (index !== -1) {
        state.option[index] = updatedOption;
      }
      return state;
    },

    updateOptionName: (state, action: PayloadAction<OptionState>) => {
      const updatedOption = action.payload;
      const index = state.option.findIndex(
        (option) => option.id === updatedOption.id
      );
      if (index !== -1) {
        state.option[index].option_name = updatedOption.option_name;
      }
      return state;
    },

    updateOptionPrice: (state, action: PayloadAction<OptionState>) => {
      const updatedOption = action.payload;
      const index = state.option.findIndex(
        (option) => option.id === updatedOption.id
      );
      if (index !== -1) {
        state.option[index].price = updatedOption.price;
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOption.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOption.fulfilled, (state, action) => {
      state.option = action.payload;
      state.loading = false;
    });
    builder.addCase(getOption.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(createOption.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createOption.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createOption.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(getOptionById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOptionById.fulfilled, (state, action) => {
      state.option = action.payload;
      state.loading = false;
    });
    builder.addCase(getOptionById.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(updateOption.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateOption.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateOption.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });

    builder.addCase(deleteOption.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteOption.fulfilled, (state, action) => {
      state.option = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteOption.rejected, (state, action) => {
      state.error = action.error.message!;
      state.loading = false;
    });
  },
});

export const { updateOptionInfo, updateOptionName, updateOptionPrice } =
  optionSlice.actions;

const optionReducer = optionSlice.reducer;

export default optionReducer;
