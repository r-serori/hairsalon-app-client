import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { schedulesApi } from "../../services/schedules/api";
import RootState from "../../redux/reducers/rootReducer";

export const getSchedule = createAsyncThunk(
  "schedule/getSchedule",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await schedulesApi.fetchAllSchedules();
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

export const selectGetSchedules = createAsyncThunk(
  "schedule/selectGetSchedules",
  async (formData: { year: string }, { rejectWithValue }) => {
    const response: any = await schedulesApi.selectGetSchedules(formData);
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
    const response: any = await schedulesApi.createSchedule(formData);
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

export const createCustomerSchedule = createAsyncThunk(
  "schedule/customer/createSchedule",
  async (
    formData: {
      customer_name: string;
      phone_number: string;
      remarks: string;
      courses_id: number[];
      options_id: number[];
      merchandises_id: number[];
      hairstyles_id: number[];
      attendances_id: number[];
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
      customers_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await schedulesApi.createCustomerSchedule(formData);
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

export const getScheduleById = createAsyncThunk(
  "schedule/getScheduleById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await schedulesApi.fetchScheduleById(id);
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
    const response: any = await schedulesApi.updateSchedule(formData);
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

export const updateCustomerSchedule = createAsyncThunk(
  "schedule/updateCustomerSchedule",
  async (
    formData: {
      Sid: number;
      customer_name: string;
      phone_number: string;
      remarks: string;
      courses_id: number[];
      options_id: number[];
      merchandises_id: number[];
      hairstyles_id: number[];
      attendances_id: number[];
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
      customers_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await schedulesApi.updateCustomerSchedule(formData);
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
export const updateCustomerOnlySchedule = createAsyncThunk(
  "schedule/updateCustomerOnlySchedule",
  async (
    formData: {
      customer_name: string;
      phone_number: string;
      remarks: string;
      courses_id: number[];
      options_id: number[];
      merchandises_id: number[];
      hairstyles_id: number[];
      attendances_id: number[];
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
      customers_id: number;
    },
    { rejectWithValue }
  ) => {
    const response: any = await schedulesApi.updateCustomerOnlySchedule(
      formData
    );
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

export const deleteSchedule = createAsyncThunk(
  "schedule/deleteSchedule",
  async (id: number, { rejectWithValue }) => {
    const response: any = await schedulesApi.deleteSchedule(id);
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

export interface ScheduleState {
  // ステートの型
  id: number;
  title?: string;
  start_time?: string;
  end_time?: string;
  allDay: number;
  customers_id?: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  schedule: ScheduleState[];
  loading: boolean;
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  schedule: [],
  loading: false,
  message: null,
  error: null,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSchedule.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = [...state.schedule, ...action.payload.schedules];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの取得に成功しました！";
      })
      .addCase(getSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createSchedule.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = [...state.schedule, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの作成に成功しました！";
      })
      .addCase(createSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCustomerSchedule.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(createCustomerSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = [...state.schedule, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールと顧客情報の作成に成功しました！";
      })
      .addCase(createCustomerSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getScheduleById.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(getScheduleById.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = [...state.schedule, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの取得に成功しました！";
      })
      .addCase(getScheduleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateSchedule.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = state.schedule.map((schedule) =>
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
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCustomerSchedule.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(updateCustomerSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = state.schedule.map((schedule) =>
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
      .addCase(updateCustomerSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })

      .addCase(updateCustomerOnlySchedule.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(updateCustomerOnlySchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = [...state.schedule, ...action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "顧客情報の更新とスケジュールの作成に成功しました！";
      })
      .addCase(updateCustomerOnlySchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })

      .addCase(deleteSchedule.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = state.schedule.filter(
          (schedule) => schedule.id !== Number(action.payload.deleteId)
        );
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの削除に成功しました！";
      })
      .addCase(deleteSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });

    builder.addCase(selectGetSchedules.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });

    builder.addCase(selectGetSchedules.fulfilled, (state, action) => {
      state.loading = false;
      state.schedule = [...action.payload.schedules];
      state.message = action.payload.message
        ? action.payload.message
        : "スケジュールの取得に成功しました！";
    });

    builder.addCase(selectGetSchedules.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const scheduleReducer = scheduleSlice.reducer;

export default scheduleReducer;
