import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../services/auth/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../../store/customers/customerSlice";
import {
  getSchedule,
  selectGetSchedules,
} from "../../store/schedules/scheduleSlice";
import {
  pleaseEditEndTime,
  createStartTime,
  createEndTime,
  selectGetAttendanceTimes,
} from "../attendances/attendance_times/attendance_timesSlice";
import { isLogout } from "./isLoginSlice";

export const login = createAsyncThunk(
  "login/auth",
  async (
    formData: {
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await authApi.login(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404 ||
          response.status === 419
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500 || response.status === 503) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const register = createAsyncThunk(
  "register/auth",
  async (
    formData: {
      name: string;
      email: string;
      phone_number: string;
      role: string;
      password: string;
      isAttendance: boolean;
      password_confirmation: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await authApi.register(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({
          message:
            "予期しないエラーが発生しました！既にユーザー登録がお済みの場合は、ログインボタン画面からログインしてください！",
        }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : {
              message:
                "予期しないエラーが発生しました！既にユーザー登録がお済みの場合は、ログインボタン画面からログインしてください！",
            }
      );
    }
  }
);

export const staffRegister = createAsyncThunk(
  "staffRegister/auth",
  async (
    formData: {
      name: string;
      email: string;
      phone_number: string;
      password: string;
      role: string;
      isAttendance: boolean;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await authApi.staffRegister(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const logout = createAsyncThunk(
  "logout/auth",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response = await authApi.logout();
      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404 ||
          response.status === 419
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500 || response.status === 503) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const getAttendanceUsers = createAsyncThunk(
  "auth/getAttendanceUser",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response = await authApi.getAttendanceUsers(owner_id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response = await authApi.getUsers(owner_id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const showUser = createAsyncThunk(
  "auth/showUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await authApi.showUser(id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "auth/updateUserPassword",
  async (
    formData: {
      current_password: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await authApi.updateUserPassword(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const updateUserPermission = createAsyncThunk(
  "auth/updateUserPermission",
  async (formData: { id: number; role: string }, { rejectWithValue }) => {
    try {
      const response = await authApi.updateUserPermission(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (
    formData: {
      name: string;
      email: string;
      phone_number: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await authApi.updateUser(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (formData: { password: string }, { rejectWithValue }) => {
    try {
      const response = await authApi.resetPassword(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await authApi.deleteUser(id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export interface AuthState {
  // ステートの型
  id: number;
  name: string;
  email: string;
  phone_number: string;
  password: string;
  role: string;
  isAttendance: boolean;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  auth: AuthState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  auth: [],
  status: "idle",
  message: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, action.payload.responseUser];
      state.message =
        action.payload.resStatus === "ownerError"
          ? action.payload.message
          : `お帰りなさい！ ${action.payload.responseUser.name}さん！`;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });
    builder.addCase(register.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, action.payload.responseUser];
      state.message = `登録に成功しました！ ${action.payload.responseUser.name}さん！`;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message.includes(
        "メールアドレスの値は既に存在しています。"
      )
        ? "既に登録されているメールアドレスです！登録済みの場合はホーム画面に戻り、ログインしてください！"
        : (action.payload as any).message;
    });
    builder.addCase(staffRegister.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(staffRegister.fulfilled, (state, action) => {
      state.status = "success";
      state.message = `スタッフの登録に成功しました！ ${action.payload.responseUser.name}さん！`;
      state.auth = [...state.auth, action.payload.responseUser];
    });
    builder.addCase(staffRegister.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });
    builder.addCase(logout.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [];
      state.message = "ログアウトに成功しました！";
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message.includes(
        "CSRF token mismatch"
      )
        ? "セッションが切れました！再度ログインしてください！"
        : (action.payload as any).message;
    });

    //get系
    builder.addCase(getUsers.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = action.payload.responseUsers;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getAttendanceUsers.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getAttendanceUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, ...action.payload.responseUsers];
      state.message = action.payload.message;
    });
    builder.addCase(getAttendanceUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(showUser.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(showUser.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, action.payload.responseUser];
      state.message = "ユーザー情報の取得に成功しました！";
    });
    builder.addCase(showUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    //update系
    builder.addCase(updateUserPermission.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateUserPermission.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, action.payload.responseUser];
      state.message = "ユーザー情報の更新に成功しました！";
    });
    builder.addCase(updateUserPermission.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, action.payload.responseUser];
      state.message = "ユーザー情報の更新に成功しました！";
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    //delete系
    builder.addCase(deleteUser.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = state.auth.filter(
        (auth) => auth.id !== action.payload.deleteId
      );
      state.message = "ユーザー情報の削除に成功しました！";
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateUserPassword.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateUserPassword.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, action.payload.responseUser];
      state.message = "パスワードの更新に成功しました！";
    });
    builder.addCase(updateUserPassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(resetPassword.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, action.payload.responseUser];
      state.message = "パスワードのリセットに成功しました！";
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, ...action.payload.responseUsers];
      state.message = action.payload.message;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, ...action.payload.responseUsers];
      state.message = action.payload.message;
    });

    builder.addCase(selectGetSchedules.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = [...state.auth, ...action.payload.responseUsers];
      state.message = action.payload.message;
    });

    builder.addCase(pleaseEditEndTime.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = state.auth.map((auth) =>
        auth.id === action.payload.responseUser.id
          ? { ...auth, ...action.payload.responseUser }
          : auth
      );
      state.message = action.payload.message;
    });

    builder.addCase(createStartTime.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = state.auth.map((auth) =>
        auth.id === action.payload.responseUser.id
          ? { ...auth, ...action.payload.responseUser }
          : auth
      );
      state.message = "出勤しました！";
    });

    builder.addCase(createEndTime.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = state.auth.map((auth) =>
        auth.id === action.payload.responseUser.id
          ? { ...auth, ...action.payload.responseUser }
          : auth
      );
      state.message = "退勤しました！";
    });

    builder.addCase(isLogout, (state) => {
      state.status = "success";
      state.auth = [];
      // state.error = "セッションが切れました！再度ログインしてください！";
    });

    builder.addCase(selectGetAttendanceTimes.fulfilled, (state, action) => {
      state.status = "success";
      state.auth = action.payload.responseUser
        ? state.auth.map((auth) =>
            auth.id === action.payload.responseUser.id
              ? { ...auth, ...action.payload.responseUser }
              : auth
          )
        : state.auth;

      state.message = action.payload.message;
    });
  },
});

export const { clearError } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
