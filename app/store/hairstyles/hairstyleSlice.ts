import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendRequest } from "../../services/requestApi";
import { AppThunk } from "../../redux/store";

export interface HairstyleState {
  // ステートの型
  id: number;
  hairstyle_name: string;
  created_at: Date;
  updated_at: Date;
  loading: boolean;
  error: string | null;
}

const initialState: HairstyleState = {
  // 初期状態
  id: 0,
  hairstyle_name: "",
  created_at: new Date(),
  updated_at: new Date(),
  loading: false,
  error: null,
};

const hairstyleSlice = createSlice({
  name: "hairstyle",
  initialState,
  reducers: {
    setHairstyleName: (state, action: PayloadAction<string>) => {
      state.hairstyle_name = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setHairstyleName,setLoading, setError } =
  hairstyleSlice.actions;

export const hairstyleReducer = hairstyleSlice.reducer;

export default hairstyleReducer;

// Action Creators
export const createHairstyle =
  (formData: {
    id: number;
    hairstyle_name: string;
    created_at: Date;
    updated_at: Date;
  }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await sendRequest("/hairstyles", "POST", formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
