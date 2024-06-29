import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import DatePickerValue from "../../input/DatePicker";
import { RootState } from "../../../../redux/store";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import PrimaryButton from "../../button/PrimaryButton";
import DeleteButton from "../../button/DeleteButton";
import { createDaily_sales } from "../../../../store/sales/daily_sales/daily_saleSlice";
import { createMonthly_sales } from "../../../../store/sales/monthly_sales/monthly_saleSlice";
import { createYearly_sales } from "../../../../store/sales/yearly_sales/yearly_saleSlice";
import {
  coursesStore,
  customerStatus,
  customersStore,
  hairstylesStore,
  merchandiseStore,
  optionsStore,
} from "../../../Hooks/selector";
import { CustomerState } from "../../../../store/customers/customerSlice";
import { CourseState } from "../../../../store/courses/courseSlice";
import { OptionState } from "../../../../store/options/optionSlice";
import { MerchandiseState } from "../../../../store/merchandises/merchandiseSlice";
import { HairstyleState } from "../../../../store/hairstyles/hairstyleSlice";
import { user } from "../../../Hooks/authSelector";
import {} from "../../../../store/auth/userSlice";

interface SaleFormProps {
  events: any;
  whatSales: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
const SaleForm: React.FC<SaleFormProps> = ({
  events,
  whatSales,
  showModal,
  setShowModal,
}) => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dispatch = useDispatch();
  const router = useRouter();

  const cusStatus: string = useSelector(customerStatus);

  const customers: CustomerState[] = useSelector(customersStore);

  const courses: CourseState[] = useSelector(coursesStore);

  const options: OptionState[] = useSelector(optionsStore);

  const merchandises: MerchandiseState[] = useSelector(merchandiseStore);

  const hairstyles: HairstyleState[] = useSelector(hairstylesStore);

  const users = useSelector(user);

  const course_customers = useSelector(
    (state: RootState) => state.course_customers.course_customers
  );

  console.log("course_customersだよ");
  console.log(course_customers);

  const option_customers = useSelector(
    (state: RootState) => state.option_customers.option_customers
  );

  const merchandise_customers = useSelector(
    (state: RootState) => state.merchandise_customers.merchandise_customers
  );

  const hairstyle_customers = useSelector(
    (state: RootState) => state.hairstyle_customers.hairstyle_customers
  );

  const customer_users = useSelector(
    (state: RootState) => state.customer_users.customer_users
  );

