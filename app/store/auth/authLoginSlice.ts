import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth/api";
import { AppThunk } from "../../redux/store";

export interface AuthState {
  // ステートの型
  id: number;
  login_id: string;
  password: string;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  // 初期状態
  id: 0,
  login_id: "",
  password: "",
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // リデューサー
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(
      state,
      action: PayloadAction<{ login_id: string; password: string }>
    ) {
      state.loading = false;
      state.error = null;
      state.login_id = action.payload.login_id;
      state.password = action.payload.password;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // ログアウト時にログイン情報をクリアするリデューサー
    clearLoginInfo(state) {
      state.login_id = "";
      state.password = "";
    },
  },
});

// Action Creators
export const { loginStart, loginSuccess, loginFailure, clearLoginInfo } =
  authSlice.actions;

// Reducer の型定義
export const authReducer = authSlice.reducer;

export default authReducer;

// ThunkActionの型パラメータ：
// R: 非同期アクションが返す値の型（この場合はvoid）
// S: Reduxのステートの型
// E: 非同期アクションがディスパッチするアクションの型（この場合は任意のアクションなのでAction）
// A: 非同期アクションがディスパッチするアクションの型（この場合は任意のアクションなのでAction）
export const loginUser =
  (formData: { login_id: string; password: string }): AppThunk =>
  async (dispatch) => {
    try {
      const response = await authApi.login(formData);
      dispatch(
        loginSuccess(response as { login_id: string; password: string })
      );
      console.log(response);
      return response;
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
