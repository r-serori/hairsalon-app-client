import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";
import { send } from "process";

export interface Option_customersState {
  // ステートの型
  options_id: number;
  schedules_id: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Option_customersState = {
  // 初期状態
  options_id: 0,
  schedules_id: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const option_customersSlice = createSlice({
  name: "option_customers",
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
  option_customersSlice.actions;

export const option_customersReducer = option_customersSlice.reducer;

export default option_customersReducer;


// Action Creators
export const createOption_customers =
  (formData: {
    options_id: number;
    schedules_id: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/option_customers", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
