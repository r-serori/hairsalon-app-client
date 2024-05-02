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
    id: number;
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
    created_at: string;
    updated_at: string;
  }) => {
    const attendanceData: any = await attendanceApi.createAttendance(formData);
    console.log("attendanceCreateDataだよ");
    console.log(attendanceData.attendances);
  }
);

// 出席情報を取得する非同期アクション//show
export const getAttendanceById = createAsyncThunk(
  "attendance/getAttendanceById",
  async (id: number) => {
    const attendanceData: any = await attendanceApi.fetchAttendanceById(id);
    console.log("attendanceShowDataだよ");
    console.log(attendanceData.attendances);
    return attendanceData.attendances;
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
    created_at: string;
    updated_at: string;
  }) => {
    const { id, ...updateData } = formData; // idを除外する
    const attendanceData: any = await attendanceApi.updateAttendance(
      id,
      updateData
    ); // 更新データのみを渡す

    console.log("attendanceUpdateDataだよ");
    console.log(attendanceData.attendances);
  }
);

// 出席情報を削除する非同期アクション//delete
export const deleteAttendance = createAsyncThunk(
  "attendance/deleteAttendance",
  async (id: number) => {
    const attendanceData: any = await attendanceApi.deleteAttendance(id);
    console.log("attendanceDeleteDataだよ");
    console.log(attendanceData);
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
  loading: boolean; // ローディング状態
  error: string; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  attendances: [], // 出席情報の配列
  loading: false, // ローディング状態
  error: "", // エラーメッセージ
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    // ここに通常の同期アクションを定義

    updateAttendanceInfo(state, action: PayloadAction<AttendanceState>) {
      const updatedAttendance = action.payload;
      const index = state.attendances.findIndex(
        (attendance) => attendance.id === updatedAttendance.id
      );
      if (index !== -1) {
        state.attendances[index] = updatedAttendance;
      }
      return state;
    },

    updateAttendanceName(state, action: PayloadAction<AttendanceState>) {
      const updatedAttendance = action.payload;
      const index = state.attendances.findIndex(
        (attendance) => attendance.id === updatedAttendance.id
      );
      if (index !== -1) {
        state.attendances[index].attendance_name =
          updatedAttendance.attendance_name;
      }
    },

    updateAttendancePosition(state, action: PayloadAction<AttendanceState>) {
      const updatedAttendance = action.payload;
      const index = state.attendances.findIndex(
        (attendance) => attendance.id === updatedAttendance.id
      );
      if (index !== -1) {
        state.attendances[index].position = updatedAttendance.position;
      }
    },

    updateAttendancePhoneNumber(state, action: PayloadAction<AttendanceState>) {
      const updatedAttendance = action.payload;
      const index = state.attendances.findIndex(
        (attendance) => attendance.id === updatedAttendance.id
      );
      if (index !== -1) {
        state.attendances[index].phone_number = updatedAttendance.phone_number;
      }
    },

    updateAttendanceAddress(state, action: PayloadAction<AttendanceState>) {
      const updatedAttendance = action.payload;
      const index = state.attendances.findIndex(
        (attendance) => attendance.id === updatedAttendance.id
      );
      if (index !== -1) {
        state.attendances[index].address = updatedAttendance.address;
      }
    },
    deleteAttendanceInfo(state, action: PayloadAction<number>) {
      state.attendances = state.attendances.filter(
        (attendance) => attendance.id !== action.payload
      );
    },
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

export const {
  updateAttendanceInfo,
  updateAttendanceName,
  updateAttendancePosition,
  updateAttendancePhoneNumber,
  updateAttendanceAddress,
  deleteAttendanceInfo,
} = attendanceSlice.actions;

const attendanceReducer = attendanceSlice.reducer;

export default attendanceReducer;
