// reducers/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { AuthState } from '../../store/auth/authLoginSlice';
import authRegisterReducer, { AuthRegisterState } from '../../store/auth/authRegisterSlice';
import authLogoutReducer, { AuthLogoutState } from '../../store/auth/authLogoutSlice';
import attendanceReducer, { AttendanceState } from '../../store/attendances/attendanceSlice';
import attendance_timeReducer, { Attendance_timeState } from '../../store/attendances/attendance_times/attendance_timesSlice';
import courseReducer, { CourseState } from '../../store/courses/courseSlice';
import optionReducer, { OptionState } from '../../store/options/optionSlice';
import merchandiseReducer, { MerchandiseState } from '../../store/merchandises/merchandiseSlice';
import customerReducer, { CustomerState } from '../../store/customers/customerSlice';
import hairstyleReducer, { HairstyleState } from "../../store/hairstyles/hairstyleSlice"
import course_customersReducer, { Course_customersState } from '../../store/middleTable/customers/course_customersSlice';
import merchandise_customersReducer, { Merchandise_customersState } from '../../store/middleTable/customers/merchandise_customersSlice';
import option_customersReducer, { Option_customersState } from '../../store/middleTable/customers/option_customersSlice';
import hairstyle_customersReducer, { Hairstyle_customersState } from '../../store/middleTable/customers/hairstyle_customersSlice';
import customer_attendancesReducer,{ customer_attendancesState } from '../../store/middleTable/customers/customer_attendancesSlice';
import customer_schedulesReducer,{ customer_schedulesState } from '../../store/middleTable/customers/customer_schedulesSlice';
import course_schedulesReducer, { Course_schedulesState } from '../../store/middleTable/schedules/course_schedulesSlice';
import option_schedulesReducer, { Option_schedulesState } from '../../store/middleTable/schedules/option_schedulesSlice';
import merchandise_schedulesReducer, { Merchandise_schedulesState } from '../../store/middleTable/schedules/merchandise_schedulesSlice';
import hairstyle_schedulesReducer,{ Hairstyle_schedulesState } from '../../store/middleTable/schedules/hairstyles_scheduleSlice';
import scheduleReducer, { ScheduleState } from '../../store/schedules/scheduleSlice';
import stockReducer, { StockState } from '../../store/stocks/stockSlice';
import stock_categoryReducer, { Stock_categoryState } from '../../store/stocks/stock_categories/stock_categorySlice';
import daily_salesReducer, { Daily_salesState } from '../../store/sales/daily_sales/daily_saleSlice';
import monthly_salesReducer, { Monthly_salesState } from '../../store/sales/monthly_sales/monthly_saleSlice';
import yearly_salesReducer, { Yearly_salesState } from '../../store/sales/yearly_sales/yearly_saleSlice';



// 他のリデューサーをインポートする



export interface RootState {
  auth: AuthState;
  authRegister: AuthRegisterState;
  authLogout: AuthLogoutState;
  attendance: AttendanceState;
  attendance_time: Attendance_timeState;
  course: CourseState;
  merchandise: MerchandiseState;
  merchandise_schedules: Merchandise_schedulesState;
  option_schedules: Option_schedulesState;
  hairstyle: HairstyleState;
  customer: CustomerState;
  schedule: ScheduleState;
  stock: StockState;
  option: OptionState;
  stock_category: Stock_categoryState;
  daily_sales: Daily_salesState;
  monthly_sales: Monthly_salesState;
  yearly_sales: Yearly_salesState;
  course_customers: Course_customersState;
  merchandise_customers: Merchandise_customersState;
  option_customers: Option_customersState;
  hairstyle_customers: Hairstyle_customersState;
  customer_attendances: customer_attendancesState;
  customer_schedules: customer_schedulesState;
  course_schedules: Course_schedulesState;
  hairstyle_schedules: Hairstyle_schedulesState;

  // 他の部分状態もここに追加する
}





// 他のリデューサーをインポートする
const rootReducer = combineReducers({
  auth: authReducer,
  authRegister: authRegisterReducer,
  authLogout: authLogoutReducer,
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
  merchandise_schedules: merchandise_schedulesReducer,
  option_schedules: option_schedulesReducer,
  daily_sales: daily_salesReducer,
  monthly_sales: monthly_salesReducer,
  yearly_sales: yearly_salesReducer,
  course_customers: course_customersReducer,
  merchandise_customers: merchandise_customersReducer,
  option_customers: option_customersReducer,
  hairstyle_customers: hairstyle_customersReducer,
  customer_attendances: customer_attendancesReducer,
  customer_schedules: customer_schedulesReducer,
  course_schedules: course_schedulesReducer,
  hairstyle_schedules: hairstyle_schedulesReducer,
  // 他のリデューサーをここに追加する
});

export default rootReducer;

// store/auth/authSlice.ts





