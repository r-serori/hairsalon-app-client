// localStorage使用時の型定義

export interface UserAllState {
  id?: number;
  name: string;
  email?: string;
  phone_number?: string;
  role: RoleState;
  isAttendance?: boolean;
}

export type RoleState = "オーナー" | "マネージャー" | "スタッフ";
