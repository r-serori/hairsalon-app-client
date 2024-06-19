import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseApi } from "../../services/courses/api";
import RootState from "../../redux/reducers/rootReducer";
import { getCustomer } from "../customers/customerSlice";
import { getSchedule } from "../schedules/scheduleSlice";

export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (owner_id: number, { rejectWithValue }) => {
    const response: any = await courseApi.fetchAllCourses(owner_id);
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
    const response: any = await courseApi.createCourse(formData);
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
    const response: any = await courseApi.updateCourse(formData);
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

export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id: number, { rejectWithValue }) => {
    const response: any = await courseApi.deleteCourse(id);
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

export interface CourseState {
  // ステートの型
  id: number;
  course_name: string;
  price: number;
  owner_id: number;
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
      state.message = action.payload.message
        ? action.payload.message
        : "コースの取得に成功しました！";
      state.course = [...state.course, ...action.payload.courses];
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
      state.message = action.payload.message
        ? action.payload.message
        : "コースの作成に成功しました！";
      state.course = [...state.course, action.payload.course];
    });
    builder.addCase(createCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // builder.addCase(getCourseById.pending, (state) => {
    //   state.loading = true;
    //   state.message = null;
    //   state.error = null;
    // });
    // builder.addCase(getCourseById.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.course = [...state.course, action.payload.course];
    // });
    // builder.addCase(getCourseById.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message!;
    // });

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
      state.message = action.payload.message
        ? action.payload.message
        : "コースの更新に成功しました！";
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
        (course) => course.id !== Number(action.payload.deleteId)
      );

      state.message = action.payload.message
        ? action.payload.message
        : "コースの削除に成功しました！";
    });
    builder.addCase(deleteCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
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
