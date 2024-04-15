import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { hairstyleScheduleApi } from "../../../services/middleTable/schedules/hairstyle_schedulesApi";

export interface Hairstyle_schedulesState {
  // ステートの型
  hairstyles_id: number;
  schedules_id: number;
  loading: boolean;
  error: string | null;
}

const initialState: Hairstyle_schedulesState = {
  // 初期状態
  hairstyles_id: 0,
  schedules_id: 0,
  loading: false,
  error: null,
};

const hairstyle_schedulesSlice = createSlice({
  name: "hairstyle_schedules",
  initialState,
  reducers: {
    setHairstyle_id: (state, action: PayloadAction<number>) => {
      state.hairstyles_id = action.payload;
    },
    setSchedule_id: (state, action: PayloadAction<number>) => {
      state.schedules_id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setHairstyle_id, setSchedule_id, setLoading, setError } =
  hairstyle_schedulesSlice.actions;

export const hairstyle_schedulesReducer = hairstyle_schedulesSlice.reducer;

export default hairstyle_schedulesReducer;

// Action Creators
export const createHairstyle_schedules =
  (formData: { hairstyles_id: number; schedules_id: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await hairstyleScheduleApi.createHairstyleSchedule(
        formData
      );
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
