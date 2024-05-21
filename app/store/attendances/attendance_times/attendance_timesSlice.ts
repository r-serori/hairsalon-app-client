import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { attendance_timeApi } from "../../../services/attendances/attendance_times/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getAttendanceTimes = createAsyncThunk(
  "attendance_times/getAttendanceTimes",
  async (attendance_id: number, { rejectWithValue }) => {
    const response: any = await attendance_timeApi.fetchAllAttendanceTimes(
      attendance_id
    );
    console.log("responseだよ", response);
    if (response.status === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.status === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export const selectGetAttendanceTimes = createAsyncThunk(
  "attendance_times/selectGetAttendanceTimes",
  async (attendance_id: number, { rejectWithValue }) => {
    const response: any = await attendance_timeApi.selectFetchAttendanceTimes(
      attendance_id
    );
    console.log("responseだよ", response);
    if (response.status === "error") {
      //エラー時の処理
      console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
      return rejectWithValue(response);
    } else if (response.status === "success") {
      //成功時の処理
      console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
      return response;
    }
  }
);

export const createAttendanceTime = createAsyncThunk(
  "attendance_times/createAttendanceTime",
  async (formData: {
    id: number;
    start_time: string;
    end_time: string;
    start_photo_path: string;
    end_photo_path: string;
    attendance_id: number;
  }) => {
    const attendanceTimeData: any =
      await attendance_timeApi.createAttendanceTimes(formData);
    console.log("attendanceTimeCreateDataだよ");
    console.log(attendanceTimeData.attendance_times);
  }
);

export const getAttendanceTimeById = createAsyncThunk(
  "attendance_times/getAttendanceTimeById",
  async (id: number) => {
    const attendanceTimeData: any =
      await attendance_timeApi.fetchAttendanceTimesById(id);
    console.log("attendanceTimeShowDataだよ");
    console.log(attendanceTimeData.attendance_times);
    return attendanceTimeData.attendance_times;
  }
);

export const updateAttendanceTime = createAsyncThunk(
  "attendance_times/updateAttendanceTime",
  async (formData: {
    id: number;
    date: string;
    start_time: string;
    end_time: string;
    break_time: number;
    attendance_id: number;
  }) => {
    const { id, ...updateData } = formData;
    const attendanceTimeData: any =
      await attendance_timeApi.updateAttendanceTimes(id, updateData);
    console.log("attendanceTimeUpdateDataだよ");
    console.log(attendanceTimeData.attendance_times);
  }
);

export const createStartTime = createAsyncThunk(
  "attendance_times/createStartTime",
  async (formData: {
    start_time: string;
    start_photo_path: string;
    attendance_id: number;
  }) => {
    const attendanceTimeData: any = await attendance_timeApi.createStartTime(
      formData
    );
    console.log("attendanceTimeCreateDataだよ");
    console.log(attendanceTimeData.attendance_times);
  }
);

export const createEndTime = createAsyncThunk(
  "attendance_times/createEndTime",
  async (formData: {
    end_time: string;
    end_photo_path: string;
    attendance_id: number;
  }) => {
    const attendanceTimeData: any = await attendance_timeApi.createEndTime(
      formData
    );
    console.log("attendanceTimeCreateDataだよ");
    console.log(attendanceTimeData.attendance_times);
  }
);

export const deleteAttendanceTime = createAsyncThunk(
  "attendance_times/deleteAttendanceTime",
  async (id: number) => {
    const attendanceTimeData: any =
      await attendance_timeApi.deleteAttendanceTimes(id);
    console.log("attendanceTimeDeleteDataだよ");
    console.log(attendanceTimeData.attendance_times);
    return attendanceTimeData.attendance_times;
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
  message: string; // メッセージ
  error: string; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  attendance_times: [], // 出席情報の配列
  loading: false, // ローディング状態
  message: "", // メッセージ
  error: "", // エラーメッセージ
};

const attendance_timeSlice = createSlice({
  name: "attendance_time",
  initialState,
  reducers: {
    // ここにreducerを記述する

    updateAttendanceTimeInfo(
      state,
      action: PayloadAction<Attendance_timeState>
    ) {
      const updateAttendanceTime = action.payload;
      const index = state.attendance_times.findIndex(
        (attendance_time) => attendance_time.id === updateAttendanceTime.id
      );
      if (index !== -1) {
        state.attendance_times[index] = updateAttendanceTime;
      }
      return state;
    },

    deleteAttendanceTimeInfo(state, action: PayloadAction<number>) {
      state.attendance_times = state.attendance_times.filter(
        (attendance_time) => attendance_time.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAttendanceTimes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAttendanceTimes.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.attendance_times = action.payload.attendanceTimes;
    });
    builder.addCase(getAttendanceTimes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(selectGetAttendanceTimes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(selectGetAttendanceTimes.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.attendance_times = action.payload.attendanceTimes;
    });
    builder.addCase(selectGetAttendanceTimes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createAttendanceTime.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAttendanceTime.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createAttendanceTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getAttendanceTimeById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAttendanceTimeById.fulfilled, (state, action) => {
      state.loading = false;
      state.attendance_times = action.payload;
    });
    builder.addCase(getAttendanceTimeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateAttendanceTime.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateAttendanceTime.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateAttendanceTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createStartTime.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createStartTime.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createStartTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createEndTime.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createEndTime.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createEndTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteAttendanceTime.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteAttendanceTime.fulfilled, (state, action) => {
      state.loading = false;
      state.attendance_times = state.attendance_times.filter(
        (attendance_time) => attendance_time.id !== action.payload
      );
    });
    builder.addCase(deleteAttendanceTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateAttendanceTimeInfo, deleteAttendanceTimeInfo } =
  attendance_timeSlice.actions;

const attendance_timeReducer = attendance_timeSlice.reducer;

export default attendance_timeReducer;
