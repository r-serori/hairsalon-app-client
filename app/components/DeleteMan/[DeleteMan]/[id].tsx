import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  deleteAttendance,
  deleteAttendanceInfo,
} from "../../../store/attendances/attendanceSlice";
import {
  deleteAttendanceTimeInfo,
  deleteAttendanceTime,
} from "../../../store/attendances/attendance_times/attendance_timesSlice";
import {
  deleteCourseInfo,
  deleteCourse,
} from "../../../store/courses/courseSlice";
import {
  deleteCustomer,
  deleteCustomerInfo,
} from "../../../store/customers/customerSlice";
import {
  deleteHairstyle,
  deleteHairstyleInfo,
} from "../../../store/hairstyles/hairstyleSlice";
import {
  deleteMerchandise,
  deleteMerchandiseInfo,
} from "../../../store/merchandises/merchandiseSlice";
import {
  deleteOption,
  deleteOptionInfo,
} from "../../../store/options/optionSlice";
import {
  deleteSchedule,
  deleteScheduleInfo,
} from "../../../store/schedules/scheduleSlice";
import { deleteStock, deleteStockInfo } from "../../../store/stocks/stockSlice";
import {
  deleteStockCategory,
  deleteStockCategoryInfo,
} from "../../../store/stocks/stock_categories/stock_categorySlice";
import {
  deleteDaily_sales,
  deleteDailySalesInfo,
} from "../../../store/sales/daily_sales/daily_saleSlice";
import {
  deleteMonthly_sales,
  deleteMonthlySalesInfo,
} from "../../../store/sales/monthly_sales/monthly_saleSlice";
import {
  deleteYearly_sales,
  deleteYearlySalesInfo,
} from "../../../store/sales/yearly_sales/yearly_saleSlice";

const DeleteMan = ({ id, link }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDeleteMan = async () => {
    // 適切な link によって条件分岐して削除処理を行う
    switch (link) {
      case "/attendances":
        await dispatch(deleteAttendanceInfo(id) as any);
        await dispatch(deleteAttendance(id) as any);
        break;
      case "/attendance_times":
        await dispatch(deleteAttendanceTimeInfo(id) as any);
        await dispatch(deleteAttendanceTime(id) as any);
        break;
      case "/courses":
        await dispatch(deleteCourseInfo(id) as any);
        await dispatch(deleteCourse(id) as any);
        break;
      case "/customers":
        await dispatch(deleteCustomerInfo(id) as any);
        await dispatch(deleteCustomer(id) as any);
        break;
      case "/hairstyles":
        await dispatch(deleteHairstyleInfo(id) as any);
        await dispatch(deleteHairstyle(id) as any);
        break;
      case "/merchandises":
        await dispatch(deleteMerchandiseInfo(id) as any);
        await dispatch(deleteMerchandise(id) as any);
        break;
      case "/options":
        await dispatch(deleteOptionInfo(id) as any);
        await dispatch(deleteOption(id) as any);
        break;
      case "/schedules":
        console.log("id", id);
        await dispatch(deleteScheduleInfo(id) as any);
        await dispatch(deleteSchedule(id) as any);
        break;
      case "/stocks":
        await dispatch(deleteStockInfo(id) as any);
        await dispatch(deleteStock(id) as any);
        break;
      case "/stock_categories":
        await dispatch(deleteStockCategoryInfo(id) as any);
        await dispatch(deleteStockCategory(id) as any);
        break;
      case "/daily_sales":
        await dispatch(deleteDailySalesInfo(id) as any);
        await dispatch(deleteDaily_sales(id) as any);
        break;
      case "/monthly_sales":
        await dispatch(deleteMonthlySalesInfo(id) as any);
        await dispatch(deleteMonthly_sales(id) as any);
        break;
      case "/yearly_sales":
        await dispatch(deleteYearlySalesInfo(id) as any);
        await dispatch(deleteYearly_sales(id) as any);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleDeleteMan}>
      <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2 text-center ">
        削除
      </button>
    </form>
  );
};

export default DeleteMan;
