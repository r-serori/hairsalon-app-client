import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { schedulesApi } from "../../services/schedules/api";
import RootState from "../../redux/reducers/rootReducer";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";

export const getSchedule = createAsyncThunk(
  "schedule/getSchedule",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await schedulesApi.fetchAllSchedules();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const selectGetSchedules = createAsyncThunk(
  "schedule/selectGetSchedules",
  async (year: string, { rejectWithValue }) => {
    try {
      const response: any = await schedulesApi.selectGetSchedules(year);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const createSchedule = createAsyncThunk(
  "schedule/createSchedule",
  async (
    formData: {
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.createSchedule(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const createCustomerAndSchedule = createAsyncThunk(
  "schedule/customer/doubleCreate",
  async (
    formData: {
      customer_name: string;
      phone_number: string | null;
      remarks: string | null;
      course_id: number[] | null;
      option_id: number[] | null;
      merchandise_id: number[] | null;
      hairstyle_id: number[] | null;
      user_id: number[] | null;
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.createCustomerAndSchedule(
        formData
      );

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateSchedule = createAsyncThunk(
  "schedule/updateSchedule",
  async (
    formData: {
      Sid: number;
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.updateSchedule(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateCustomerAndSchedule = createAsyncThunk(
  "schedule/customer/doubleUpdate",
  async (
    formData: {
      customer_id: number; // customer_id
      customer_name: string;
      phone_number: string | null;
      remarks: string | null;
      course_id: number[] | null;
      option_id: number[] | null;
      merchandise_id: number[] | null;
      hairstyle_id: number[] | null;
      user_id: number[] | null;
      Sid: number; // schedule_id
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.updateCustomerAndSchedule(
        formData
      );

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateCustomerAndScheduleCreate = createAsyncThunk(
  "schedule/customer/updateCustomerAndScheduleCreate",
  async (
    formData: {
      customer_name: string;
      phone_number: string | null;
      remarks: string | null;
      course_id: number[] | null;
      option_id: number[] | null;
      merchandise_id: number[] | null;
      hairstyle_id: number[] | null;
      user_id: number[] | null;
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
      customer_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.updateCustomerAndScheduleCreate(
        formData
      );

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const deleteSchedule = createAsyncThunk(
  "schedule/deleteSchedule",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await schedulesApi.deleteSchedule(id);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface ScheduleState {
  // ステートの型
  id: number;
  title: string | null;
  start_time: string | null;
  end_time: string | null;
  allDay: boolean;
  customer_id: number | null;
}

export interface RootState {
  schedules: ScheduleState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  schedules: [],
  status: "idle",
  message: null,
  error: null,
};

const scheduleSlice = createSlice({
  name: "schedules",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSchedule.pending, (state) => {
        state.status = "loading";
        state.message = null;
        state.error = null;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.status = "success";

        state.schedules = action.payload.schedules
          ? [...state.schedules, ...action.payload.schedules]
          : state.schedules;
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの取得に成功しました！";
      })
      .addCase(getSchedule.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as any).message;
      })
      .addCase(createSchedule.pending, (state) => {
        state.status = "loading";
        state.message = null;
        state.error = null;
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedules = [...state.schedules, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの作成に成功しました！";
      })
      .addCase(createSchedule.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as any).message;
      })
      .addCase(createCustomerAndSchedule.pending, (state) => {
        state.status = "loading";
        state.message = null;
        state.error = null;
      })
      .addCase(createCustomerAndSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedules = [...state.schedules, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールと顧客情報の作成に成功しました！";
      })
      .addCase(createCustomerAndSchedule.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as any).message;
      })

      .addCase(updateSchedule.pending, (state) => {
        state.status = "failed";
        state.message = null;
        state.error = null;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedules = state.schedules.map((schedule) =>
          schedule.id === action.payload.schedule.id
            ? {
                ...schedule,
                ...action.payload.schedule,
              }
            : schedule
        );
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの更新に成功しました！";
      })
      .addCase(updateSchedule.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as any).message;
      })
      .addCase(updateCustomerAndSchedule.pending, (state) => {
        state.status = "failed";
        state.message = null;
        state.error = null;
      })
      .addCase(updateCustomerAndSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedules = state.schedules.map((schedule) =>
          schedule.id === action.payload.schedule.id
            ? {
                ...schedule,
                ...action.payload.schedule,
              }
            : schedule
        );
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールと顧客情報の更新に成功しました！";
      })
      .addCase(updateCustomerAndSchedule.rejected, (state, action) => {
        state.error = (action.payload as any).message;
        state.status = "failed";
      })

      .addCase(updateCustomerAndScheduleCreate.pending, (state) => {
        state.status = "loading";
        state.message = null;
        state.error = null;
      })
      .addCase(updateCustomerAndScheduleCreate.fulfilled, (state, action) => {
        state.status = "success";
        state.schedules = [...state.schedules, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "顧客情報の更新とスケジュールの作成に成功しました！";
      })
      .addCase(updateCustomerAndScheduleCreate.rejected, (state, action) => {
        state.error = (action.payload as any).message;
        state.status = "failed";
      })

      .addCase(deleteSchedule.pending, (state) => {
        state.status = "loading";
        state.message = null;
        state.error = null;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedules = state.schedules.filter(
          (schedule) => schedule.id !== Number(action.payload.deleteId)
        );
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの削除に成功しました！";
      })
      .addCase(deleteSchedule.rejected, (state, action) => {
        state.error = (action.payload as any).message;
        state.status = "failed";
      });

    builder.addCase(selectGetSchedules.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });

    builder.addCase(selectGetSchedules.fulfilled, (state, action) => {
      state.status = "success";
      state.schedules = [...state.schedules, ...action.payload.schedules];
      state.message = action.payload.message
        ? action.payload.message
        : "スケジュールの取得に成功しました！";
    });

    builder.addCase(selectGetSchedules.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });
  },
});

const scheduleReducer = scheduleSlice.reducer;

export default scheduleReducer;
