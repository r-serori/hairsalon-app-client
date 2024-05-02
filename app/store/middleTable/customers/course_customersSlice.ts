import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseCustomerApi } from "../../../services/middleTable/customers/course_customersApi";
import RootState from "../../../redux/reducers/rootReducer";
import { createCourse } from "../../courses/courseSlice";

export const getCourse_customers = createAsyncThunk(
  "course_customers/getCourse_customers",
  async () => {
    const course_customersData: any =
      await courseCustomerApi.fetchAllCourseCustomers();
    console.log("course_customersDataだよ");
    console.log(course_customersData.course_customers);
    return course_customersData.course_customers;
  }
);

export interface Course_customersState {
  // ステートの型
  courses_id: number;
  customers_id: number;
}

export interface RootState {
  // RootStateの型
  course_customers: Course_customersState[];
  loading: boolean;
  error: string | null;
}

export const initialState: RootState = {
  course_customers: [],
  loading: false,
  error: null,
};

const course_customersSlice = createSlice({
  name: "course_customers",
  initialState,
  reducers: {
    updateCourse_customersInfo(
      state,
      action: PayloadAction<Course_customersState[]>
    ) {
      const newCourse_customers = action.payload;
      state.course_customers.push(...newCourse_customers);
      return state;
    },

    deleteCourse_customersInfo(state, action: PayloadAction<number>) {
      state.course_customers = state.course_customers.filter(
        (course_customers) => course_customers.customers_id !== action.payload
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourse_customers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCourse_customers.fulfilled, (state, action) => {
      state.course_customers = action.payload;
      state.loading = false;
    });
    builder.addCase(getCourse_customers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { updateCourse_customersInfo, deleteCourse_customersInfo } =
  course_customersSlice.actions;

const course_customersReducer = course_customersSlice.reducer;

export default course_customersReducer;
