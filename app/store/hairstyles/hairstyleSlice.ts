import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../redux/store";
import { hairstyleApi } from "../../services/hairstyles/api";

export interface HairstyleState {
  // ステートの型
  id: number;
  hairstyle_name: string;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: HairstyleState = {
  // 初期状態
  id: 0,
  hairstyle_name: "",
  created_at: "",
  updated_at: "",
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

export const { setHairstyleName, setLoading, setError } =
  hairstyleSlice.actions;

export const hairstyleReducer = hairstyleSlice.reducer;

export default hairstyleReducer;

// Action Creators
export const createHairstyle =
  (formData: { id: number; hairstyle_name: string }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await hairstyleApi.createHairstyle(formData);
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
