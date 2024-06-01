import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { attendance_timeApi } from "../../../services/attendances/attendance_times/api";
import RootState from "../../../redux/reducers/rootReducer";
import { AttendanceState } from "../attendanceSlice";

export const selectGetAttendanceTimes = createAsyncThunk(
  "attendance_times/selectGetAttendanceTimes",
  async (attendance_id: number, { rejectWithValue }) => {
    const response: any = await attendance_timeApi.selectFetchAttendanceTimes(
      attendance_id
    );
    console.log("responseだよ", response);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
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
      attendance_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await attendance_timeApi.updateStartTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
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
      attendance_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await attendance_timeApi.updateEndTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export const createStartTime = createAsyncThunk(
  "attendance_times/createStartTime",
  async (
    formData: {
      start_time: string;
      start_photo_path: string;
      attendance_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await attendance_timeApi.createStartTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export const createEndTime = createAsyncThunk(
  "attendance_times/createEndTime",
  async (
    formData: {
      end_time: string;
      end_photo_path: string;
      attendance_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await attendance_timeApi.createEndTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export const deleteAttendanceTime = createAsyncThunk(
  "attendance_times/deleteAttendanceTime",
  async (id: number, { rejectWithValue }) => {
    const response: any = await attendance_timeApi.deleteAttendanceTime(id);
    console.log("responseだよ", response);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export interface Attendance_timeState {
  // ステートの型
  id: number;
  start_time: string;
  end_time: string;
  start_photo_path: string;
  end_photo_path: string;
  attendance_id: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  attendance_times: Attendance_timeState[]; // 出席情報の配列
  loading: boolean; // ローディング状態
  message: string | null; // メッセージ
  error: string | null; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  attendance_times: [], // 出席情報の配列
  loading: false, // ローディング状態
  message: null, // メッセージ
  error: null, // エラーメッセージ
};

const attendance_timeSlice = createSlice({
  name: "attendance_time",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(selectGetAttendanceTimes.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(selectGetAttendanceTimes.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "勤怠時間と画像の取得に成功しました！";
      state.attendance_times = [
        ...state.attendance_times,
        ...action.payload.attendance_times,
      ];
    });
    builder.addCase(selectGetAttendanceTimes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateStartTime.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateStartTime.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "出勤時間と画像の更新に成功しました！";
      state.attendance_times = state.attendance_times.map((attendance_time) =>
        attendance_time.id === action.payload.attendance_time.id
          ? { ...attendance_time, ...action.payload.attendance_time }
          : attendance_time
      );
    });
    builder.addCase(updateStartTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateEndTime.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateEndTime.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "退勤時間と画像の更新に成功しました！";
      state.attendance_times = state.attendance_times.map((attendance_time) =>
        attendance_time.id === action.payload.attendance_time.id
          ? { ...attendance_time, ...action.payload.attendance_time }
          : attendance_time
      );
    });

    builder.addCase(updateEndTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createStartTime.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createStartTime.fulfilled, (state, action) => {
      state.loading = false;
      state.attendance_times = [
        ...state.attendance_times,
        action.payload.attendance_time,
      ];
      state.message = "出勤時間と画像の登録に成功しました！";
    });
    builder.addCase(createStartTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createEndTime.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createEndTime.fulfilled, (state, action) => {
      state.loading = false;
      state.attendance_times = state.attendance_times.map((attendance_time) =>
        attendance_time.id === action.payload.attendance_time.id
          ? { ...attendance_time, ...action.payload.attendance_time }
          : attendance_time
      );
      state.message = "退勤時間と画像の登録に成功しました！";
    });
    builder.addCase(createEndTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteAttendanceTime.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteAttendanceTime.fulfilled, (state, action) => {
      state.loading = false;
      state.attendance_times = state.attendance_times.filter(
        (attendance_time) => attendance_time.id !== action.payload.deleteId
      );
      state.message = "勤怠情報の削除に成功しました！";
    });

    builder.addCase(deleteAttendanceTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const attendance_timeReducer = attendance_timeSlice.reducer;

export default attendance_timeReducer;
