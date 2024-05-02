import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

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
