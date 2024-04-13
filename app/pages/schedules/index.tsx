import React from "react";
import Link from "next/link";
import MyCalendar from "../../components/elements/calender/CalenderComponent";

const schedules: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "山田太郎",
      start: new Date(2024, 3, 10, 12, 0),
      end: new Date(2024, 3, 10, 13, 0),
      price: 3000,
      course_name: "エステ,ヘッドスパ",
      option_name: "オプション1,オプション2",
      merchandise_name: "商品1,商品2",
      hairstyle_name: "ヘアスタイル1,ヘアスタイル2",
    },
    {
      id: 2,
      title: "山田太郎",
      start: new Date(2024, 3, 10, 14, 0),
      end: new Date(2024, 3, 10, 15, 0),
      price: 3000,
      course_name: "エステ,ヘッドスパ",
      option_name: "オプション1,オプション2",
      merchandise_name: "商品1,商品2",
      hairstyle_name: "ヘアスタイル1,ヘアスタイル2",
    },

    {
      id: 3,
      title: "山田太郎",
      start: new Date(2024, 3, 10, 16, 0),
      end: new Date(2024, 3, 10, 17, 0),
      price: 3000,
      course_name: "エステ,ヘッドスパ",
      option_name: "オプション1,オプション2",
      merchandise_name: "商品1,商品2",
      hairstyle_name: "ヘアスタイル1,ヘアスタイル2",
    },
  ];

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
