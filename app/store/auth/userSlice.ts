import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../services/auth/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule, selectGetSchedules } from "../schedules/scheduleSlice";
import {
  pleaseEditEndTime,
  createStartTime,
  createEndTime,
  selectGetAttendanceTimes,
} from "../attendance_times/attendance_timesSlice";
import { isLogout } from "./isLoginSlice";
import { RoleState } from "../../components/Hooks/interface";
import { emailVerify } from "../../services/auth/emailVerify";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";

export const login = createAsyncThunk(
  "login/users",
  async (
    formData: {
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await userApi.login(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const register = createAsyncThunk(
  "register/users",
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
      const response = await userApi.register(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const staffRegister = createAsyncThunk(
  "staffRegister/users",
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
      const response = await userApi.staffRegister(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const logout = createAsyncThunk(
  "logout/users",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response = await userApi.logout();
      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const getAttendanceUsers = createAsyncThunk(
  "users/getAttendanceUser",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response = await userApi.getAttendanceUsers();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response = await userApi.getUsers();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const showUser = createAsyncThunk(
  "users/showUser",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response = await userApi.showUser();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "users/updateUserPassword",
  async (
    formData: {
      current_password: string;
      password: string;
      password_confirmation: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await userApi.updateUserPassword(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateUserPermission = createAsyncThunk(
  "users/updateUserPermission",
  async (formData: { id: number; role: string }, { rejectWithValue }) => {
    try {
      const response = await userApi.updateUserPermission(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (
    formData: {
      name: string;
      email: string;
      phone_number: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await userApi.updateUser(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "users/forgotPassword",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await userApi.forgotPassword(email);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "users/resetPassword",
  async (
    formData: {
      email: string;
      password: string;
      password_confirmation: string;
      token: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await userApi.resetPassword(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await userApi.deleteUser(id);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "users/verifyEmail",
  async (
    formData: {
      id: number;
      hash: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await emailVerify(formData);
      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface UserState {
  // ステートの型
  id: number;
  name: string;
  email: string;
  phone_number: string;
  password: string;
  role: RoleState;
  isAttendance: boolean;
}

export interface RootState {
  users: UserState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  users: [],
  status: "idle",
  message: null,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    changeMessage(state, action) {
      state.error = String(action.payload);
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
      state.users = [...state.users, action.payload.responseUser];
      state.message = action.payload.message
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
      state.users = [...state.users, action.payload.responseUser];
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
      state.users = [...state.users, action.payload.responseUser];
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
      state.users = [];
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
      state.users = action.payload.responseUsers;
      state.message = action.payload.message;
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
      state.users =
        state.users.length >= action.payload.responseUsers.length
          ? state.users
          : action.payload.responseUsers;
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
      state.users = action.payload.responseUser;
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
      state.users = state.users.map((user) =>
        user.id === action.payload.responseUser.id
          ? { ...user, ...action.payload.responseUser }
          : user
      );
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
      state.message = action.payload.message
        ? action.payload.message
        : "ユーザー情報の更新に成功しました！";
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
      state.users = state.users.filter(
        (users) => users.id !== action.payload.deleteId
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
      state.message = action.payload.message
        ? action.payload.message
        : "パスワードのリセットに成功しました！";
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload.responseUsers
        ? action.payload.responseUsers
        : state.users;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload.responseUsers
        ? action.payload.responseUsers
        : state.users;
    });

    builder.addCase(selectGetSchedules.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload.responseUsers
        ? action.payload.responseUsers
        : state.users;
    });

    builder.addCase(pleaseEditEndTime.fulfilled, (state, action) => {
      state.status = "success";
      state.users = state.users.map((users) =>
        users.id === action.payload.responseUser.id
          ? { ...users, ...action.payload.responseUser }
          : users
      );
      state.message = action.payload.message;
    });

    builder.addCase(createStartTime.fulfilled, (state, action) => {
      state.status = "success";
      state.users = state.users.map((users) =>
        users.id === action.payload.responseUser.id
          ? { ...users, ...action.payload.responseUser }
          : users
      );
      state.message = "出勤しました！";
    });

    builder.addCase(createEndTime.fulfilled, (state, action) => {
      state.status = "success";
      state.users = state.users.map((users) =>
        users.id === action.payload.responseUser.id
          ? { ...users, ...action.payload.responseUser }
          : users
      );
      state.message = "退勤しました！";
    });

    builder.addCase(isLogout, (state) => {
      state.status = "success";
      state.users = [];
      // state.error = "セッションが切れました！再度ログインしてください！";
    });

    builder.addCase(selectGetAttendanceTimes.fulfilled, (state, action) => {
      state.status = "success";
      state.users = action.payload.responseUser
        ? state.users.map((user) =>
            user.id === action.payload.responseUser.id
              ? { ...user, ...action.payload.responseUser }
              : user
          )
        : state.users;
    });

    builder.addCase(verifyEmail.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });

    builder.addCase(verifyEmail.fulfilled, (state, action) => {
      state.status = "success";
      state.message = "メールアドレスの認証が完了しました！";
    });
    builder.addCase(verifyEmail.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        "メールアドレスの認証に失敗しました！ログインからやり直してください！";
    });

    builder.addCase(forgotPassword.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });

    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
    });

    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });
  },
});

export const { clearError, changeMessage } = usersSlice.actions;

const usersReducer = usersSlice.reducer;

export default usersReducer;
