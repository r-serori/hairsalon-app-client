import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";

export interface Merchandise_schedulesState {
  // ステートの型
  merchandises_id: number;
  schedules_id: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Merchandise_schedulesState = {
  // 初期状態
  merchandises_id: 0,
  schedules_id: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const merchandise_schedulesSlice = createSlice({
  name: "merchandise_schedules",
  initialState,
  reducers: {

    setMerchandise_id: (state, action: PayloadAction<number>) => {
      state.merchandises_id = action.payload;
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


export const { setMerchandise_id, setSchedule_id, setLoading, setError } =
  merchandise_schedulesSlice.actions;

export const merchandise_schedulesReducer = merchandise_schedulesSlice.reducer;

export default merchandise_schedulesReducer;


// Action Creators
export const createMerchandise_schedules =
  (formData: {
    merchandises_id: number;
    schedules_id: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/merchandise_schedules", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
