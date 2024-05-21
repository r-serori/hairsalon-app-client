import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth/api";
import RootState from "../../redux/reducers/rootReducer";

export const login = createAsyncThunk(
  "login/auth",
  async (
    formData: {
      id: number;
      login_id: string;
      password: string;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    const response = await authApi.login(formData);
    if (response.status === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.status === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export const register = createAsyncThunk(
  "register/auth",
  async (
    formData: {
      id: number;
      login_id: string;
      password: string;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    const response = await authApi.register(formData);
    if (response.status === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.status === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export const logout = createAsyncThunk(
  "logout/auth",
  async (formData: {}, { rejectWithValue }) => {
    const response = await authApi.logout(formData);
    if (response.status === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.status === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export interface AuthState {
  // ステートの型
  id: number;
  login_id: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  auth: AuthState[];
  loading: boolean;
  message: string;
  error: string;
}

const initialState: RootState = {
  // 初期状態
  auth: [],
  loading: false,
  message: "",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<AuthState[]>) => {
      state.auth = action.payload;
      state.loading = false;
      state.error = "";
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action: PayloadAction<AuthState[]>) => {
      state.auth = action.payload;
      state.loading = false;
      state.error = "";
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.auth.push(action.payload.responseUser);
      state.message = action.payload.message;
      state.error = "";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.message = "";
      state.error = (action.payload as any).message;
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.auth.push(action.payload.responseUser);
      state.message = action.payload.message;
      state.error = "";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.message = "";
      state.error = (action.payload as any).message;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false;
      state.auth = [];
      state.message = action.payload.message;
      state.error = "";
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.message = "";
      state.error = (action.payload as any).message;
    });
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
