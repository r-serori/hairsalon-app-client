// reducers/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import { AuthState } from "../../store/auth/authSlice";
import attendanceReducer, {
  AttendanceState,
} from "../../store/attendances/attendanceSlice";
import attendance_timeReducer, {
  Attendance_timeState,
} from "../../store/attendances/attendance_times/attendance_timesSlice";
import courseReducer, { CourseState } from "../../store/courses/courseSlice";
import optionReducer, { OptionState } from "../../store/options/optionSlice";
import merchandiseReducer, {
  MerchandiseState,
} from "../../store/merchandises/merchandiseSlice";
import customerReducer, {
  CustomerState,
} from "../../store/customers/customerSlice";
import hairstyleReducer, {
  HairstyleState,
} from "../../store/hairstyles/hairstyleSlice";
import course_customersReducer, {
  Course_customersState,
} from "../../store/middleTable/customers/course_customersSlice";
import merchandise_customersReducer, {
  Merchandise_customersState,
} from "../../store/middleTable/customers/merchandise_customersSlice";
import option_customersReducer, {
  Option_customersState,
} from "../../store/middleTable/customers/option_customersSlice";
import hairstyle_customersReducer, {
  Hairstyle_customersState,
} from "../../store/middleTable/customers/hairstyle_customersSlice";
import customer_attendancesReducer, {
  Customer_attendancesState,
} from "../../store/middleTable/customers/customer_attendancesSlice";
import scheduleReducer, {
  ScheduleState,
} from "../../store/schedules/scheduleSlice";
import stockReducer, { StockState } from "../../store/stocks/stockSlice";
import stock_categoryReducer, {
  Stock_categoryState,
} from "../../store/stocks/stock_categories/stock_categorySlice";
import daily_salesReducer, {
  Daily_salesState,
} from "../../store/sales/daily_sales/daily_saleSlice";
import monthly_salesReducer, {
  Monthly_salesState,
} from "../../store/sales/monthly_sales/monthly_saleSlice";
import yearly_salesReducer, {
  Yearly_salesState,
} from "../../store/sales/yearly_sales/yearly_saleSlice";
import authReducer from "../../store/auth/authSlice";

// 他のリデューサーをインポートする

// 他のリデューサーをインポートする
const rootReducer = combineReducers({
  auth: authReducer,
  attendance: attendanceReducer,
  attendance_time: attendance_timeReducer,
  course: courseReducer,
  option: optionReducer,
  merchandise: merchandiseReducer,
  hairstyle: hairstyleReducer,
  customer: customerReducer,
  schedule: scheduleReducer,
  stock: stockReducer,
  stock_category: stock_categoryReducer,
  daily_sales: daily_salesReducer,
  monthly_sales: monthly_salesReducer,
  yearly_sales: yearly_salesReducer,
  course_customers: course_customersReducer,
  merchandise_customers: merchandise_customersReducer,
  option_customers: option_customersReducer,
  hairstyle_customers: hairstyle_customersReducer,
  customer_attendances: customer_attendancesReducer,
  // 他のリデューサーをここに追加する
});

export default rootReducer;

// store/auth/authSlice.ts
