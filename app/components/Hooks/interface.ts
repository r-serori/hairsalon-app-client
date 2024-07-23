// localStorage使用時の型定義

export interface ApiResponse<T> {
  status?: number;
  message: string;
  data?: T;
}

export interface deleteResponse {
  message: string;
  deleteId: number;
}

export type RoleState = "オーナー" | "マネージャー" | "スタッフ";

// エラーの型定義
export interface ErrorType {
  status: number;
  message: string;
}

export interface ScheduleModalNodes {
  id: number;
  customer_name: string;
  phone_number: string | null;
  remarks: string | null;
  course: string[] | [];
  option: string[] | [];
  merchandise: string[] | [];
  hairstyle: string[] | [];
  names: string[] | [];
}
