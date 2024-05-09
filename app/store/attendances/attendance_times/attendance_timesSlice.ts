import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { attendance_timeApi } from "../../../services/attendances/attendance_times/api";
import RootState from "../../../redux/reducers/rootReducer";

export const getAttendanceTimes = createAsyncThunk(
  "attendance_times/getAttendanceTimes",
  async () => {
    const attendanceTimeData: any =
      await attendance_timeApi.fetchAllAttendanceTimes();
    console.log("attendanceTimeDataだよ");
    console.log(attendanceTimeData.attendance_times);
    return attendanceTimeData.attendance_times;
  }
);

export const createAttendanceTime = createAsyncThunk(
  "attendance_times/createAttendanceTime",
  async (formData: {
    id: number;
    date: string;
    start_time: string;
    end_time: string;
    break_time: number;
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
  date: string; // Date型からstring型に変更
  start_time: string; // Date型からstring型に変更
  end_time: string; // Date型からstring型に変更
  break_time: number;
  attendance_id: number; // 外部キー
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  attendance_times: Attendance_timeState[]; // 出席情報の配列
  loading: boolean; // ローディング状態
  error: string; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  attendance_times: [], // 出席情報の配列
  loading: false, // ローディング状態
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

    updateAttendanceTimeDate(
      state,
      action: PayloadAction<Attendance_timeState>
    ) {
      const updateAttendanceTime = action.payload;
      const index = state.attendance_times.findIndex(
        (attendance_time) => attendance_time.id === updateAttendanceTime.id
      );
      if (index !== -1) {
        state.attendance_times[index].date = updateAttendanceTime.date;
      }
    },

    updateAttendanceTimeStartTime(
      state,
      action: PayloadAction<Attendance_timeState>
    ) {
      const updateAttendanceTime = action.payload;
      const index = state.attendance_times.findIndex(
        (attendance_time) => attendance_time.id === updateAttendanceTime.id
      );
      if (index !== -1) {
        state.attendance_times[index].start_time =
          updateAttendanceTime.start_time;
      }
    },

    updateAttendanceTimeEndTime(
      state,
      action: PayloadAction<Attendance_timeState>
    ) {
      const updateAttendanceTime = action.payload;
      const index = state.attendance_times.findIndex(
        (attendance_time) => attendance_time.id === updateAttendanceTime.id
      );
      if (index !== -1) {
        state.attendance_times[index].end_time = updateAttendanceTime.end_time;
      }
    },

    updateAttendanceTimeBreakTime(
      state,
      action: PayloadAction<Attendance_timeState>
    ) {
      const updateAttendanceTime = action.payload;
      const index = state.attendance_times.findIndex(
        (attendance_time) => attendance_time.id === updateAttendanceTime.id
      );
      if (index !== -1) {
        state.attendance_times[index].break_time =
          updateAttendanceTime.break_time;
      }
    },

    updateAttendanceTimeAttendanceId(
      state,
      action: PayloadAction<Attendance_timeState>
    ) {
      const updateAttendanceTime = action.payload;
      const index = state.attendance_times.findIndex(
        (attendance_time) => attendance_time.id === updateAttendanceTime.id
      );
      if (index !== -1) {
        state.attendance_times[index].attendance_id =
          updateAttendanceTime.attendance_id;
      }
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
      state.attendance_times = action.payload;
    });
    builder.addCase(getAttendanceTimes.rejected, (state, action) => {
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

export const {
  updateAttendanceTimeInfo,
  updateAttendanceTimeDate,
  updateAttendanceTimeStartTime,
  updateAttendanceTimeEndTime,
  updateAttendanceTimeBreakTime,
  updateAttendanceTimeAttendanceId,
  deleteAttendanceTimeInfo,
} = attendance_timeSlice.actions;

const attendance_timeReducer = attendance_timeSlice.reducer;

export default attendance_timeReducer;
