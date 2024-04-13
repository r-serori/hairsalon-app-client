import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { sendRequest } from "../../../services/requestApi";

export interface Hairstyle_customersState {
  // ステートの型
  hairstyles_id: number;
  schedules_id: number;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: Hairstyle_customersState = {
  // 初期状態
  hairstyles_id: 0,
  schedules_id: 0,
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const hairstyle_customersSlice = createSlice({
  name: "hairstyle_customers",
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
  hairstyle_customersSlice.actions;

export const hairstyle_customersReducer = hairstyle_customersSlice.reducer;

export default hairstyle_customersReducer;


// Action Creators
export const createHairstyle_customers =
  (formData: {
    hairstyles_id: number;
    schedules_id: number;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/hairstyle_customers", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
