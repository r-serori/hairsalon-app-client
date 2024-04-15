import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courseApi } from "../../services/courses/api";
import { AppThunk } from "../../redux/store";

export interface CourseState {
  // ステートの型
  id: number;
  course_name: string;
  price: number;
  created_at: string;
  updated_at: string;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  // 初期状態
  id: 0,
  course_name: "",
  price: 0,
  created_at: "",
  updated_at: "",
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseName: (state, action: PayloadAction<string>) => {
      state.course_name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCourseName, setPrice, setLoading, setError } =
  courseSlice.actions;

export const courseReducer = courseSlice.reducer;

export default courseReducer;

// Action Creators
export const createCourse =
  (formData: { id: number; course_name: string; price: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await courseApi.createCourse(formData);
      dispatch(setLoading(false));
      console.log("Course created", response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
