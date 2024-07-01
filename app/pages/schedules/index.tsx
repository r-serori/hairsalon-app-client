import React from "react";
import MyCalendar from "../../components/elements/calender/CalenderComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getSchedule,
  ScheduleState,
} from "../../store/schedules/scheduleSlice";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import BasicAlerts from "../../components/elements/alert/Alert";
import { useRouter } from "next/router";
import {
  customersStore,
  scheduleError,
  scheduleMessage,
  scheduleStatus,
  schedulesStore,
} from "../../components/Hooks/selector";
import { userKey, permissionStore } from "../../components/Hooks/authSelector";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { PermissionsState } from "../../store/auth/permissionSlice";
import { CustomerState } from "../../store/customers/customerSlice";

interface Schedule {
  year?: string;
  update?: boolean;
}

const schedules: React.FC<Schedule> = ({ year, update }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const schedules: ScheduleState[] = useSelector(schedulesStore);

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await staffPermission(permission, router);

        if (
          _.isEmpty(schedules) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getSchedule({}) as any);
        }
      } catch (error) {
        console.log(error);
        await allLogout(dispatch);
        router.push("/auth/login");
      }
    };
    fetchData();
  }, [dispatch, permission, router, schedules]);

  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const sStatus: string = useSelector(scheduleStatus);

  const sMessage: string | null = useSelector(scheduleMessage);

  const sError: string | null = useSelector(scheduleError);

  const customers: CustomerState[] = useSelector(customersStore);

  const events = schedules.map((schedule) => {
    if (schedule.customer_id) {
      const customer = customers.find(
        (customer) => schedule.customer_id === customer.id
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
      {sMessage && (
        <BasicAlerts
          type="success"
          message={sMessage}
          space={1}
          padding={0.6}
        />
      )}
      {sError && (
        <BasicAlerts type="error" message={sError} space={1} padding={0.6} />
      )}
      {sStatus === "loading" ? (
        <p>loading...</p>
      ) : (
        <MyCalendar events={events} role={permission} />
      )}
    </div>
  );
};

export default schedules;
