// reducers/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../../store/auth/authLoginSlice';
import authRegisterReducer, { AuthRegisterState } from '../../store/auth/authRegisterSlice';
import authLogoutReducer,{ AuthLogoutState } from '../../store/auth/authLogoutSlice';


export interface RootState {
  auth: AuthState;
  authRegister: AuthRegisterState;
  authLogout: AuthLogoutState;
  // 他の部分状態もここに追加する
}





// 他のリデューサーをインポートする
const rootReducer = combineReducers({
  auth: authReducer,
  authRegister: authRegisterReducer,
  authLogout: authLogoutReducer,


  // 他のリデューサーをここに追加する
});

export default rootReducer;

// store/auth/authSlice.ts





