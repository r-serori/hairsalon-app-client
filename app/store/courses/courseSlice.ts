import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseApi } from "../../services/courses/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (owner_id: number, { rejectWithValue }) => {
    try {
      const response: any = await courseApi.fetchAllCourses(owner_id);

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

export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (
    formData: {
      id: number;
      course_name: string;
      price: number;
      owner_id: number;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await courseApi.createCourse(formData);

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

// export const getCourseById = createAsyncThunk(
//   "course/getCourseById",
//   async (id: number, { rejectWithValue }) => {
//     const response: any = await courseApi.fetchCourseById(id);

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

export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async (
    formData: {
      id: number;
      course_name: string;
      price: number;
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await courseApi.updateCourse(formData);

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

export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await courseApi.deleteCourse(id);

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

export interface CourseState {
  // ステートの型
  id: number;
  course_name: string;
  price: number;
  owner_id: number;
}

export interface RootState {
  // ルートステートの型を定義
  course: CourseState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null; // メッセージ
  error: string | null; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  course: [],
  status: "idle",
  message: null, // メッセージ
  error: null, // エラーメッセージ
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourse.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "コースの取得に成功しました！";
      state.course = [...state.course, ...action.payload.courses];
    });
    builder.addCase(getCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createCourse.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "コースの作成に成功しました！";
      state.course = [...state.course, action.payload.course];
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    // builder.addCase(getCourseById.pending, (state) => {
    //   state.status = "success";
    //   state.message = null;
    //   state.error = null;
    // });
    // builder.addCase(getCourseById.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.course = [...state.course, action.payload.course];
    // });
    // builder.addCase(getCourseById.rejected, (state, action) => {
    //   state.status = "success";
    //   state.error = (action.payload as any).message;
    // });

    builder.addCase(updateCourse.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.course = state.course.map((course) =>
        course.id === action.payload.course.id
          ? { ...course, ...action.payload.course }
          : course
      );
      state.message = action.payload.message
        ? action.payload.message
        : "コースの更新に成功しました！";
    });
    builder.addCase(updateCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(deleteCourse.pending, (state) => {
      state.status = "success";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.course = state.course.filter(
        (course) => course.id !== Number(action.payload.deleteId)
      );

      state.message = action.payload.message
        ? action.payload.message
        : "コースの削除に成功しました！";
    });
    builder.addCase(deleteCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.course = [...state.course, ...action.payload.courses];
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.course = [...state.course, ...action.payload.courses];
    });
  },
});

const courseReducer = courseSlice.reducer;

export default courseReducer;
