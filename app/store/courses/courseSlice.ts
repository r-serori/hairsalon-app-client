import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseApi } from "../../services/courses/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";
import { handleErrorResponse, handleCatchError } from "../errorHamdler";

export const getCourse = createAsyncThunk(
  "courses/getCourse",
  async (formData: {}, { rejectWithValue }) => {
    try {
      const response: any = await courseApi.fetchAllCourses();

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (
    formData: {
      id: number;
      course_name: string;
      price: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await courseApi.createCourse(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async (
    formData: {
      id: number;
      course_name: string;
      price: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response: any = await courseApi.updateCourse(formData);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (id: number, { rejectWithValue }) => {
    try {
      const response: any = await courseApi.deleteCourse(id);

      return handleErrorResponse(response, rejectWithValue);
    } catch (err) {
      return handleCatchError(err, rejectWithValue);
    }
  }
);

export interface CourseState {
  // ステートの型
  id: number;
  course_name: string;
  price: number;
}

export interface RootState {
  // ルートステートの型を定義
  courses: CourseState[];
  status: "idle" | "loading" | "success" | "failed";
  message: string | null; // メッセージ
  error: string | null; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  courses: [],
  status: "idle",
  message: null, // メッセージ
  error: null, // エラーメッセージ
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourse.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(getCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "コースの取得に成功しました！";
      state.courses = [...state.courses, ...action.payload.courses];
    });
    builder.addCase(getCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(createCourse.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.message = action.payload.message
        ? action.payload.message
        : "コースの作成に成功しました！";
      state.courses = [...state.courses, action.payload.course];
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as any).message;
    });

    builder.addCase(updateCourse.pending, (state) => {
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.courses = state.courses.map((course) =>
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
      state.status = "loading";
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.status = "success";
      state.courses = state.courses.filter(
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
      state.status = "success";
      state.courses = action.payload.courses
        ? state.courses.length === action.payload.courses.length
          ? state.courses
          : action.payload.courses
        : state.courses;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.status = "success";
      state.courses = action.payload.courses
        ? state.courses.length === action.payload.courses.length
          ? state.courses
          : action.payload.courses
        : state.courses;
    });
  },
});

const courseReducer = courseSlice.reducer;

export default courseReducer;
