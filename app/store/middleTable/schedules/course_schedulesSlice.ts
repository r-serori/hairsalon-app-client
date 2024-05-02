import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseScheduleApi } from "../../../services/middleTable/schedules/course_schedulesApi";
import RootState from "../../../redux/reducers/rootReducer";

export const getCourse_schedules = createAsyncThunk(
  "course_schedules/getCourse_schedules",
  async () => {
    const course_schedulesData: any =
      await courseScheduleApi.fetchAllCourseSchedules();
    console.log("course_schedulesDataだよ");
    console.log(course_schedulesData.course_schedules);
    return course_schedulesData.course_schedules;
  }
);

export interface Course_schedulesState {
  // ステートの型
  id: number;
  courses_id: number;
  schedules_id: number;
}

export interface RootState {
  // RootStateの型
  course_schedules: Course_schedulesState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  course_schedules: [],
  loading: false,
  error: null,
};

const course_schedulesSlice = createSlice({
  name: "course_schedules",
  initialState,
  reducers: {
    updateCourse_schedulesInfo(
      state,
      action: PayloadAction<Course_schedulesState>
    ) {
      const updatedCourse_schedules = action.payload;
      const index = state.course_schedules.findIndex(
        (course_schedules) => course_schedules.id === updatedCourse_schedules.id
      );
      if (index !== -1) {
        state.course_schedules[index] = updatedCourse_schedules;
      }
      return state;
    },

    deleteCourse_schedulesInfo(state, action: PayloadAction<number>) {
      state.course_schedules = state.course_schedules.filter(
        (course_schedules) => course_schedules.id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourse_schedules.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCourse_schedules.fulfilled, (state, action) => {
      state.course_schedules = action.payload;
      state.loading = false;
    });
    builder.addCase(getCourse_schedules.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateCourse_schedulesInfo, deleteCourse_schedulesInfo } =
  course_schedulesSlice.actions;

const course_schedulesReducer = course_schedulesSlice.reducer;

export default course_schedulesReducer;
