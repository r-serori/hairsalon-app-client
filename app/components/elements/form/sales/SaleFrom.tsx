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
import {
  changeDailySaleMessage,
  createDaily_sales,
  PostDailySaleState,
} from "../../../../store/daily_sales/daily_saleSlice";
import {
  changeMonthlySaleMessage,
  createMonthly_sales,
} from "../../../../store/monthly_sales/monthly_saleSlice";
import {
  changeYearlySaleMessage,
  createYearly_sales,
} from "../../../../store/yearly_sales/yearly_saleSlice";
import {
  customerStatus,
  daily_saleError,
  daily_saleStatus,
  monthly_saleError,
  monthly_saleStatus,
  yearly_saleError,
  yearly_saleStatus,
} from "../../../Hooks/selector";
import { CourseState } from "../../../../store/courses/courseSlice";
import { OptionState } from "../../../../store/options/optionSlice";
import { MerchandiseState } from "../../../../store/merchandises/merchandiseSlice";
import { CalendarEvent } from "../../calender/CalendarComponent";
import BasicAlerts from "../../alert/BasicAlert";
import { ErrorType } from "../../../Hooks/interface";

interface SaleFormProps {
  events: CalendarEvent[];
  whatSales: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  nodes: any;
  courses: CourseState[];
  options: OptionState[];
  merchandises: MerchandiseState[];
}
const SaleForm: React.FC<SaleFormProps> = ({
  events,
  whatSales,
  showModal,
  setShowModal,
  nodes,
  courses,
  options,
  merchandises,
}) => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dispatch = useDispatch();
  const router = useRouter();

  const dailySalesError = useSelector(daily_saleError);
  const dailySalesStatus = useSelector(daily_saleStatus);

  const monthlySalesError = useSelector(monthly_saleError);
  const monthlySalesStatus = useSelector(monthly_saleStatus);

  const yearlySalesError = useSelector(yearly_saleError);
  const yearlySalesStatus = useSelector(yearly_saleStatus);

  const [time, setTime] = React.useState<Dayjs | null>(
    dayjs().utc().tz("Asia/Tokyo")
  );

  const [timeValidate, setTimeValidate] = React.useState<boolean>(true);

  const [sumPrice, setSumPrice] = React.useState<number | 0>(0);
  const [message, setMessage] = React.useState<string>("");

  const sumPricer = (updateDate) => {
    if (!timeValidate) return;
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

      if (sameDateEvents.length === 0) {
        setSumPrice(0);
        setMessage("選択した、時制に予約が入っていないので売上がありません！");
        return;
      }

      const sameCustomerEvents = sameDateEvents.filter((event) => {
        if (event.isCustomer) {
          return {
            course: event.course,
            option: event.option,
            merchandise: event.merchandise,
          };
        }
      });

      console.log("sameCustomerEventsだよ", sameCustomerEvents);

      //sameCustomerEventsをmapで回して、courseのみを取得。その後、配列内に配列が複数入っている状態になるのでflat()で配列を一つの配列にする。
      const sameCoursesEvents = sameCustomerEvents
        .map((event) => event.course)
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
              (courseNameAndPrice) => courseNameAndPrice.courseName === course
            ).coursePrice
        )
        .reduce((acc, cur) => acc + cur, 0);

      console.log("sameCoursesPriceだよ", sameCoursesPrice);

      //optionも同様にする。
      const sameOptionsEvents = sameCustomerEvents
        .map((event) => event.option)
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
              (optionNameAndPrice) => optionNameAndPrice.optionName === option
            ).optionPrice
        )
        .reduce((acc, cur) => acc + cur, 0);

      console.log("sameOptionsPriceだよ", sameOptionsPrice);

      //merchandiseも同様にする。

      const sameMerchandisesEvents = sameCustomerEvents
        .map((event) => event.merchandise)
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
              (merchandiseNameAndPrice) =>
                merchandiseNameAndPrice.merchandiseName === merchandise
            ).merchandisePrice
        )
        .reduce((acc, cur) => acc + cur, 0);

      console.log("sameMerchandisesPriceだよ", sameMerchandisesPrice);

      const result =
        sameCoursesPrice + sameOptionsPrice + sameMerchandisesPrice;

      console.log("resultだよ", result);
      setMessage("");
      setSumPrice(result);
    } catch (e) {
      return 0;
    }
  };

  console.log("eventsだよ", events);

  const allInitialState = () => {
    setTime(dayjs().utc().tz("Asia/Tokyo"));
    setSumPrice(0);
    setMessage("");
    setShowModal(false);
  };

  const InitialState = () => {
    setTime(dayjs().utc().tz("Asia/Tokyo"));
    setMessage("");
    setSumPrice(0);
  };

  console.log("whatSalesだよ", whatSales);

  const SalesSubmit = async () => {
    if (!timeValidate) return;
    try {
      let SalesFormData;
      if (sumPrice === 0) {
        setMessage("売上が0円のため、更新できません。");
        return;
      }
      if (whatSales === "日次") {
        SalesFormData = {
          id: 0,
          date: time.utc().tz("Asia/Tokyo").format("YYYY-MM-DD"),
          daily_sales: sumPrice,
        };

        const response = await dispatch(
          createDaily_sales(SalesFormData) as any
        );
        if (response.meta.requestStatus === "fulfilled") {
          allInitialState();
          router.push("/daily_sales");
        } else {
          throw new Error();
        }
      } else if (whatSales === "月次") {
        SalesFormData = {
          id: 0,
          year_month: time.utc().tz("Asia/Tokyo").format("YYYY-MM"),
          monthly_sales: sumPrice,
        };

        const response = await dispatch(
          createMonthly_sales(SalesFormData) as any
        );
        if (response.meta.requestStatus === "fulfilled") {
          allInitialState();
          router.push("/monthly_sales");
        } else {
          throw new Error();
        }
      } else if (whatSales === "年次") {
        SalesFormData = {
          id: 0,
          year: time.utc().tz("Asia/Tokyo").format("YYYY"),
          yearly_sales: sumPrice,
        };

        const response = await dispatch(
          createYearly_sales(SalesFormData) as any
        );
        if (response.meta.requestStatus === "fulfilled") {
          allInitialState();
          router.push("/yearly_sales");
        } else {
          throw new Error();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    changeDailySaleMessage("");
    changeMonthlySaleMessage("");
    changeYearlySaleMessage("");
    InitialState();
    sumPricer(dayjs().utc().tz("Asia/Tokyo"));
  }, [whatSales]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ja-JP").format(price);
  };

  return (
    <>
      <>
        {message && (
          <BasicAlerts message={message} type="warning" space={1} padding={1} />
        )}

        {dailySalesError && whatSales === "日次" && (
          <BasicAlerts
            message={dailySalesError}
            type="error"
            space={1}
            padding={1}
          />
        )}

        {monthlySalesError && whatSales === "月次" && (
          <BasicAlerts
            message={monthlySalesError}
            type="error"
            space={1}
            padding={1}
          />
        )}

        {yearlySalesError && whatSales === "年次" && (
          <BasicAlerts
            message={yearlySalesError}
            type="error"
            space={1}
            padding={1}
          />
        )}

        <div className="flex justify-center items-center py-4">
          <DatePickerValue
            value={time}
            changer={(newValue) => {
              console.log("newValueだよasaasassfasf", newValue);
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
            onValidateChange={setTimeValidate}
          />
        </div>
        <div className="p-4 md:p-5 text-center pt-8">
          {whatSales === "日次" ? (
            <div>
              <h3 className="font-normal text-gray-900 dark:text-gray-400">
                {dayjs(time)
                  .utc()
                  .tz("Asia/Tokyo")
                  .format("YYYY-MM-DD")
                  .includes("Invalid")
                  ? "日付を正しく入力してください。"
                  : `${time.format("YYYY")}
                年${time.format("MM")}月${time.format("DD")}
                日の売上合計は
                ${formatPrice(sumPrice)}円でした。`}
              </h3>
              {sumPrice > 0 && (
                <h3 className="font-normal text-gray-900 dark:text-gray-400 pt-8">
                  日次売上に更新しますか？
                </h3>
              )}
            </div>
          ) : whatSales === "月次" ? (
            <div>
              <h3 className="font-normal text-gray-900 dark:text-gray-400">
                {dayjs(time)
                  .utc()
                  .tz("Asia/Tokyo")
                  .format("YYYY-MM")
                  .includes("Invalid")
                  ? "日付を正しく入力してください。"
                  : `${time.format("YYYY")}年${time.format(
                      "MM"
                    )}月の売上合計は${formatPrice(sumPrice)}円でした。`}
              </h3>
              {sumPrice > 0 && (
                <h3 className="font-normal text-gray-900 dark:text-gray-400 pt-8">
                  月次売上に更新しますか？
                </h3>
              )}
            </div>
          ) : (
            <div>
              <h3 className="font-normal text-gray-900 dark:text-gray-400">
                {dayjs(time)
                  .utc()
                  .tz("Asia/Tokyo")
                  .format("YYYY")
                  .includes("Invalid")
                  ? "日付を正しく入力してください。"
                  : `${time.format("YYYY")}
                年の売上合計は
                ${formatPrice(sumPrice)}円でした。`}
              </h3>
              {sumPrice > 0 && (
                <h3 className="font-normal text-gray-900 dark:text-gray-400 pt-8">
                  年次売上に更新しますか？
                </h3>
              )}
            </div>
          )}
          <div className="flex justify-center pt-8 gap-16">
            <div>
              <DeleteButton
                value={"戻る"}
                onClicker={() => allInitialState()}
              />
            </div>
            {sumPrice > 0 && (
              <div>
                <PrimaryButton value={"更新"} onChanger={SalesSubmit} />
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default SaleForm;
