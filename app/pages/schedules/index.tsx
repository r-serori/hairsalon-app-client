import React from "react";
import Link from "next/link";
import MyCalendar from "../../components/elements/calender/CalenderComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectGetSchedules,
  getSchedule,
} from "../../store/schedules/scheduleSlice";
import { RootState } from "../../redux/store";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

interface Schedule {
  year?: string;
  update?: boolean;
}

const schedules: React.FC<Schedule> = ({ year, update }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      if (year) {
        console.log("yearです", year);
        const response = dispatch(selectGetSchedules({ year }) as any);
        if (response) {
          return;
        }
      } else if (update) {
        return;
      } else {
        dispatch(getSchedule({}) as any);
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, year, update]);

  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const loading = useSelector((state: RootState) => state.schedule.loading);

  const message = useSelector((state: RootState) => state.schedule.message);

  const error = useSelector((state: RootState) => state.schedule.error);

  const schedules = useSelector((state: RootState) => state.schedule.schedule);

  const customers = useSelector((state: RootState) => state.customer.customers);

  const events = schedules.map((schedule) => {
    if (schedule.customers_id) {
      const customer = customers.find(
        (customer) => schedule.customers_id === customer.id
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
      {message ? (
        <p className="py-4 text-blue-700 ml-4">{message}</p>
      ) : error ? (
        <p className="py-4 text-red-700 mr-4">{error}</p>
      ) : null}
      {loading ? (
        <p>loading...</p>
      ) : (
        <MyCalendar events={events} year={year ? year : null} />
      )}
    </div>
  );
};

export default schedules;
