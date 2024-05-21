import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "40%", // ブラウザの高さの80%に設定
  overflowY: "auto", // 縦方向のスクロールを可能にする
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface SalesModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  events: any;
  whatSales: string;
}

const SalesModal: React.FC<SalesModalProps> = ({
  showModal,
  setShowModal,
  events,
  whatSales,
}) => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.customer.loading);

  const customers = useSelector((state: RootState) => state.customer.customers);

  const courses = useSelector((state: RootState) => state.course.course);

  const options = useSelector((state: RootState) => state.option.option);

  const merchandises = useSelector(
    (state: RootState) => state.merchandise.merchandise
  );

  const hairstyles = useSelector(
    (state: RootState) => state.hairstyle.hairstyle
  );

  const attendances = useSelector(
    (state: RootState) => state.attendance.attendances
  );

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

  const customer_attendances = useSelector(
    (state: RootState) => state.customer_attendances.customer_attendances
  );

  const nodes = [
    ...customers.map((customer) => {
      // customerは一回一番下まで行く。その後、次のcustomerに行く。
      // 顧客に関連するコースの情報を取得
      const customerCourses = course_customers
        .filter((course) => course.customers_id === customer.id)
        .map((course) => course.courses_id);

      console.log(customerCourses);
      //  [1,2,3]

      const courseNames = courses
        .filter((course) => customerCourses.includes(course.id))
        .map((course) => course.course_name);

      console.log("courseNamesだよ");
      console.log(courseNames);

      // 顧客に関連するオプションの情報を取得
      const customerOptions = option_customers
        .filter((option) => option.customers_id === customer.id)
        .map((option) => option.options_id);

      console.log(customerOptions);

      const optionNames = options
        .filter((option) => customerOptions.includes(option.id))
        .map((option) => option.option_name);

      console.log("optionNamesだよ");
      console.log(optionNames);

      // 顧客に関連する商品の情報を取得
      const customerMerchandises = merchandise_customers
        .filter((merchandise) => merchandise.customers_id === customer.id)
        .map((merchandise) => merchandise.merchandises_id);

      console.log(customerMerchandises);

      const merchandiseNames = merchandises
        .filter((merchandise) => customerMerchandises.includes(merchandise.id))
        .map((merchandise) => merchandise.merchandise_name);

      console.log("merchandiseNamesだよ");
      console.log(merchandiseNames);

      // 顧客に関連するヘアスタイルの情報を取得
      const customerHairstyles = hairstyle_customers
        .filter((hairstyle) => hairstyle.customers_id === customer.id)
        .map((hairstyle) => hairstyle.hairstyles_id);

      console.log(customerHairstyles);

      const hairstyleNames = hairstyles
        .filter((hairstyle) => customerHairstyles.includes(hairstyle.id))
        .map((hairstyle) => hairstyle.hairstyle_name);

      console.log("hairstyleNamesだよ");

      console.log(hairstyleNames);

      // 顧客に関連する担当者の情報を取得

      const customerAttendances = customer_attendances
        .filter((attendance) => attendance.customers_id === customer.id)
        .map((attendance) => attendance.attendances_id);

      console.log(customerAttendances);

      const attendanceNames = attendances
        .filter((attendance) => customerAttendances.includes(attendance.id))
        .map((attendance) => attendance.attendance_name);

      console.log("attendanceNamesだよ");
      console.log(attendanceNames);

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
        attendance: attendanceNames,
        updated_at: customer.updated_at,
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

      //titleには顧客名以外が入っているので、それを除外する。nodesのcustomer_nameと同じものを取得。
      //ここではnodes主体なので、nodeの配列内の数と同じ数が返ってくる。
      // const sameCustomerEvents = nodes.filter((node) =>
      //   sameDateEvents.find((event) => event.title === node.customer_name)
      // );

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
      console.log(e);
      <div>loading中にエラーが発生しました。</div>;
    }
  };

  console.log("eventsだよ", events);

  const allInitialState = () => {
    setTime(dayjs().utc().tz("Asia/Tokyo"));
    setSumPrice(0);
    setShowModal(false);
  };

  console.log("whatSalesだよ", whatSales);

  const SalesCreate = async (SalesFormData: {
    date: string;
    daily_sales: number;
    year_month: string;
    monthly_sales: number;
    year: string;
    yearly_sales: number;
  }) => {
    console.log("SalesFormDataだよ", SalesFormData);
    if (whatSales === "日次") {
      await dispatch(createDaily_sales(SalesFormData) as any);
    } else if (whatSales === "月次") {
      await dispatch(createMonthly_sales(SalesFormData) as any);
    } else if (whatSales === "年次") {
      await dispatch(createYearly_sales(SalesFormData) as any);
    }

    // dispatch(createSchedule(data));
    allInitialState();
  };

  const SalesSubmit = () => {
    if (whatSales === "日次") {
      SalesCreate({
        date: time.utc().tz("Asia/Tokyo").format("YYYY-MM-DD"),
        daily_sales: sumPrice,
        year_month: "",
        monthly_sales: 0,
        year: "",
        yearly_sales: 0,
      });
    } else if (whatSales === "月次") {
      SalesCreate({
        date: "",
        daily_sales: 0,
        year_month: time.utc().tz("Asia/Tokyo").format("YYYY-MM"),
        monthly_sales: sumPrice,
        year: "",
        yearly_sales: 0,
      });
    } else if (whatSales === "年次") {
      SalesCreate({
        date: "",
        daily_sales: 0,
        year_month: "",
        monthly_sales: 0,
        year: time.utc().tz("Asia/Tokyo").format("YYYY"),
        yearly_sales: sumPrice,
      });
    }
  };

  return (
    <div>
      <Button
        onClick={() => {
          setShowModal(true);
          setTime(dayjs().utc().tz("Asia/Tokyo"));
          sumPricer(dayjs().utc().tz("Asia/Tokyo"));
        }}
        className="text-xl text-gray-900 cursor-pointer hover:bg-gray-400 
        hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
        {whatSales === "日次"
          ? "日次売上更新"
          : whatSales === "月次"
          ? "月次売上更新"
          : "年次売上更新"}
      </Button>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Modal
          open={showModal}
          onClose={() => allInitialState()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="rounded-xl">
            <Typography id="modal-modal-title" variant="h6" component="h2">
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
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default SalesModal;
