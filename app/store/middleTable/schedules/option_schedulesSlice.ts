import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { optionScheduleApi } from "../../../services/middleTable/schedules/option_schedulesApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getOption_schedules = createAsyncThunk(
  "option_schedules/getOption_schedules",
  async () => {
    const option_schedulesData: any =
      await optionScheduleApi.fetchAllOptionSchedules();
    console.log("option_schedulesDataだよ");
    console.log(option_schedulesData.option_schedules);
    return option_schedulesData.option_schedules;
  }
);

export interface Option_schedulesState {
  // ステートの型
  id: number;
  options_id: number;
  schedules_id: number;
}

export interface RootState {
  // RootStateの型
  option_schedules: Option_schedulesState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  option_schedules: [],
  loading: false,
  error: null,
};

const option_schedulesSlice = createSlice({
  name: "option_schedules",
  initialState,
  reducers: {
    updateOption_schedulesInfo(
      state,
      action: PayloadAction<Option_schedulesState>
    ) {
      const updatedOption_schedules = action.payload;
      const index = state.option_schedules.findIndex(
        (option_schedules) => option_schedules.id === updatedOption_schedules.id
      );
      if (index !== -1) {
        state.option_schedules[index] = updatedOption_schedules;
      }
      return state;
    },

    deleteOption_schedulesInfo(state, action: PayloadAction<number>) {
      state.option_schedules = state.option_schedules.filter(
        (option_schedules) => option_schedules.id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOption_schedules.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOption_schedules.fulfilled, (state, action) => {
      state.option_schedules = action.payload;
      state.loading = false;
    });
    builder.addCase(getOption_schedules.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateOption_schedulesInfo, deleteOption_schedulesInfo } =
  option_schedulesSlice.actions;

const option_schedulesReducer = option_schedulesSlice.reducer;

export default option_schedulesReducer;
