import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseApi } from "../../services/courses/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await courseApi.fetchAllCourses();
    console.log("courseDataだよ");
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
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
      created_at: string;
      updated_at: string;
    },
    { rejectWithValue }
  ) => {
    const response: any = await courseApi.createCourse(formData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const getCourseById = createAsyncThunk(
  "course/getCourseById",
  async (id: number, { rejectWithValue }) => {
    const response: any = await courseApi.fetchCourseById(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

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
    const { id, ...updateData } = formData;
    const response: any = await courseApi.updateCourse(id, updateData);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    } else if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id: number, { rejectWithValue }) => {
    const response: any = await courseApi.deleteCourse(id);
    if (response.resStatus === "error") {
      console.log("response.error", response);
      return rejectWithValue(response);
    }
    if (response.resStatus === "success") {
      console.log("response.success", response);
      return response;
    }
  }
);

export interface CourseState {
  // ステートの型
  id: number;
  course_name: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface RootState {
  // ルートステートの型を定義
  course: CourseState[];
  loading: boolean; // ローディング状態
  message: string | null; // メッセージ
  error: string | null; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  course: [],
  loading: false, // ローディング状態
  message: null, // メッセージ
  error: null, // エラーメッセージ
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourse.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "コースの取得に成功しました！";
      state.course = action.payload.courses;
    });
    builder.addCase(getCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(createCourse.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "コースの作成に成功しました！";
      state.course.push(action.payload.course);
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getCourseById.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(getCourseById.fulfilled, (state, action) => {
      state.loading = false;
      state.course = action.payload.course;
    });
    builder.addCase(getCourseById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(updateCourse.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(updateCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.course = state.course.map((course) =>
        course.id === action.payload.course.id
          ? { ...course, ...action.payload.course }
          : course
      );
      state.message = "コースの更新に成功しました！";
    });
    builder.addCase(updateCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteCourse.pending, (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    });
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.course = state.course.filter(
        (course) => course.id !== action.payload.deleteId
      );
      state.message = "コースの削除に成功しました！";
    });
    builder.addCase(deleteCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.course = action.payload.courses;
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.course = action.payload.courses;
    });
  },
});

const courseReducer = courseSlice.reducer;

export default courseReducer;
