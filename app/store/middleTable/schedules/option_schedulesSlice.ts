import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { optionScheduleApi } from "../../../services/middleTable/schedules/option_schedulesApi";

export interface Option_schedulesState {
  // ステートの型
  options_id: number;
  schedules_id: number;
  loading: boolean;
  error: string | null;
}

const initialState: Option_schedulesState = {
  // 初期状態
  options_id: 0,
  schedules_id: 0,
  loading: false,
  error: null,
};

const option_schedulesSlice = createSlice({
  name: "option_schedules",
  initialState,
  reducers: {
    setOption_id: (state, action: PayloadAction<number>) => {
      state.options_id = action.payload;
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

export const { setOption_id, setSchedule_id, setLoading, setError } =
  option_schedulesSlice.actions;

export const option_schedulesReducer = option_schedulesSlice.reducer;

export default option_schedulesReducer;

// Action Creators
export const createOption_schedules =
  (formData: { options_id: number; schedules_id: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await optionScheduleApi.createOptionSchedule(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
