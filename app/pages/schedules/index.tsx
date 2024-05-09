import React from "react";
import Link from "next/link";
import MyCalendar from "../../components/elements/calender/CalenderComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSchedule } from "../../store/schedules/scheduleSlice";
import { RootState } from "../../redux/store";
import { getCustomer } from "../../store/customers/customerSlice";
import { getCourse } from "../../store/courses/courseSlice";
import { getOption } from "../../store/options/optionSlice";
import { getMerchandise } from "../../store/merchandises/merchandiseSlice";
import { getHairstyle } from "../../store/hairstyles/hairstyleSlice";
import { getAttendance } from "../../store/attendances/attendanceSlice";
import { getCourse_customers } from "../../store/middleTable/customers/course_customersSlice";
import { getOption_customers } from "../../store/middleTable/customers/option_customersSlice";
import { getMerchandise_customers } from "../../store/middleTable/customers/merchandise_customersSlice";
import { getHairstyle_customers } from "../../store/middleTable/customers/hairstyle_customersSlice";
import { getCustomer_attendances } from "../../store/middleTable/customers/customer_attendancesSlice";
import { getCustomer_schedules } from "../../store/middleTable/customers/customer_schedulesSlice";

const schedules: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.schedule.loading);

  const schedules = useSelector((state: RootState) => state.schedule.schedule);

  const customers = useSelector((state: RootState) => state.customer.customers);

  const customer_schedules = useSelector(
    (state: RootState) => state.customer_schedules.customer_schedules
  );

  useEffect(() => {
    try {
      dispatch(getSchedule() as any);
      dispatch(getCustomer() as any);
      dispatch(getCourse() as any);
      dispatch(getOption() as any);
      dispatch(getMerchandise() as any);
      dispatch(getHairstyle() as any);
      dispatch(getAttendance() as any);
      dispatch(getCourse_customers() as any);
      dispatch(getOption_customers() as any);
      dispatch(getMerchandise_customers() as any);
      dispatch(getHairstyle_customers() as any);
      dispatch(getCustomer_attendances() as any);
      dispatch(getCustomer_schedules() as any);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //   const events = customer_schedules.map((customer_schedule) => {
  //     //[customers_id:1, schedules_id:1]
  //     const customer = customers.find(
  //       (customer) => customer.id === customer_schedule.customers_id
  //     );
  //     //customer = {id:1, customer_name: "test", phone_number: "090-1234-5678", remarks: "test"}

  //     const schedule = schedules.find(
  //       (schedule) => schedule.id === customer_schedule.schedules_id
  //     );
  //     //schedule = {id:1, title: "", start_time: "2021-09-01T10:00:00", end_time: "2021-09-01T11:00:00", allDay: 0, customers_id: 1}
  // if(customer )
  //     return {
  //       id: schedule.id,
  //       title: schedule.title ? schedule.title : customer.customer_name,
  //       start: schedule.start_time,
  //       end: schedule.end_time,
  //       customers_id: customer.id ? customer.id : 0,
  //       allDay: schedule.allDay,
  //     };
  //   });
  //   console.log("eventsだよ");
  //   console.log(events);

  const events = schedules.map((schedule) => {
    const customer_schedule = customer_schedules.find(
      (customer_schedule) => schedule.id === customer_schedule.schedules_id
    );
    if (customer_schedule) {
      const customer = customers.find(
        (customer) => customer_schedule.customers_id === customer.id
      );

      return {
        id: schedule.id,
        title: customer.customer_name,
        start: schedule.start_time,
        end: schedule.end_time,
        allDay: schedule.allDay,
      };
    } else {
      return {
        id: schedule.id,
        title: schedule.title,
        start: schedule.start_time,
        end: schedule.end_time,
        allDay: schedule.allDay,
      };
    }
  });

  return (
    <div>
      <Link href="/schedules/create">予約作成</Link>

      <Link href="/schedules/[id]/edit?id=1">予約編集</Link>

      <Link href="/schedules/[id]/delete?id=1">削除</Link>

      <Link href="/daily_sales">日次売上</Link>

      <br />
      <MyCalendar events={events} />
    </div>
  );
};

export default schedules;
