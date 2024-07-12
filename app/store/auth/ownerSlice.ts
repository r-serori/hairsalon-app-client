import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ownerApi } from "../../services/auth/ownerApi";
import RootState from "../../redux/reducers/rootReducer";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";

export const ownerRegister = createAsyncThunk(
  "owner/register",
  async (
    formData: {
      store_name: string;
      postal_code: string;
      prefecture: string;
      city: string;
      addressLine1: string;
      addressLine2?: string;
      phone_number: string;
      user_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await ownerApi.ownerRegister(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface OwnerState {
  id: number;
  store_name: string;
  postal_code: string;
  prefecture: string;
  city: string;
  address_line1: string;
  address_line2?: string;
  phone_number: string;
  user_id: number;
}

export interface RootState {
  owner: OwnerState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: any | null;
}

const initialState: RootState = {
  owner: [],
  status: "idle",
  message: null,
  error: null,
};

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {
    oChangeMassage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ownerRegister.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(ownerRegister.fulfilled, (state, action) => {
      state.status = "success";
      state.owner = action.payload;
      state.message = "オーナー登録が完了しました。";
    });
    builder.addCase(ownerRegister.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });
  },
});

export const { oChangeMassage } = ownerSlice.actions;

const ownerReducer = ownerSlice.reducer;

export default ownerReducer;
