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
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
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
    //   if (response.resStatus === "error") {
    //     //エラー時の処理
    //     console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
    //     return rejectWithValue(response);
    //   } else if (response.resStatus === "success") {
    //     //成功時の処理
    //     console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
    //     return response;
    //   }
    // }
    console.log("response", response);
    return response;
  }
);

export const logout = createAsyncThunk(
  "logout/auth",
  async (formData: {}, { rejectWithValue }) => {
    const response = await authApi.logout(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
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
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  auth: [],
  loading: false,
  message: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.auth = [...state.auth, action.payload.responseUser];
      state.message = `お帰りなさい！ ${action.payload.responseUser.login_id}さん！`;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.auth = [...state.auth, action.payload.responseUser];
      state.message = `登録に成功しました！ ${action.payload.responseUser.login_id}さん！`;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false;
      state.auth = [];
      state.message = "ログアウトに成功しました！";
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
