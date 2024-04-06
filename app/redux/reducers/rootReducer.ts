// reducers/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../../store/auth/authLoginSlice';
import authRegisterReducer, { AuthRegisterState } from '../../store/auth/authRegisterSlice';
import authLogoutReducer, { AuthLogoutState } from '../../store/auth/authLogoutSlice';
import attendanceReducer, { AttendanceState } from '../../store/attendance/attendanceSlice';


export interface RootState {
  auth: AuthState;
  authRegister: AuthRegisterState;
  authLogout: AuthLogoutState;
  attendance: AttendanceState;

  // 他の部分状態もここに追加する
}





// 他のリデューサーをインポートする
const rootReducer = combineReducers({
  auth: authReducer,
  authRegister: authRegisterReducer,
  authLogout: authLogoutReducer,
  attendance: attendanceReducer,


  // 他のリデューサーをここに追加する
});

export default rootReducer;

// store/auth/authSlice.ts





