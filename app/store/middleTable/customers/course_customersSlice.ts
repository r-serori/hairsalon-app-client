import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { courseCustomerApi } from "../../../services/middleTable/customers/course_customersApi";
import RootState from "../../../redux/reducers/rootReducer";
import { createCourse } from "../../courses/courseSlice";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
} from "../../customers/customerSlice";
import { getSchedule } from "../../schedules/scheduleSlice";

export const getCourse_customers = createAsyncThunk(
  "course_customers/getCourse_customers",
  async (formData: {}, { rejectWithValue }) => {
    const response: any = await courseCustomerApi.fetchAllCourseCustomers();
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomer.fulfilled, (state, action) => {
      state.course_customers = [
        ...state.course_customers,
        ...action.payload.course_customers,
      ];
    });

    builder.addCase(getSchedule.fulfilled, (state, action) => {
      state.course_customers = [
        ...state.course_customers,
        ...action.payload.course_customers,
      ];
    });

    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.course_customers = [
        ...state.course_customers.filter(
          (stateCourse_customer) =>
            !action.payload.course_customers.some(
              (payloadCourse_customer) =>
                stateCourse_customer.customers_id ===
                payloadCourse_customer.customers_id
            )
        ),
        ...action.payload.course_customers,
      ];
    });

    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      state.course_customers = [
        ...state.course_customers.filter(
          (stateCourse_customer) =>
            !action.payload.course_customers.some(
              (payloadCourse_customer) =>
                stateCourse_customer.customers_id ===
                payloadCourse_customer.customers_id
            )
        ),
        ...action.payload.course_customers,
      ];
    });
  },
});

const course_customersReducer = course_customersSlice.reducer;

export default course_customersReducer;
