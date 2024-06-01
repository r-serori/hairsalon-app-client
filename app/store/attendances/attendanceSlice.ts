import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { attendanceApi } from "../../services/attendances/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

// APIから出席情報を取得する非同期アクション//get
export const getAttendance = createAsyncThunk(
  "attendance/getAttendance",
  async (formData: {}, { rejectWithValue }: any) => {
    const response: any = await attendanceApi.fetchAllAttendances();
    console.log("responseINIT", response);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

// 新しい出席情報を作成する非同期アクション//post,store
export const createAttendance = createAsyncThunk(
  "attendance/createAttendance",
  async (
    formData: {
      id: number;
      attendance_name: string;
      position: string;
      phone_number: string;
      address: string;
      isAttendance: boolean;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    const response: any = await attendanceApi.createAttendance(formData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

// 出席情報を取得する非同期アクション//show
export const getAttendanceById = createAsyncThunk(
  "attendance/getAttendanceById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await attendanceApi.fetchAttendanceById(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

// 出席情報を更新する非同期アクション,put,update
export const updateAttendance = createAsyncThunk(
  "attendance/updateAttendance",
  async (
    formData: {
      id: number;
      attendance_name: string;
      position: string;
      phone_number: string;
      address: string;
      isAttendance: boolean;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    const { id, ...updateData } = formData; // idを除外する
    const response: any = await attendanceApi.updateAttendance(id, updateData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

// 出席情報を削除する非同期アクション//delete
export const deleteAttendance = createAsyncThunk(
  "attendance/deleteAttendance",
  async (id: number, { rejectWithValue }) => {
    const response: any = await attendanceApi.deleteAttendance(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export interface AttendanceState {
  // ステートの型を定義
  id: number;
  attendance_name: string;
  position: string;
  phone_number: string;
  address: string;
  isAttendance: boolean;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  attendances: AttendanceState[]; // 出席情報の配列
  loading: boolean; // ローディング状態
  message: string | null; // メッセージ
  error: string | null; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  attendances: [], // 出席情報の配列
  loading: false, // ローディング状態
  message: null, // メッセージ
  error: null, // エラーメッセージ
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 非同期アクションの処理を定義
    builder.addCase(getAttendance.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getAttendance.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "スタッフ情報を取得しました！";
      state.attendances = action.payload.attendances;
    });
    builder.addCase(getAttendance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createAttendance.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createAttendance.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "スタッフ情報を作成しました！";
      state.attendances.push(action.payload.attendance);
    });
    builder.addCase(createAttendance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getAttendanceById.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getAttendanceById.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "スタッフ情報を取得しました！";
      state.attendances = action.payload.attendance;
    });
    builder.addCase(getAttendanceById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateAttendance.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateAttendance.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "スタッフ情報を更新しました！";
      state.attendances = state.attendances.map((attendance) =>
        attendance.id === action.payload.attendance.id
          ? { ...attendance, ...action.payload.attendance }
          : attendance
      );
    });

    builder.addCase(updateAttendance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteAttendance.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteAttendance.fulfilled, (state, action) => {
      state.loading = false;
      state.attendances = state.attendances.filter(
        (attendance) => attendance.id !== action.payload.deleteId
      );
      state.message = "スタッフ情報を削除しました！";
    });
    builder.addCase(deleteAttendance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.attendances = action.payload.attendances;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.attendances = action.payload.attendances;
    });
  },
});

const attendanceReducer = attendanceSlice.reducer;

export default attendanceReducer;
