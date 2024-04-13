// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { logoutApi } from '../../services/auth/api';
import { clearLoginInfo } from './authLoginSlice';
import { clearRegisterInfo } from './authRegisterSlice';
import { AppThunk } from '../../redux/store';

export interface AuthLogoutState {
  // ステートの型
  isAuthenticated: boolean;
}

const initialState: AuthLogoutState = {
  // 初期状態
  isAuthenticated: false,
};


const authLogoutSlice = createSlice({
  name: 'authLogout',
  initialState,
  reducers: {
    isLogin: (state) => {
      state.isAuthenticated = true;
    },
    isLogout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { isLogin, isLogout } = authLogoutSlice.actions;

export const authLogoutReducer = authLogoutSlice.reducer;

export default authLogoutReducer;


export const logoutUser = (): AppThunk=> async (dispatch) => {
  try {
    const response = await logoutApi();
    dispatch(isLogout());
    dispatch(clearLoginInfo());
    dispatch(clearRegisterInfo());

  } catch (error) {
    console.error(error);
    
  }
}