  const nodes = [
    ...customers.map((customer) => {
      // customerは一回一番下まで行く。その後、次のcustomerに行く。
      // 顧客に関連するコースの情報を取得
      const customerCourses = course_customers
        .filter((course) => course.customer_id === customer.id)
        .map((course) => course.course_id);

      console.log(customerCourses);
      //  [1,2,3]

      const courseNames = courses
        .filter((course) => customerCourses.includes(course.id))
        .map((course) => course.course_name);

      console.log("courseNamesだよ");
      console.log(courseNames);

      // 顧客に関連するオプションの情報を取得
      const customerOptions = option_customers
        .filter((option) => option.customer_id === customer.id)
        .map((option) => option.option_id);

      console.log(customerOptions);

      const optionNames = options
        .filter((option) => customerOptions.includes(option.id))
        .map((option) => option.option_name);

      console.log("optionNamesだよ");
      console.log(optionNames);

      // 顧客に関連する商品の情報を取得
      const customerMerchandises = merchandise_customers
        .filter((merchandise) => merchandise.customer_id === customer.id)
        .map((merchandise) => merchandise.merchandise_id);

      console.log(customerMerchandises);

      const merchandiseNames = merchandises
        .filter((merchandise) => customerMerchandises.includes(merchandise.id))
        .map((merchandise) => merchandise.merchandise_name);

      console.log("merchandiseNamesだよ");
      console.log(merchandiseNames);

      // 顧客に関連するヘアスタイルの情報を取得
      const customerHairstyles = hairstyle_customers
        .filter((hairstyle) => hairstyle.customer_id === customer.id)
        .map((hairstyle) => hairstyle.hairstyle_id);

      console.log(customerHairstyles);

      const hairstyleNames = hairstyles
        .filter((hairstyle) => customerHairstyles.includes(hairstyle.id))
        .map((hairstyle) => hairstyle.hairstyle_name);

      console.log("hairstyleNamesだよ");

      console.log(hairstyleNames);

      // 顧客に関連する担当者の情報を取得

      const customerUsers = customer_users
        .filter((user) => user.customer_id === customer.id)
        .map((user) => user.user_id);

      console.log(customerUsers);

      const userNames = users
        .filter((user) => customerUsers.includes(user.id))
        .map((user) => user.name);

      console.log("userNamesだよ");
      console.log(userNames);

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
        user: userNames,
      };
    }),
  ];

  const [time, setTime] = React.useState<Dayjs | null>(
    dayjs().utc().tz("Asia/Tokyo")
  );

  const [sumPrice, setSumPrice] = React.useState<number | null>(0);

  const sumPricer = (updateDate) => {
    //モーダルでDateTimePickerで選択した日付をdayjsでformat()で形を変更している。
    let sameDateEvents = [];
    try {
      if (whatSales === "日次") {
        console.log("updateDateだよ", updateDate);
        const updateDateFormat = dayjs(updateDate).format("YYYY-MM-DD");

        console.log("updateDateFormatだよ", updateDateFormat);

        //events==schedulesとtitleとしてcustomer_nameを持っているものを取得。上記の updateDateFormatと同じ日付のものを取得。
        sameDateEvents = events.filter(
          (event) =>
            dayjs(event.start).format("YYYY-MM-DD") === updateDateFormat
        );

        console.log("sameDateEventsだよ", sameDateEvents);
      } else if (whatSales === "月次") {
        const updateDateFormat = dayjs(updateDate).format("YYYY-MM");

        console.log("updateDateFormatだよ", updateDateFormat);

        sameDateEvents = events.filter(
          (event) => dayjs(event.start).format("YYYY-MM") === updateDateFormat
        );

        console.log("sameDateEventsだよ", sameDateEvents);
      } else if (whatSales === "年次") {
        const updateDateFormat = dayjs(updateDate).format("YYYY");

        console.log("updateDateFormatだよ", updateDateFormat);

        sameDateEvents = events.filter(
          (event) => dayjs(event.start).format("YYYY") === updateDateFormat
        );

        console.log("sameDateEventsだよ", sameDateEvents);
      }

      const sameCustomerEvents = [
        ...sameDateEvents.map((event) => {
          const customer = nodes.find(
            (node) => event.title === node.customer_name
          );
          return {
            course: customer.course,
            option: customer.option,
            merchandise: customer.merchandise,
          };
        }),
      ];

      console.log("sameCustomerEventsだよ", sameCustomerEvents);

      //sameCustomerEventsをmapで回して、courseのみを取得。その後、配列内に入れが複数入っている状態になるのでflat()で配列を一つの配列にする。
      const sameCoursesEvents = sameCustomerEvents
        .map((node) => node.course)
        .flat();

      console.log("sameCoursesEventsだよ", sameCoursesEvents);

      //coursesの中にあるcourse_nameとpriceを取得して、配列に入れる。
      const courseNameAndPrices = courses.map((course) => ({
        courseName: course.course_name,
        coursePrice: course.price,
      }));

      console.log("courseNameAndPriceだよ", courseNameAndPrices);

      //一つの配列にした配列をmapで回して、courseNameと同じだったら、coursePriceを取得して、reduceで合計する。
      const sameCoursesPrice = sameCoursesEvents
        .map(
          (course) =>
            courseNameAndPrices.find(
              (courseName) => courseName.courseName === course
            ).coursePrice
        )
        .reduce((acc, cur) => acc + cur, 0);

      console.log("sameCoursesPriceだよ", sameCoursesPrice);

      //optionも同様にする。
      const sameOptionsEvents = sameCustomerEvents
        .map((node) => node.option)
        .flat();

      console.log("sameOptionsEventsだよ", sameOptionsEvents);

      const optionNameAndPrices = options.map((option) => ({
        optionName: option.option_name,
        optionPrice: option.price,
      }));

      console.log("optionNameAndPricesだよ", optionNameAndPrices);

      const sameOptionsPrice = sameOptionsEvents
        .map(
          (option) =>
            optionNameAndPrices.find(
              (optionName) => optionName.optionName === option
            ).optionPrice
        )
        .reduce((acc, cur) => acc + cur, 0);

      console.log("sameOptionsPriceだよ", sameOptionsPrice);

      //merchandiseも同様にする。

      const sameMerchandisesEvents = sameCustomerEvents
        .map((node) => node.merchandise)
        .flat();

      console.log("sameMerchandisesEventsだよ", sameMerchandisesEvents);

      const merchandiseNameAndPrices = merchandises.map((merchandise) => ({
        merchandiseName: merchandise.merchandise_name,
        merchandisePrice: merchandise.price,
      }));

      console.log("merchandiseNameAndPricesだよ", merchandiseNameAndPrices);

      const sameMerchandisesPrice = sameMerchandisesEvents
        .map(
          (merchandise) =>
            merchandiseNameAndPrices.find(
              (merchandiseName) =>
                merchandiseName.merchandiseName === merchandise
            ).merchandisePrice
        )
        .reduce((acc, cur) => acc + cur, 0);

      console.log("sameMerchandisesPriceだよ", sameMerchandisesPrice);

      const result =
        sameCoursesPrice + sameOptionsPrice + sameMerchandisesPrice;

      console.log("resultだよ", result);

      setSumPrice(result);
    } catch (e) {
      return 0;
    }
  };

  console.log("eventsだよ", events);

  const allInitialState = () => {
    setTime(dayjs().utc().tz("Asia/Tokyo"));
    setSumPrice(0);
    setShowModal(false);
  };

  const InitialState = () => {
    setTime(dayjs().utc().tz("Asia/Tokyo"));
    setSumPrice(0);
  };

  console.log("whatSalesだよ", whatSales);

  const SalesCreate = async (SalesFormData: {
    date: string;
    daily_sales: number;
    year_month: string;
    monthly_sales: number;
    year: string;
    yearly_sales: number;
    owner_id: number;
  }) => {
    console.log("SalesFormDataだよ", SalesFormData);
    const update = true;
    if (whatSales === "日次") {
      await dispatch(createDaily_sales(SalesFormData) as any);
      router.push({
        pathname: "/daily_sales",
        query: { update },
      });

      allInitialState();
    } else if (whatSales === "月次") {
      await dispatch(createMonthly_sales(SalesFormData) as any);
      allInitialState();
      router.push({
        pathname: "/monthly_sales",
        query: { update },
      });
    } else if (whatSales === "年次") {
      await dispatch(createYearly_sales(SalesFormData) as any);
      allInitialState();
      router.push({
        pathname: "/yearly_sales",
        query: { update },
      });
    }
  };

  const SalesSubmit = () => {
    const ownerId = Number(localStorage.getItem("owner_id"));
    if (whatSales === "日次") {
      SalesCreate({
        date: time.utc().tz("Asia/Tokyo").format("YYYY-MM-DD"),
        daily_sales: sumPrice,
        year_month: "",
        monthly_sales: 0,
        year: "",
        yearly_sales: 0,
        owner_id: ownerId,
      });
    } else if (whatSales === "月次") {
      SalesCreate({
        date: "",
        daily_sales: 0,
        year_month: time.utc().tz("Asia/Tokyo").format("YYYY-MM"),
        monthly_sales: sumPrice,
        year: "",
        yearly_sales: 0,
        owner_id: ownerId,
      });
    } else if (whatSales === "年次") {
      SalesCreate({
        date: "",
        daily_sales: 0,
        year_month: "",
        monthly_sales: 0,
        year: time.utc().tz("Asia/Tokyo").format("YYYY"),
        yearly_sales: sumPrice,
        owner_id: ownerId,
      });
    }
  };

  useEffect(() => {
    if (showModal) {
      InitialState();
      sumPricer(time);
    }
  }, [showModal]);

  return (
    <>
      {cusStatus === "loading" ? (
        <div>loading中です。</div>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <DatePickerValue
              value={time}
              changer={(newValue) => {
                setTime(newValue);
                sumPricer(newValue);
              }}
              whatSales={
                whatSales === "日次"
                  ? "日次"
                  : whatSales === "月次"
                  ? "月次"
                  : "年次"
              }
            />
          </div>
          <div className="p-4 md:p-5 text-center pt-8">
            {whatSales === "日次" ? (
              <div>
                <h3 className="font-normal text-gray-900 dark:text-gray-400">
                  {time.format("YYYY")}年{time.format("MM")}月
                  {time.format("DD")}
                  日の売上合計は
                  {sumPrice}円でした。
                </h3>
                <h3 className="font-normal text-gray-900 dark:text-gray-400 pt-8">
                  日次売上に更新しますか？
                </h3>
              </div>
            ) : whatSales === "月次" ? (
              <div>
                <h3 className="font-normal text-gray-900 dark:text-gray-400">
                  {time.format("YYYY")}年{time.format("MM")}月の売上合計は
                  {sumPrice}円でした。
                </h3>
                <h3 className="font-normal text-gray-900 dark:text-gray-400 pt-8">
                  月次売上に更新しますか？
                </h3>
              </div>
            ) : (
              <div>
                <h3 className="font-normal text-gray-900 dark:text-gray-400">
                  {time.format("YYYY")}年の売上合計は
                  {sumPrice}円でした。
                </h3>
                <h3 className="font-normal text-gray-900 dark:text-gray-400 pt-8">
                  年次売上に更新しますか？
                </h3>
              </div>
            )}
            <div className="flex justify-center pt-8 gap-16">
              <div>
                <DeleteButton
                  value={"戻る"}
                  onClicker={() => allInitialState()}
                />
              </div>
              <div>
                <PrimaryButton value={"更新"} onChanger={SalesSubmit} />　
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SaleForm;
