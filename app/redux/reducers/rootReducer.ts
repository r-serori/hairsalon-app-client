// reducers/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import { AuthState } from "../../store/auth/userSlice";
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
import customer_usersReducer, {
  Customer_usersState,
} from "../../store/middleTable/customers/customer_usersSlice";
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
import authReducer from "../../store/auth/userSlice";
import ownerReducer from "../../store/auth/ownerSlice";
import staffReducer from "../../store/auth/staffSlice";
import { loginNowReducer } from "../../store/auth/isLoginSlice";
import keyReducer from "../../store/auth/keySlice";

// 他のリデューサーをインポートする
const rootReducer = combineReducers({
  loginNow: loginNowReducer,
  users: authReducer,
  owner: ownerReducer,
  staffs: staffReducer,
  key: keyReducer,
  attendance_times: attendance_timeReducer,
  courses: courseReducer,
  options: optionReducer,
  merchandises: merchandiseReducer,
  hairstyles: hairstyleReducer,
  customers: customerReducer,
  schedules: scheduleReducer,
  stocks: stockReducer,
  stock_categories: stock_categoryReducer,
  daily_sales: daily_salesReducer,
  monthly_sales: monthly_salesReducer,
  yearly_sales: yearly_salesReducer,
  course_customers: course_customersReducer,
  merchandise_customers: merchandise_customersReducer,
  option_customers: option_customersReducer,
  hairstyle_customers: hairstyle_customersReducer,
  customer_users: customer_usersReducer,
  // 他のリデューサーをここに追加する
});

export default rootReducer;

// store/auth/authSlice.ts
