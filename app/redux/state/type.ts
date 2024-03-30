import { AuthState } from '../../store/auth/authSlice'; // AuthState のインポート

export interface RootState {
  auth: AuthState;
  // 他の部分状態もここに追加する
}
