import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseApi } from "../../services/courses/api";
import RootState from "../../redux/reducers/rootReducer";

export const getCourse = createAsyncThunk("course/getCourse", async () => {
  const courseData: any = await courseApi.fetchAllCourses();
  console.log("courseDataだよ");
  console.log(courseData.courses);
  return courseData.courses;
});

export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (formData: {
    id: number;
    course_name: string;
    price: number;
    created_at: string;
    updated_at: string;
  }) => {
    const courseData: any = await courseApi.createCourse(formData);
    console.log("courseCreateDataだよ");
    console.log(courseData.courses);
    return courseData.courses;
  }
);

export const getCourseById = createAsyncThunk(
  "course/getCourseById",
  async (id: number) => {
    const courseData: any = await courseApi.fetchCourseById(id);
    console.log("courseShowDataだよ");
    console.log(courseData.courses);
    return courseData.courses;
  }
);

export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async (formData: {
    id: number;
    course_name: string;
    price: number;
    created_at: string;
    updated_at: string;
  }) => {
    const { id, ...updateData } = formData;
    const courseData: any = await courseApi.updateCourse(id, updateData);
    console.log("courseUpdateDataだよ");
    console.log(courseData.courses);
    return courseData.courses;
  }
);

export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id: number) => {
    const courseData: any = await courseApi.deleteCourse(id);
    console.log("courseDeleteDataだよ");
    console.log(courseData.courses);
    return courseData.courses;
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
  error: string; // エラーメッセージ
}

const initialState: RootState = {
  // 初期状態
  course: [],
  loading: false, // ローディング状態
  error: "", // エラーメッセージ
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateCourseInfo(state, action: PayloadAction<CourseState>) {
      const updateCourse = action.payload;
      const index = state.course.findIndex(
        (course) => course.id === updateCourse.id
      );
      if (index !== -1) {
        state.course[index] = updateCourse;
      }
      return state;
    },

    updateCourseName(state, action: PayloadAction<CourseState>) {
      const updateCourse = action.payload;
      const index = state.course.findIndex(
        (course) => course.id === updateCourse.id
      );
      if (index !== -1) {
        state.course[index].course_name = updateCourse.course_name;
      }
      return state;
    },

    updateCoursePrice(state, action: PayloadAction<CourseState>) {
      const updateCourse = action.payload;
      const index = state.course.findIndex(
        (course) => course.id === updateCourse.id
      );
      if (index !== -1) {
        state.course[index].price = updateCourse.price;
      }
      return state;
    },

    deleteCourseInfo(state, action: PayloadAction<number>) {
      state.course = state.course.filter(
        (course) => course.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.course = action.payload;
    });
    builder.addCase(getCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(createCourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.course = action.payload;
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(getCourseById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCourseById.fulfilled, (state, action) => {
      state.loading = false;
      state.course = action.payload;
    });
    builder.addCase(getCourseById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(updateCourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.course = action.payload;
    });
    builder.addCase(updateCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });

    builder.addCase(deleteCourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.course = action.payload;
    });
    builder.addCase(deleteCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export const {
  updateCourseInfo,
  updateCourseName,
  updateCoursePrice,
  deleteCourseInfo,
} = courseSlice.actions;

const courseReducer = courseSlice.reducer;

export default courseReducer;
