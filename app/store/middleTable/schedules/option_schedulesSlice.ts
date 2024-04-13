import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";

export interface Option_schedulesState {
  // ステートの型
  option_id: number;
  schedule_id: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Option_schedulesState = {
  // 初期状態
  option_id: 0,
  schedule_id: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const option_schedulesSlice = createSlice({
  name: "option_schedules",
  initialState,
  reducers: {

    setOption_id: (state, action: PayloadAction<number>) => {
      state.option_id = action.payload;
    },
    setSchedule_id: (state, action: PayloadAction<number>) => {
      state.schedule_id = action.payload;
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
  (formData: {
    option_id: number;
    schedule_id: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/option_schedules", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
