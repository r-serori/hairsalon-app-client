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
