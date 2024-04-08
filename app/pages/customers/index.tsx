import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useEffect } from "react";

const customers = () => {
  useEffect(() => {
    console.log(nodes);
  }, []);

  const customers = [
    {
      id: 1,
      name: "田中太郎",
      phone_number: "00011112222",
      remarks: "初めての来店",
      new_customer: "新規",
      updated_at: "2024-01-01",
    },
    {
      id: 2,
      name: "田中次郎",
      phone_number: "00011113333",
      remarks: "前回カット",
      new_customer: "既存",
      updated_at: "2024-01-01",
    },
  ];

  const customer_courses = [
    {
      customers_id: 1,
      courses_id: 1,
    },
    {
      customers_id: 2,
      courses_id: 2,
    },
  ];

  const customer_options = [
    {
      customers_id: 1,
      options_id: 1,
    },
    {
      customers_id: 1,
      options_id: 2,
    },
    {
      customers_id: 2,
      options_id: 1,
    },
  ];

  const customer_merchandises = [
    {
      customers_id: 1,
      merchandises_id: 1,
    },
    {
      customers_id: 1,
      merchandises_id: 2,
    },
    {
      customers_id: 2,
      merchandises_id: 2,
    },
  ];

  const customer_hairstyles = [
    {
      customers_id: 1,
      hairstyles_id: 1,
    },
    {
      customers_id: 1,
      hairstyles_id: 2,
    },
    {
      customers_id: 2,
      hairstyles_id: 1,
    },
  ];
  const customer_attendances = [
    {
      customers_id: 1,
      attendances_id: 1,
    },
    {
      customers_id: 2,
      attendances_id: 2,
    },
  ];

  const courses = [
    {
      id: 1,
      course_name: "カットとシェービングA",
      price: 7000,
    },
    {
      id: 2,
      course_name: "カットとシェービングB",
      price: 6000,
    },
  ];

  const options = [
    {
      id: 1,
      option_name: "トリートメント",
      price: 1000,
    },
    {
      id: 2,
      option_name: "パーマ",
      price: 5000,
    },
  ];

  const merchandises = [
    {
      id: 1,
      product_name: "シャンプー",
      product_price: 2000,
    },
    {
      id: 2,
      product_name: "コンディショナー",
      product_price: 2000,
    },
  ];

  const hairstyles = [
    {
      id: 1,
      hairstyle_name: "ショート",
    },
    {
      id: 2,
      hairstyle_name: "ロング",
    },
  ];

  const attendances = [
    {
      id: 1,
      attendance_name: "田中店長",
    },
    {
      id: 2,
      attendance_name: "太郎社長",
    },
  ];

  const tHeaderItems = [
    "顧客名",
    "電話番号",
    "備考",
    "新規or既存",
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
    { text: "name" },
    { number: "phone_number" },
    { text: "remarks" },
    { text: "new_customer" },
    { text: "course_name" },
    { text: "option_name" },
    { text: "product_name" },
    { text: "hairstyle_name" },
    { text: "attendance_name" },
    { date: "updated_at" },
  ];

  const nodes = [
    ...customers.map((customer) => {
      // customerは一回一番下まで行く。その後、次のcustomerに行く。
      // 顧客に関連するコースの情報を取得
      const customerCourses = customer_courses.filter(
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
      const customerOptions = customer_options.filter(
        (cus_op) => cus_op.customers_id === customer.id
      );
      console.log(customerOptions);
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
      const customerMerchandises = customer_merchandises.filter(
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
          return merchandiseInfo ? merchandiseInfo.product_name : ""; // 商品名が見つかった場合のみ取得
        })
        .join(", "); // 商品名をカンマ区切りの文字列に変換
      console.log(merchandiseNames);
      // シャンプー, コンディショナー

      // 顧客に関連するヘアスタイルの情報を取得
      const customerHairstyles = customer_hairstyles.filter(
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
        name: customer.name,
        phone_number: customer.phone_number,
        remarks: customer.remarks,
        new_customer: customer.new_customer,
        course_name: courseNames,
        option_name: optionNames,
        product_name: merchandiseNames,
        hairstyle_name: hairstyleNames,
        attendance_name: attendanceNames,
        updated_at: customer.updated_at,
      };
    }),
  ];
  return (
    <div>
      <h1>Customers</h1>
      <Link href="/customers/create">新規作成</Link>
      <br />

      <Link href="/customers/[id]?id=1">詳細</Link>
      <br />

      <Link href="/customers/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/customers/[id]/delete?id=1">削除</Link>
      <br />

      <Link href="/customers/[id]/search?id=customer">検索</Link>
      <br />

      <Link href="/customers/[id]/schedule?id=1">予約</Link>

      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/customers"
      />
    </div>
  );
};

export default customers;
