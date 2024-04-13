import React from "react";
import FullCalendar from "@fullcalendar/react"; // FullCalendarのReactコンポーネント
import dayGridPlugin from "@fullcalendar/daygrid"; // FullCalendarのDayGridプラグイン

const MyCalendar = (events) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth" // カレンダーの初期表示を指定
      events={[
        { title: "イベント1", date: "2024-04-01" },
        { title: "イベント2", date: "2024-04-02" },
      ]} // イベントデータを指定
    />
  );
};

export default MyCalendar;
