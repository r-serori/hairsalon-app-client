import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { hairstyleScheduleApi } from "../../../services/middleTable/schedules/hairstyle_schedulesApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getHairstyle_schedules = createAsyncThunk(
  "hairstyle_schedules/getHairstyle_schedules",
  async () => {
    const hairstyle_schedulesData: any =
      await hairstyleScheduleApi.fetchAllHairstyleSchedules();
    console.log("hairstyle_schedulesDataだよ");
    console.log(hairstyle_schedulesData.hairstyle_schedules);
    return hairstyle_schedulesData.hairstyle_schedules;
  }
);

export interface Hairstyle_schedulesState {
  // ステートの型
  id: number;
  hairstyles_id: number;
  schedules_id: number;
}

export interface RootState {
  // RootStateの型
  hairstyle_schedules: Hairstyle_schedulesState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  hairstyle_schedules: [],
  loading: false,
  error: null,
};

const hairstyle_schedulesSlice = createSlice({
  name: "hairstyle_schedules",
  initialState,
  reducers: {
    updateHairstyle_schedulesInfo(
      state,
      action: PayloadAction<Hairstyle_schedulesState>
    ) {
      const updatedHairstyle_schedules = action.payload;
      const index = state.hairstyle_schedules.findIndex(
        (hairstyle_schedules) =>
          hairstyle_schedules.id === updatedHairstyle_schedules.id
      );
      if (index !== -1) {
        state.hairstyle_schedules[index] = updatedHairstyle_schedules;
      }
      return state;
    },

    deleteHairstyle_schedulesInfo(state, action: PayloadAction<number>) {
      state.hairstyle_schedules = state.hairstyle_schedules.filter(
        (hairstyle_schedules) => hairstyle_schedules.id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHairstyle_schedules.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHairstyle_schedules.fulfilled, (state, action) => {
      state.hairstyle_schedules = action.payload;
      state.loading = false;
    });
    builder.addCase(getHairstyle_schedules.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateHairstyle_schedulesInfo, deleteHairstyle_schedulesInfo } =
  hairstyle_schedulesSlice.actions;

const hairstyle_schedulesReducer = hairstyle_schedulesSlice.reducer;

export default hairstyle_schedulesReducer;
