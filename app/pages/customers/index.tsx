import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomer } from "../../store/customers/customerSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { Router } from "next/router";

interface CustomerProps {
  update?: boolean;
}

const customers: React.FC<CustomerProps> = ({ update }) => {
  const dispatch = useDispatch();

  const customers = useSelector((state: RootState) => state.customer.customers);

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(getCustomer({}) as any);
    } else {
      return;
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.customer.loading);

  const message = useSelector((state: RootState) => state.customer.message);

  const error = useSelector((state: RootState) => state.customer.error);

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

  const searchItems = [
    { key: "customer_name", value: "顧客名" },
    { key: "phone_number", value: "電話番号" },
    { key: "remarks", value: "備考" },
    { key: "course", value: "コース名" },
    { key: "option", value: "オプション名" },
    {
      key: "merchandise",
      value: "商品名",
    },
    { key: "hairstyle", value: "ヘアスタイル名" },
    { key: "attendance", value: "担当者名" },
  ];

  const tHeaderItems = [
    "顧客名",
    "電話番号",
    "備考",
    "コース名",
    "オプション名",
    "商品名",
    "ヘアスタイル名",
    "担当者名",
    "更新日",
    "編集",
    "削除",
  ];

  const nodesProps = [
    { text: "customer_name" },
    { number: "phone_number" },
    { text: "remarks" },
    { text: "course" },
    { text: "option" },
    { text: "merchandise" },
    { text: "hairstyle" },
    { text: "attendance" },
    { date: "updated_at" },
  ];

  const nodes = [
    ...customers.map((customer) => {
      // customerは一回一番下まで行く。その後、次のcustomerに行く。
      // 顧客に関連するコースの情報を取得
      const customerCourses = course_customers.filter(
        (course) => course.customers_id === customer.id
      );
      console.log(customerCourses);
      // [{customers_id: 1, courses_id: 1}]

      // 顧客に関連するコース名を取得し、カンマ区切りの文字列に変換
      const courseNames = customerCourses
        .map((course) => {
          const courseInfo = courses.find((c) => c.id === course.courses_id);
          return courseInfo ? courseInfo.course_name : ""; // コース名が見つかった場合のみ取得
        })
        .join(", "); // コース名をカンマ区切りの文字列に変換
      console.log(courseNames);
      // カットとシェービングA

      // 顧客に関連するオプションの情報を取得
      const customerOptions = option_customers.filter(
        (cus_op) => cus_op.customers_id === customer.id
      );
      console.log("CUSOP", customerOptions);
      // [{customers_id: 1, options_id: 1},
      // {customers_id: 1, options_id: 2}]

      // 顧客に関連するオプション名を取得し、カンマ区切りの文字列に変換
      const optionNames = customerOptions
        .map((option) => {
          const optionInfo = options.find((o) => o.id === option.options_id);
          return optionInfo ? optionInfo.option_name : ""; // オプション名が見つかった場合のみ取得
        })
        .join(", "); // オプション名をカンマ区切りの文字列に変換
      console.log(optionNames);
      // トリートメント, パーマ

      // 顧客に関連する商品の情報を取得
      const customerMerchandises = merchandise_customers.filter(
        (merchandise) => merchandise.customers_id === customer.id
      );
      console.log(customerMerchandises);
      // [{customers_id: 1, merchandises_id: 1},
      // {customers_id: 1, merchandises_id: 2}]

      // 顧客に関連する商品名を取得し、カンマ区切りの文字列に変換
      const merchandiseNames = customerMerchandises
        .map((merchandise) => {
          const merchandiseInfo = merchandises.find(
            (m) => m.id === merchandise.merchandises_id
          );
          return merchandiseInfo ? merchandiseInfo.merchandise_name : ""; // 商品名が見つかった場合のみ取得
        })
        .join(", "); // 商品名をカンマ区切りの文字列に変換
      console.log(merchandiseNames);
      // シャンプー, コンディショナー

      // 顧客に関連するヘアスタイルの情報を取得
      const customerHairstyles = hairstyle_customers.filter(
        (hairstyle) => hairstyle.customers_id === customer.id
      );
      console.log(customerHairstyles);
      // [{customers_id: 1, hairstyles_id: 1},
      // {customers_id: 1, hairstyles_id: 2}]

      // 顧客に関連するヘアスタイル名を取得し、カンマ区切りの文字列に変換
      const hairstyleNames = customerHairstyles
        .map((hairstyle) => {
          const hairstyleInfo = hairstyles.find(
            (h) => h.id === hairstyle.hairstyles_id
          );
          return hairstyleInfo ? hairstyleInfo.hairstyle_name : ""; // ヘアスタイル名が見つかった場合のみ取得
        })
        .join(", "); // ヘアスタイル名をカンマ区切りの文字列に変換
      console.log(hairstyleNames);
      // ショート, ロング

      // 顧客に関連する担当者の情報を取得
      const customerAttendances = customer_attendances.filter(
        (attendance) => attendance.customers_id === customer.id
      );
      console.log(customerAttendances);
      // [{customers_id: 1, attendances_id: 1}]

      // 顧客に関連する担当者名を取得し、カンマ区切りの文字列に変換
      const attendanceNames = customerAttendances
        .map((attendance) => {
          const attendanceInfo = attendances.find(
            (a) => a.id === attendance.attendances_id
          );
          return attendanceInfo ? attendanceInfo.attendance_name : ""; // 担当者名が見つかった場合のみ取得
        })
        .join(", "); // 担当者名をカンマ区切りの文字列に変換
      console.log(attendanceNames);
      // 田中店長

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

  return (
    <div>
      <div>
        {message && (
          <BasicAlerts
            type="success"
            message={message}
            space={1}
            padding={0.6}
          />
        )}
        {error && (
          <BasicAlerts type="error" message={error} space={1} padding={0.6} />
        )}
      </div>
      <div className="mx-8 mt-4">
        <div className="flex mb-4 ml-2">
          <RouterButton link="/customers/create" value="新規作成" />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/customers"
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default customers;
