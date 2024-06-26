import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { attendance_timeApi } from "../../../services/attendances/attendance_times/api";
import RootState from "../../../redux/reducers/rootReducer";
import { getAttendanceUsers } from "../../auth/authSlice";

export const selectGetAttendanceTimes = createAsyncThunk(
  "attendance_times/selectGetAttendanceTimes",
  async (
    formData: {
      user_id: number;
      yearMonth: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await attendance_timeApi.selectFetchAttendanceTimes(
        formData
      );
      console.log("responseだよ", response);

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

export const firstGetAttendanceTime = createAsyncThunk(
  "attendance_times/firstGetAttendanceTime",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await attendance_timeApi.firstGetAttendanceTime(
        id as number
      );
      console.log("responseだよ", response);
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

export const pleaseEditEndTime = createAsyncThunk(
  "attendance_times/pleaseEditEndTime",
  async (
    formData: {
      id: number;
      end_time: string;
      end_photo_path: string;
      user_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await attendance_timeApi.pleaseEditEndTime(
        formData
      );
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

export const updateStartTime = createAsyncThunk(
  "attendance_times/updateStartTime",
  async (
    formData: {
      id: number;
      start_time: string;
      start_photo_path: string;
      user_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await attendance_timeApi.updateStartTime(formData);
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

export const updateEndTime = createAsyncThunk(
  "attendance_times/updateEndTime",
  async (
    formData: {
      id: number;
      end_time: string;
      end_photo_path: string;
      user_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await attendance_timeApi.updateEndTime(formData);
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

export const createStartTime = createAsyncThunk(
  "attendance_times/createStartTime",
  async (
    formData: {
      start_time: string;
      start_photo_path: string;
      user_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await attendance_timeApi.createStartTime(formData);
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

export const createEndTime = createAsyncThunk(
  "attendance_times/createEndTime",
  async (
    formData: {
      end_time: string;
      end_photo_path: string;
      user_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await attendance_timeApi.createEndTime(formData);
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

export const deleteAttendanceTime = createAsyncThunk(
  "attendance_times/deleteAttendanceTime",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await attendance_timeApi.deleteAttendanceTime(id);
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

export interface Attendance_timeState {
  // ステートの型
  id: number;
  start_time: string | null;
  end_time: string | null;
  start_photo_path: string | null;
  end_photo_path: string | null;
  user_id: number;
}

export interface RootState {
  // ルートステートの型を定義
  attendance_times: Attendance_timeState[]; // 出席情報の配列
  status: "idle" | "loading" | "success" | "failed";
  message: string | null; // メッセージ
  error: string | null; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  attendance_times: [], // 出席情報の配列
  status: "idle",
  message: null, // メッセージ
  error: null, // エラーメッセージ
};

const attendance_timeSlice = createSlice({
  name: "attendance_time",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(selectGetAttendanceTimes.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(selectGetAttendanceTimes.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "勤怠時間と画像の取得に成功しました！";
      state.attendance_times = action.payload.attendanceTimes;
    });
    builder.addCase(selectGetAttendanceTimes.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(firstGetAttendanceTime.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });

    builder.addCase(firstGetAttendanceTime.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "最新の勤怠情報を取得しました！";
      state.attendance_times = action.payload.attendanceTime;
    });

    builder.addCase(firstGetAttendanceTime.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(pleaseEditEndTime.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });

    builder.addCase(pleaseEditEndTime.fulfilled, (state, action) => {
      state.status = "success";
      state.attendance_times = state.attendance_times.map((attendance_time) =>
        attendance_time.id === action.payload.attendanceTime.id
          ? {
              ...attendance_time,
              ...action.payload.attendanceTime,
            }
          : attendance_time
      );
      state.message = action.payload.message;
    });
    builder.addCase(pleaseEditEndTime.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateStartTime.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateStartTime.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "出勤時間と画像の更新に成功しました！";
      state.attendance_times = state.attendance_times.map((attendance_time) =>
        attendance_time.id === action.payload.attendanceTime.id
          ? {
              ...attendance_time,
              ...action.payload.attendanceTime,
            }
          : attendance_time
      );
    });
    builder.addCase(updateStartTime.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateEndTime.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateEndTime.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "退勤時間と画像の更新に成功しました！";
      state.attendance_times = state.attendance_times.map((attendance_time) =>
        attendance_time.id === action.payload.attendanceTime.id
          ? { ...attendance_time, ...action.payload.attendanceTime }
          : attendance_time
      );
    });

    builder.addCase(updateEndTime.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createStartTime.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createStartTime.fulfilled, (state, action) => {
      state.status = "success";
      state.attendance_times = [
        ...state.attendance_times,
        action.payload.attendanceTime,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "出勤時間と画像の登録に成功しました！";
    });
    builder.addCase(createStartTime.rejected, (state, action) => {
      state.status = "failed";
      state.error =
        (action.payload as any).resStatus === "error"
          ? (action.payload as any).message
          : (action.payload as any).message;
    });

    builder.addCase(createEndTime.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createEndTime.fulfilled, (state, action) => {
      state.status = "success";
      state.attendance_times = state.attendance_times.map((attendance_time) =>
        attendance_time.id === action.payload.attendanceTime.id
          ? {
              ...attendance_time,
              ...action.payload.attendanceTime,
            }
          : attendance_time
      );
      state.message = action.payload.message
        ? action.payload.message
        : "退勤時間と画像の登録に成功しました！";
    });
    builder.addCase(createEndTime.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(deleteAttendanceTime.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteAttendanceTime.fulfilled, (state, action) => {
      state.status = "success";
      state.attendance_times = state.attendance_times.filter(
        (attendance_time) =>
          attendance_time.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "勤怠情報の削除に成功しました！";
    });

    builder.addCase(deleteAttendanceTime.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getAttendanceUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message;
      state.attendance_times = [
        ...state.attendance_times,
        ...action.payload.attendanceTimes,
      ];
    });
  },
});

const attendance_timeReducer = attendance_timeSlice.reducer;

export default attendance_timeReducer;
