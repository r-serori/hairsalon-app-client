import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerApi } from '../../services/auth/api';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';


export interface AuthRegisterState {
  // ステートの型
  login_id: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthRegisterState = {
  // 初期状態
  login_id: '',
  password: '',
  confirmPassword: '',
  loading: false,
  error: null,
};

const authRegisterSlice = createSlice({
  name: 'authRegister',
  initialState,
  reducers: {
    // リデューサー
    registerStart(state) {
      state.loading = true;
      state.error = null;
    },
     registerSuccess(state, action: PayloadAction<{ login_id: string; password: string }>) {
      state.loading = false;
      state.error = null;
      state.login_id = action.payload.login_id;
      state.password = action.payload.password;
    },
    registerFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
      // ログアウト時にログイン情報をクリアするリデューサー
    clearRegisterInfo(state) {
      state.login_id = '';
      state.password = '';
    },
  },
});

// Action Creators
export const { registerStart, registerSuccess, registerFailure,clearRegisterInfo } = authRegisterSlice.actions;

// Reducer の型定義
export const authRegisterReducer = authRegisterSlice.reducer;

export default authRegisterReducer;




// ThunkActionの型パラメータ：
// R: 非同期アクションが返す値の型（この場合はvoid）
// S: Reduxのステートの型
// E: 非同期アクションがディスパッチするアクションの型（この場合は任意のアクションなのでAction）
// A: 非同期アクションがディスパッチするアクションの型（この場合は任意のアクションなのでAction）

export const registerUser = (formData: { login_id: string, password: string, confirmPassword:string}): ThunkAction<void, AuthRegisterState, unknown, Action<string>> => async (dispatch) => {
  try {
    // console.log(formData);
    const response = await registerApi(formData);
    dispatch(registerSuccess(response));
  } catch (error: any) {
    // console.log(formData);
    console.log(error);
    dispatch(registerFailure(error.message));
  }
};





