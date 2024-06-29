// localStorage使用時の型定義
export interface UserData {
  user_id: number;
  role: string;
}

export interface UserAllState {
  id?: number;
  name: string;
  email?: string;
  phone_number?: string;
  role: RoleState;
  isAttendance?: boolean;
}

export interface VioRoleData {
  owner_role: string;
  manager_role: string;
  staff_role: string;
}

export type RoleState = "オーナー" | "マネージャー" | "スタッフ";
