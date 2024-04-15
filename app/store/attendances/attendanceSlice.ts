import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { attendanceApi } from "../../services/attendances/api";
import RootState from "../../redux/reducers/rootReducer";

// APIから出席情報を取得する非同期アクション//get
export const getAttendance = createAsyncThunk(
  "attendance/getAttendance",
  async () => {
    const attendanceData: any = await attendanceApi.fetchAllAttendances(); // APIからデータを取得
    console.log("attendanceDataだよ");
    console.log(attendanceData.attendances);
    return attendanceData.attendances;
  }
);

// 新しい出席情報を作成する非同期アクション//post,store
export const createAttendance = createAsyncThunk(
  "attendance/createAttendance",
  async (formData: {
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
  }) => {
    const response: any = await attendanceApi.createAttendance(formData);
    const attendanceData = response.data; // 取得したデータを返す
    return attendanceData;
  }
);

// 出席情報を取得する非同期アクション//show
export const getAttendanceById = createAsyncThunk(
  "attendance/getAttendanceById",
  async (id: number) => {
    const response: any = await attendanceApi.fetchAttendanceById(id);
    const attendanceData = response.data; // 取得したデータを返す

    return attendanceData;
  }
);

// 出席情報を更新する非同期アクション,put,update
export const updateAttendance = createAsyncThunk(
  "attendance/updateAttendance",
  async (formData: {
    id: number;
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
  }) => {
    const response: any = await attendanceApi.updateAttendance(
      formData.id,
      formData
    );
    const attendanceData = response.data; // 取得したデータを返す
    return attendanceData;
  }
);

// 出席情報を削除する非同期アクション//delete
export const deleteAttendance = createAsyncThunk(
  "attendance/deleteAttendance",
  async (id: number) => {
    const response: any = await attendanceApi.deleteAttendance(id);
    const attendanceData = response.data; // 取得したデータを返す
    return attendanceData;
  }
);

export interface AttendanceState {
  // ステートの型を定義
  id: number;
  attendance_name: string;
  position: string;
  phone_number: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  attendances: AttendanceState[]; // 出席情報の配列
  loading?: boolean;
  error?: string | null;
}

const initialState: RootState = {
  // 初期状態
  attendances: [], // 出席情報の配列
  loading: false,
  error: null,
};
const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    // ここに通常の同期アクションを定義
  },
  extraReducers: (builder) => {
    // 非同期アクションの処理を定義
    builder.addCase(getAttendance.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAttendance.fulfilled, (state, action) => {
      state.loading = false;
      state.attendances = action.payload;
    });
    builder.addCase(getAttendance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createAttendance.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAttendance.fulfilled, (state, action) => {
      state.loading = false;
      state.attendances.push(action.payload);
    });
    builder.addCase(createAttendance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getAttendanceById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAttendanceById.fulfilled, (state, action) => {
      state.loading = false;
      state.attendances = [action.payload];
    });
    builder.addCase(getAttendanceById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateAttendance.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateAttendance.fulfilled, (state, action) => {
      state.loading = false;
      state.attendances = state.attendances.map((attendance) =>
        attendance.id === action.payload.id ? action.payload : attendance
      );
    });
    builder.addCase(updateAttendance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteAttendance.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteAttendance.fulfilled, (state, action) => {
      state.loading = false;
      state.attendances = state.attendances.filter(
        (attendance) => attendance.id !== action.payload.id
      );
    });
    builder.addCase(deleteAttendance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default attendanceSlice.reducer;
