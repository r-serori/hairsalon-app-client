import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ownerApi } from "../../services/auth/ownerApi";
import RootState from "../../redux/reducers/rootReducer";
import { handleErrorResponse, handleCatchError } from "../errorHandler";
import { ErrorType } from "../../components/Hooks/interface";

export const ownerRegister = createAsyncThunk<
  PostOwnerState,
  OwnerState,
  {
    rejectValue: ErrorType;
  }
>("owner/register", async (formData, { rejectWithValue }) => {
  try {
    const response = await ownerApi.ownerRegister(formData);

    return handleErrorResponse(response, rejectWithValue);
  } catch (err) {
    return handleCatchError(err, rejectWithValue);
  }
});

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

export interface PostOwnerState {
  owner: OwnerState;
  message: string;
}

export interface RootState {
  owner: OwnerState;
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: ErrorType | null;
}

const initialState: RootState = {
  owner: {
    id: 0,
    store_name: "",
    postal_code: "",
    prefecture: "",
    city: "",
    address_line1: "",
    address_line2: "",
    phone_number: "",
    user_id: 0,
  },
  status: "idle",
  message: null,
  error: {
    message: "",
    status: 0,
  },
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
      state.owner = action.payload.owner;
      state.message = "オーナー登録が完了しました。";
    });
    builder.addCase(ownerRegister.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export const { oChangeMassage } = ownerSlice.actions;

const ownerReducer = ownerSlice.reducer;

export default ownerReducer;
