import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { attendance_timeApi } from "../../../services/attendances/attendance_times/api";
import RootState from "../../../redux/reducers/rootReducer";

export const selectGetAttendanceTimes = createAsyncThunk(
  "attendance_times/selectGetAttendanceTimes",
  async (
    formData: {
      user_id: number;
      yearMonth: string;
    },
    { rejectWithValue }
  ) => {
    const response: any = await attendance_timeApi.selectFetchAttendanceTimes(
      formData
    );
    console.log("responseだよ", response);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
    }
  }
);

export const firstGetAttendanceTime = createAsyncThunk(
  "attendance_times/firstGetAttendanceTime",
  async (id: number, { rejectWithValue }) => {
    const response: any = await attendance_timeApi.firstGetAttendanceTime(
      id as number
    );
    console.log("responseだよ", response);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
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
    const response: any = await attendance_timeApi.pleaseEditEndTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
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
    const response: any = await attendance_timeApi.updateStartTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
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
    const response: any = await attendance_timeApi.updateEndTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
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
    const response: any = await attendance_timeApi.createStartTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
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
    const response: any = await attendance_timeApi.createEndTime(formData);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
    }
  }
);

export const deleteAttendanceTime = createAsyncThunk(
  "attendance_times/deleteAttendanceTime",
  async (id: number, { rejectWithValue }) => {
    const response: any = await attendance_timeApi.deleteAttendanceTime(id);
    if (response.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.data.resStatus === "error") {
      //エラー時の処理
      console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response.data);
    } else if (response.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    } else if (response.data.resStatus === "success") {
      //成功時の処理
      console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response.data;
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
  user_id: number;
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
      state.message = action.payload.message
        ? action.payload.message
        : "勤怠時間と画像の取得に成功しました！";
      state.attendance_times = action.payload.attendanceTimes;
    });
    builder.addCase(selectGetAttendanceTimes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(firstGetAttendanceTime.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });

    builder.addCase(firstGetAttendanceTime.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message
        ? action.payload.message
        : "最新の勤怠情報を取得しました！";
      state.attendance_times = action.payload.attendanceTime;
    });

    builder.addCase(firstGetAttendanceTime.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as any).resStatus === "error"
          ? (action.payload as any).message
          : action.error.message;
    });

    builder.addCase(pleaseEditEndTime.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });

    builder.addCase(pleaseEditEndTime.fulfilled, (state, action) => {
      state.loading = false;
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
        action.payload.attendanceTime,
      ];
      state.message = action.payload.message
        ? action.payload.message
        : "出勤時間と画像の登録に成功しました！";
    });
    builder.addCase(createStartTime.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as any).resStatus === "error"
          ? (action.payload as any).message
          : action.error.message;
    });

    builder.addCase(createEndTime.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createEndTime.fulfilled, (state, action) => {
      state.loading = false;
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
        (attendance_time) =>
          attendance_time.id !== Number(action.payload.deleteId)
      );
      state.message = action.payload.message
        ? action.payload.message
        : "勤怠情報の削除に成功しました！";
    });

    builder.addCase(deleteAttendanceTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const attendance_timeReducer = attendance_timeSlice.reducer;

export default attendance_timeReducer;
