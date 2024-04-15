import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { optionApi } from "../../services/options/api";
import { AppThunk } from "../../redux/store";

export interface OptionState {
  // ステートの型
  id: number;
  option_name: string;
  price: number;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: OptionState = {
  // 初期状態
  id: 0,
  option_name: "",
  price: 0,
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    setOptionName: (state, action: PayloadAction<string>) => {
      state.option_name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setOptionName, setPrice, setLoading, setError } =
  optionSlice.actions;

export const optionReducer = optionSlice.reducer;

export default optionReducer;

// Action Creators
export const createOption =
  (formData: { id: number; option_name: string; price: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await optionApi.createOption(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
