import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { schedulesApi } from "../../services/schedules/api";
import RootState from "../../redux/reducers/rootReducer";

export const getSchedule = createAsyncThunk(
  "schedule/getSchedule",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response: any = await schedulesApi.fetchAllSchedules(owner_id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const selectGetSchedules = createAsyncThunk(
  "schedule/selectGetSchedules",
  async (formData: { owner_id: number; year: string }, { rejectWithValue }) => {
    try {
      const response: any = await schedulesApi.selectGetSchedules(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
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
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.createSchedule(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
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
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.createCustomerAndSchedule(
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

// export const getScheduleById = createAsyncThunk(
//   "schedule/getScheduleById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await schedulesApi.fetchScheduleById(id);
//     if (response.resStatus === "error") {
//       //エラー時の処理
//       console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
//       return rejectWithValue(response);
//     } else if (response.data.resStatus === "error") {
//       //エラー時の処理
//       console.log("response.error", response.data); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
//       return rejectWithValue(response.data);
//     } else if (response.resStatus === "success") {
//       //成功時の処理
//       console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
//       return response;
//     } else if (response.data.resStatus === "success") {
//       //成功時の処理
//       console.log("response.success", response.data); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
//       return response.data;
//     }
//   }
// );

export const updateSchedule = createAsyncThunk(
  "schedule/updateSchedule",
  async (
    formData: {
      Sid: number;
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.updateSchedule(formData);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
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
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.updateCustomerAndSchedule(
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
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
      owner_id: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await schedulesApi.updateCustomerAndScheduleCreate(
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export const deleteSchedule = createAsyncThunk(
  "schedule/deleteSchedule",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await schedulesApi.deleteSchedule(id);

      if (response.status >= 200 && response.status < 300) {
        // 成功時の処理
        console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
        return response.data; // response.dataを返すことで、必要なデータのみを返す
      } else if (response.status >= 400 && response.status < 500) {
        // クライアントエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        if (
          response.status === 401 ||
          response.status === 403 ||
          response.status === 404
        ) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else if (response.status >= 500) {
        if (response.status === 500) {
          return rejectWithValue({
            status: response.status,
            message: response.data.message,
          }); // rejectWithValueでエラーメッセージを返す
        }
        // サーバーエラー時の処理
        console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
        return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
      } else {
        return rejectWithValue({ message: "予期しないエラーが発生しました" }); // 一般的なエラーメッセージを返す
      }
    } catch (err) {
      console.log("errだよ", err);
      return rejectWithValue(
        err.response
          ? err.response.data
          : { message: "予期しないエラーが発生しました" }
      );
    }
  }
);

export interface ScheduleState {
  // ステートの型
  id: number;
  title: string | null;
  start_time: string | null;
  end_time: string | null;
  allDay: number;
  customer_id: number | null;
  owner_id: number;
}

export interface RootState {
  schedule: ScheduleState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null;
  error: string | null;
}

const initialState: RootState = {
  // 初期状態
  schedule: [],
  status: "idle",
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
        state.status = "success";
        state.message = null;
        state.error = null;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedule = [...state.schedule, ...action.payload.schedules];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの取得に成功しました！";
      })
      .addCase(getSchedule.rejected, (state, action) => {
        state.status = "success";
        state.error = (action.payload as any).message;
      })
      .addCase(createSchedule.pending, (state) => {
        state.status = "success";
        state.message = null;
        state.error = null;
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedule = [...state.schedule, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールの作成に成功しました！";
      })
      .addCase(createSchedule.rejected, (state, action) => {
        state.status = "success";
        state.error = (action.payload as any).message;
      })
      .addCase(createCustomerAndSchedule.pending, (state) => {
        state.status = "success";
        state.message = null;
        state.error = null;
      })
      .addCase(createCustomerAndSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedule = [...state.schedule, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "スケジュールと顧客情報の作成に成功しました！";
      })
      .addCase(createCustomerAndSchedule.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as any).message;
      })
      // .addCase(getScheduleById.pending, (state) => {
      //   state.status = "success";
      //   state.message = null;
      //   state.error = null;
      // })
      // .addCase(getScheduleById.fulfilled, (state, action) => {
      //   state.status = "success";
      //   state.schedule = [...state.schedule, action.payload.schedule];
      //   state.message = action.payload.message
      //     ? action.payload.message
      //     : "スケジュールの取得に成功しました！";
      // })
      // .addCase(getScheduleById.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = (action.payload as any).message;;
      // })
      .addCase(updateSchedule.pending, (state) => {
        state.status = "success";
        state.message = null;
        state.error = null;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.status = "success";
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
        state.status = "failed";
        state.error = (action.payload as any).message;
      })
      .addCase(updateCustomerAndSchedule.pending, (state) => {
        state.status = "success";
        state.message = null;
        state.error = null;
      })
      .addCase(updateCustomerAndSchedule.fulfilled, (state, action) => {
        state.status = "success";
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
      .addCase(updateCustomerAndSchedule.rejected, (state, action) => {
        state.error = (action.payload as any).message;
        state.status = "failed";
      })

      .addCase(updateCustomerAndScheduleCreate.pending, (state) => {
        state.status = "success";
        state.message = null;
        state.error = null;
      })
      .addCase(updateCustomerAndScheduleCreate.fulfilled, (state, action) => {
        state.status = "success";
        state.schedule = [...state.schedule, action.payload.schedule];
        state.message = action.payload.message
          ? action.payload.message
          : "顧客情報の更新とスケジュールの作成に成功しました！";
      })
      .addCase(updateCustomerAndScheduleCreate.rejected, (state, action) => {
        state.error = (action.payload as any).message;
        state.status = "failed";
      })

      .addCase(deleteSchedule.pending, (state) => {
        state.status = "success";
        state.message = null;
        state.error = null;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.status = "success";
        state.schedule = state.schedule.filter(
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
      state.status = "success";
      state.message = null;
      state.error = null;
    });

    builder.addCase(selectGetSchedules.fulfilled, (state, action) => {
      state.status = "success";
      state.schedule = [...state.schedule, ...action.payload.schedules];
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
