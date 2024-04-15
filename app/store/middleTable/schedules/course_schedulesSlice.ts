import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../redux/store";
import { courseScheduleApi } from "../../../services/middleTable/schedules/course_schedulesApi";

export interface Course_schedulesState {
  // ステートの型
  courses_id: number;
  schedules_id: number;
  loading: boolean;
  error: string | null;
}

const initialState: Course_schedulesState = {
  // 初期状態
  courses_id: 0,
  schedules_id: 0,
  loading: false,
  error: null,
};

const course_schedulesSlice = createSlice({
  name: "course_schedules",
  initialState,
  reducers: {
    setCourse_id: (state, action: PayloadAction<number>) => {
      state.courses_id = action.payload;
    },
    setSchedule_id: (state, action: PayloadAction<number>) => {
      state.schedules_id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCourse_id, setSchedule_id, setLoading, setError } =
  course_schedulesSlice.actions;

export const course_schedulesReducer = course_schedulesSlice.reducer;

export default course_schedulesReducer;

// Action Creators
export const createCourse_schedules =
  (formData: { courses_id: number; schedules_id: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await courseScheduleApi.createCourseSchedule(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
