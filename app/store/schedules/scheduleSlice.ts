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
    id: number;
    date: string;
    start_time: string;
    end_time: string;
    price: number;
    created_at: string;
    updated_at: string;
  }) => {
    const scheduleData: any = await schedulesApi.createSchedule(formData);
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
    id: number;
    date: string;
    start_time: string;
    end_time: string;
    price: number;
    created_at: string;
    updated_at: string;
  }) => {
    const { id, ...updateData } = formData;
    const scheduleData: any = await schedulesApi.updateSchedule(id, updateData);
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
  date: string;
  start_time: string;
  end_time: string;
  price: number;
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

    updateScheduleDate(state, action: PayloadAction<ScheduleState>) {
      const updateSchedule = action.payload;
      const index = state.schedule.findIndex(
        (schedule) => schedule.id === updateSchedule.id
      );
      if (index !== -1) {
        state.schedule[index].date = updateSchedule.date;
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

    updateSchedulePrice(state, action: PayloadAction<ScheduleState>) {
      const updateSchedule = action.payload;
      const index = state.schedule.findIndex(
        (schedule) => schedule.id === updateSchedule.id
      );
      if (index !== -1) {
        state.schedule[index].price = updateSchedule.price;
      }
      return state;
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
      .addCase(deleteSchedule.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.schedule = action.payload;
        state.loading = false;
      })
      .addCase(deleteSchedule.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const {
  updateScheduleInfo,
  updateScheduleDate,
  updateScheduleStartTime,
  updateScheduleEndTime,
  updateSchedulePrice,
} = scheduleSlice.actions;

const scheduleReducer = scheduleSlice.reducer;

export default scheduleReducer;
