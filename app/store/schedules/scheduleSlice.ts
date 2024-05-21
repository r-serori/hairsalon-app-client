import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { schedulesApi } from "../../services/schedules/api";
import RootState from "../../redux/reducers/rootReducer";

export const getSchedule = createAsyncThunk(
  "schedule/getSchedule",
  async () => {
    const scheduleData: any = await schedulesApi.fetchAllSchedules();
    console.log("scheduleDataだよ");
    console.log(scheduleData.schedules);
    return scheduleData.schedules;
  }
);

export const createSchedule = createAsyncThunk(
  "schedule/createSchedule",
  async (formData: {
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    customers_id: number;
  }) => {
    const scheduleData: any = await schedulesApi.createSchedule(formData);
    console.log("scheduleCreateDataだよ");
    console.log(scheduleData.schedules);
  }
);

export const createCustomerSchedule = createAsyncThunk(
  "schedule/customer/createSchedule",
  async (formData: {
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
  }) => {
    const scheduleData: any = await schedulesApi.createCustomerSchedule(
      formData
    );
    console.log("scheduleCreateDataだよ");
    console.log(scheduleData.schedules);
  }
);

export const getScheduleById = createAsyncThunk(
  "schedule/getScheduleById",
  async (id: number) => {
    const scheduleData: any = await schedulesApi.fetchScheduleById(id);
    console.log("scheduleShowDataだよ");
    console.log(scheduleData.schedules);
    return scheduleData.schedules;
  }
);

export const updateSchedule = createAsyncThunk(
  "schedule/updateSchedule",
  async (formData: {
    Sid: number;
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
  }) => {
    const scheduleData: any = await schedulesApi.updateSchedule(formData);
    console.log("scheduleUpdateDataだよ");
    console.log(scheduleData.schedules);
  }
);

export const updateCustomerSchedule = createAsyncThunk(
  "schedule/updateCustomerSchedule",
  async (formData: {
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
  }) => {
    const scheduleData: any = await schedulesApi.updateCustomerSchedule(
      formData
    );
    console.log("scheduleUpdateDataだよ");
    console.log(scheduleData.schedules);
  }
);

export const deleteSchedule = createAsyncThunk(
  "schedule/deleteSchedule",
  async (id: number) => {
    const scheduleData: any = await schedulesApi.deleteSchedule(id);
    console.log("scheduleDeleteDataだよ");
    console.log(scheduleData.schedules);
    return scheduleData.schedules;
  }
);

export interface ScheduleState {
  // ステートの型
  id: number;
  title: string;
  start_time: string;
  end_time: string;
  allDay: number;
  customers_id: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  schedule: ScheduleState[];
  loading: boolean;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  schedule: [],
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    updateScheduleInfo(state, action: PayloadAction<ScheduleState>) {
      const updateSchedule = action.payload;
      const index = state.schedule.findIndex(
        (schedule) => schedule.id === updateSchedule.id
      );
      if (index !== -1) {
        state.schedule[index] = updateSchedule;
      }
      return state;
    },

    updateScheduleStartTime(state, action: PayloadAction<ScheduleState>) {
      const updateSchedule = action.payload;
      const index = state.schedule.findIndex(
        (schedule) => schedule.id === updateSchedule.id
      );
      if (index !== -1) {
        state.schedule[index].start_time = updateSchedule.start_time;
      }
      return state;
    },

    updateScheduleEndTime(state, action: PayloadAction<ScheduleState>) {
      const updateSchedule = action.payload;
      const index = state.schedule.findIndex(
        (schedule) => schedule.id === updateSchedule.id
      );
      if (index !== -1) {
        state.schedule[index].end_time = updateSchedule.end_time;
      }
      return state;
    },

    deleteScheduleInfo(state, action: PayloadAction<number>) {
      state.schedule = state.schedule.filter(
        (schedule) => schedule.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.schedule = action.payload;
        state.loading = false;
      })
      .addCase(getSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createCustomerSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCustomerSchedule.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createCustomerSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getScheduleById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getScheduleById.fulfilled, (state, action) => {
        state.schedule = action.payload;
        state.loading = false;
      })
      .addCase(getScheduleById.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateCustomerSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCustomerSchedule.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateCustomerSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })

      .addCase(deleteSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.schedule = state.schedule.filter(
          (schedule) => schedule.id !== action.payload
        );
      })
      .addCase(deleteSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const {
  updateScheduleInfo,
  updateScheduleStartTime,
  updateScheduleEndTime,
  deleteScheduleInfo,
} = scheduleSlice.actions;

const scheduleReducer = scheduleSlice.reducer;

export default scheduleReducer;
