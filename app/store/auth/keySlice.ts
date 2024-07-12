import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import RootState from "../../redux/reducers/rootReducer";
import { getKeyApi } from "../../services/auth/key";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";

export const getKey = createAsyncThunk(
  "key/getKey",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response = await getKeyApi.getKey();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface KeyState {
  key: string | null;
}

export interface RootState {
  key: string | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: RootState = {
  key: null,
  status: "idle",
};

export const keySlice = createSlice({
  name: "key",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getKey.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getKey.fulfilled, (state, action) => {
      state.status = "success";
      state.key = action.payload.roleKey;
    });
    builder.addCase(getKey.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const selectKey = (state: RootState) => state.key;

const keyReducer = keySlice.reducer;

export default keyReducer;
