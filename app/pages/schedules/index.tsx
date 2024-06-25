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
import BasicAlerts from "../../components/elements/alert/Alert";
import { UserPermission } from "../../components/Hooks/UserPermission";
import { useState } from "react";
import { useRouter } from "next/router";

interface Schedule {
  year?: string;
  update?: boolean;
}

const schedules: React.FC<Schedule> = ({ year, update }) => {
  const [role, setRole] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();

  const schedules = useSelector((state: RootState) => state.schedule.schedule);

  useEffect(() => {
    try {
      const role = localStorage.getItem("role");
      if (
        role === "スタッフ" ||
        role === "マネージャー" ||
        role === "オーナー"
      ) {
        setRole(role);
      } else {
        router.push("/dashboard");
      }
      if (
        schedules.length === 0 &&
        (role === "オーナー" || role === "マネージャー" || role === "スタッフ")
      ) {
        try {
          const ownerId = Number(localStorage.getItem("owner_id"));
          dispatch(getSchedule(ownerId) as any);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const loading = useSelector((state: RootState) => state.schedule.status);

  const message = useSelector((state: RootState) => state.schedule.message);

  const error = useSelector((state: RootState) => state.schedule.error);

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
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}
      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      {loading === "loading" ? (
        <p>loading...</p>
      ) : (
        <MyCalendar events={events} role={role} />
      )}
    </div>
  );
};

export default schedules;
