import React from "react";
import MyCalendar from "../../components/elements/calender/CalendarComponent";
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
import {
  userKey,
  permissionStore,
  user,
} from "../../components/Hooks/authSelector";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { PermissionsState } from "../../store/auth/permissionSlice";
import { CustomerState } from "../../store/customers/customerSlice";
import { CourseState } from "../../store/courses/courseSlice";
import { OptionState } from "../../store/options/optionSlice";
import { MerchandiseState } from "../../store/merchandises/merchandiseSlice";
import { HairstyleState } from "../../store/hairstyles/hairstyleSlice";
import { RoleState, UserAllState } from "../../components/Hooks/interface";
import { Course_customersState } from "../../store/middleTable/customers/course_customersSlice";
import { Option_customersState } from "../../store/middleTable/customers/option_customersSlice";
import { Merchandise_customersState } from "../../store/middleTable/customers/merchandise_customersSlice";
import { Hairstyle_customersState } from "../../store/middleTable/customers/hairstyle_customersSlice";
import { Customer_usersState } from "../../store/middleTable/customers/customer_usersSlice";
import {
  coursesStore,
  option_customersStore,
  course_customersStore,
  merchandise_customersStore,
  hairstylesStore,
  customer_usersStore,
  optionsStore,
  merchandiseStore,
  hairstyle_customersStore,
} from "../../components/Hooks/selector";

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
        staffPermission(permission, router);

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
        allLogout(dispatch);
        router.push("/auth/login");
      } finally {
        localStorage.removeItem("userCount");
      }
    };
    if (permission) fetchData();
  }, [dispatch, permission]);

  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const sStatus: string = useSelector(scheduleStatus);

  const sMessage: string | null = useSelector(scheduleMessage);

  const sError: string | null = useSelector(scheduleError);

  // 顧客情報を取得
  const customers: CustomerState[] = useSelector(customersStore);

  // コース情報を取得
  const courses: CourseState[] = useSelector(coursesStore);

  // オプション情報を取得
  const options: OptionState[] = useSelector(optionsStore);

  // 商品情報を取得
  const merchandises: MerchandiseState[] = useSelector(merchandiseStore);
  // 髪型情報を取得
  const hairstyles: HairstyleState[] = useSelector(hairstylesStore);
  // 担当者情報を取得
  const users: UserAllState[] = useSelector(user);
  console.log("userです", users);

  // 中間テーブルの情報を取得
  const course_customers: Course_customersState[] = useSelector(
    course_customersStore
  );
  // console.log("course_customersだよ");
  // console.log(course_customers);
  // 中間テーブルの情報を取得
  const option_customers: Option_customersState[] = useSelector(
    option_customersStore
  );
  // 中間テーブルの情報を取得
  const merchandise_customers: Merchandise_customersState[] = useSelector(
    merchandise_customersStore
  );
  // 中間テーブルの情報を取得
  const hairstyle_customers: Hairstyle_customersState[] = useSelector(
    hairstyle_customersStore
  );

  // 中間テーブルの情報を取得
  const customer_users: Customer_usersState[] =
    useSelector(customer_usersStore);

  const customerNames: string[] =
    !customers || customers.length === 0
      ? []
      : customers.map((customer) => customer.customer_name);

  const nodes = customers
    ? [
        ...customers.map((customer) => {
          // customerは一回一番下まで行く。その後、次のcustomerに行く。
          // 顧客に関連するコースの情報を取得
          const customerCourses: number[] = course_customers
            .filter((course) => course.customer_id === customer.id)
            .map((course) => course.course_id);

          // console.log(customerCourses);
          //  [1,2,3]

          const courseNames: string[] = courses
            .filter((course) => customerCourses.includes(course.id))
            .map((course) => course.course_name);

          // console.log("courseNamesだよ");
          // console.log(courseNames);

          // 顧客に関連するオプションの情報を取得
          const customerOptions: number[] = option_customers
            .filter((option) => option.customer_id === customer.id)
            .map((option) => option.option_id);

          // console.log(customerOptions);

          const optionNames: string[] = options
            .filter((option) => customerOptions.includes(option.id))
            .map((option) => option.option_name);

          // console.log("optionNamesだよ");
          // console.log(optionNames);

          // 顧客に関連する商品の情報を取得
          const customerMerchandises: number[] = merchandise_customers
            .filter((merchandise) => merchandise.customer_id === customer.id)
            .map((merchandise) => merchandise.merchandise_id);

          // console.log(customerMerchandises);

          const merchandiseNames: string[] = merchandises
            .filter((merchandise) =>
              customerMerchandises.includes(merchandise.id)
            )
            .map((merchandise) => merchandise.merchandise_name);

          // console.log("merchandiseNamesだよ");
          // console.log(merchandiseNames);

          // 顧客に関連する髪型の情報を取得
          const customerHairstyles: number[] = hairstyle_customers
            .filter((hairstyle) => hairstyle.customer_id === customer.id)
            .map((hairstyle) => hairstyle.hairstyle_id);

          // console.log("cusHair", customerHairstyles);

          // console.log("hairstylesだよ", hairstyles);

          const hairstyleNames: string[] = hairstyles
            .filter((hairstyle) => customerHairstyles.includes(hairstyle.id))
            .map((hairstyle) => hairstyle.hairstyle_name);

          // console.log("hairstyleNamesだよ");

          // console.log(hairstyleNames);

          // 顧客に関連する担当者の情報を取得
          //user_idを配列にしている
          const customerUsers: number[] = customer_users
            .filter((user) => user.customer_id === customer.id)
            .map((user) => user.user_id);

          // console.log("customerUsers", customerUsers);

          // console.log("users前", users);

          const userNames: string[] = Array.isArray(users)
            ? users
                .filter((user) => customerUsers.includes(user.id))
                .map((user) => user.name)
            : [Object(users).name];

          // console.log("userNames", userNames);

          // 顧客情報を返す
          return {
            id: customer.id,
            customer_name: customer.customer_name,
            phone_number: customer.phone_number,
            remarks: customer.remarks,
            course: courseNames,
            option: optionNames,
            merchandise: merchandiseNames,
            hairstyle: hairstyleNames,
            names: userNames,
          };
        }),
      ]
    : [];
  const events = schedules.map((schedule) => {
    if (schedule.customer_id) {
      const customer = nodes.find((node) => schedule.customer_id === node.id);
      return {
        id: schedule.id,
        title: customer.customer_name,
        phone_number: customer.phone_number,
        remarks: customer.remarks,
        course: customer.course,
        option: customer.option,
        merchandise: customer.merchandise,
        hairstyle: customer.hairstyle,
        names: customer.names,
        start: schedule.start_time,
        end: schedule.end_time,
        allDay: schedule.allDay,
        isCustomer: true,
        customer_id: schedule.customer_id,
      };
    } else {
      return {
        id: schedule.id,
        title: schedule.title,
        start: schedule.start_time,
        end: schedule.end_time,
        allDay: schedule.allDay,
        isCustomer: false,
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
      {sStatus === "loading" || permission === null ? (
        <p>loading...</p>
      ) : (
        <MyCalendar
          events={events}
          nodes={nodes}
          users={users}
          courses={courses}
          options={options}
          merchandises={merchandises}
          hairstyles={hairstyles}
          customerNames={customerNames}
        />
      )}
    </div>
  );
};

export default schedules;
