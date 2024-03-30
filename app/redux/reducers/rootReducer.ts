// reducers/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../../store/auth/authSlice';
import { RootState } from '../state/type';
// 他のリデューサーをインポートする

const rootReducer = combineReducers({
  auth: authReducer,
  // 他のリデューサーをここに追加する
});

export default rootReducer;
