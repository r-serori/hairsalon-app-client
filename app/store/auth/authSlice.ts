import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { loginApi } from '../../services/api';
import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';


export interface AuthState {
  // ステートの型
  login_id: string;
  password: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  // 初期状態
  login_id: '',
  password: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // リデューサー
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
  },
  },
});


export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

// Reducer の型定義
export const authReducer = authSlice.reducer;

export default authReducer;


// ThunkActionの型パラメータ：
// R: 非同期アクションが返す値の型（この場合はvoid）
// S: Reduxのステートの型
// E: 非同期アクションがディスパッチするアクションの型（この場合は任意のアクションなのでAction）
// A: 非同期アクションがディスパッチするアクションの型（この場合は任意のアクションなのでAction）
export const loginUser = (formData: { login_id: string, password: string }): ThunkAction<void, AuthState, unknown, Action<string>> => async (dispatch) => {
  try {
    const response = await loginApi(formData);
    dispatch(loginSuccess());
  } catch (error: any) {
    dispatch(loginFailure(error.message));
  }
};


