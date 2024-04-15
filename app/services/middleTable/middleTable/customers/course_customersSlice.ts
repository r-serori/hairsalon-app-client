import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../../../redux/store";
import { courseCustomerApi } from "../../customers/course_customersApi";

export interface Course_customersState {
  // ステートの型
  courses_id: number;
  customers_id: number;
  loading: boolean;
  error: string | null;
}

const initialState: Course_customersState = {
  // 初期状態
  courses_id: 0,
  customers_id: 0,
  loading: false,
  error: null,
};

const course_customersSlice = createSlice({
  name: "course_customers",
  initialState,
  reducers: {
    setCourse_id: (state, action: PayloadAction<number>) => {
      state.courses_id = action.payload;
    },
    setCustomer_id: (state, action: PayloadAction<number>) => {
      state.customers_id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCourse_id, setCustomer_id, setLoading, setError } =
  course_customersSlice.actions;

export const course_customersReducer = course_customersSlice.reducer;

export default course_customersReducer;

// Action Creators
export const createCourse_customers =
  (formData: { courses_id: number; customers_id: number }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await courseCustomerApi.createCourseCustomer(formData);
      dispatch(setLoading(false));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
