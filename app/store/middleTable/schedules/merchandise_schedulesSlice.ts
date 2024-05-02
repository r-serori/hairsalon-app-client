import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { merchandiseScheduleApi } from "../../../services/middleTable/schedules/merchandise_schedulesApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getMerchandise_schedules = createAsyncThunk(
  "merchandise_schedules/getMerchandise_schedules",
  async () => {
    const merchandise_schedulesData: any =
      await merchandiseScheduleApi.fetchAllMerchandiseSchedules();
    console.log("merchandise_schedulesDataだよ");
    console.log(merchandise_schedulesData.merchandise_schedules);
    return merchandise_schedulesData.merchandise_schedules;
  }
);

export interface Merchandise_schedulesState {
  // ステートの型
  id: number;
  merchandises_id: number;
  schedules_id: number;
}

export interface RootState {
  // RootStateの型
  merchandise_schedules: Merchandise_schedulesState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  merchandise_schedules: [],
  loading: false,
  error: null,
};

const merchandise_schedulesSlice = createSlice({
  name: "merchandise_schedules",
  initialState,
  reducers: {
    updateMerchandise_schedulesInfo(
      state,
      action: PayloadAction<Merchandise_schedulesState>
    ) {
      const updatedMerchandise_schedules = action.payload;
      const index = state.merchandise_schedules.findIndex(
        (merchandise_schedules) =>
          merchandise_schedules.id === updatedMerchandise_schedules.id
      );
      if (index !== -1) {
        state.merchandise_schedules[index] = updatedMerchandise_schedules;
      }
      return state;
    },

    deleteMerchandise_schedulesInfo(state, action: PayloadAction<number>) {
      state.merchandise_schedules = state.merchandise_schedules.filter(
        (merchandise_schedules) => merchandise_schedules.id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMerchandise_schedules.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMerchandise_schedules.fulfilled, (state, action) => {
      state.merchandise_schedules = action.payload;
      state.loading = false;
    });
    builder.addCase(getMerchandise_schedules.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  updateMerchandise_schedulesInfo,
  deleteMerchandise_schedulesInfo,
} = merchandise_schedulesSlice.actions;

const merchandise_schedulesReducer = merchandise_schedulesSlice.reducer;

export default merchandise_schedulesReducer;
