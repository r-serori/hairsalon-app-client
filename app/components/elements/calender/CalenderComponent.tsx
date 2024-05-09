import { Calendar, EventInput } from "@fullcalendar/core";
import luxonPlugin from "@fullcalendar/luxon3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { DateTime } from "luxon";
import FullCalendar from "@fullcalendar/react";
import ScheduleModal from "../modal/scheduleModal";
import { useState } from "react";

interface Event {
  id: number;
  title: string;
  start: string;
  end: string;
  allDay: number;
}

const MyCalendar: React.FC<{ events: Event[] }> = ({ events }) => {
  const eventInputs: EventInput[] = events.map((event) => ({
    id: event.id.toString(),
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay === 1 ? true : false,
  }));

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [whoIsEvent, setWhoIsEvent] = useState("");

  const handleEventClick = (e) => {
    setSelectedEvent(e);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <FullCalendar
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear", //,listWeek,listDayは追加したかったらする
        }} //ここでカレンダーのヘッダーを設定している
        buttonText={{
          today: "今日",
          month: "月",
          week: "週",
          day: "日",
          multiMonthYear: "年",
        }} //カレンダーのボタンの名前を設定している
        dayMaxEventRows={true} //カレンダーの月表示の際の一日のマスに重ねることができるイベントの最大数をtrueで指定できるように設定している。falseの場合、無制限に重ねることができる
        views={{
          // ↓dayGridMonth, dayGridWeek,dayGridDayの表示形式を設定している
          dayGrid: {
            dayMaxEventRows: 1, //カレンダーの月表示の際の一日のマスに重ねることができるイベントの最大数を設定している
            dayHeaderFormat: {
              weekday: "long",
            }, //headerに表示される曜日の表示形式を設定している。月表示には日付は不要なので設定していない
          },
          //↓timeGridWeek, timeGridDayの表示形式を設定している
          timeGrid: {
            dayHeaderFormat: {
              weekday: "short",
              month: "numeric",
              day: "numeric",
            }, //headerに表示される曜日の表示形式を設定している。週、日表示には日付も表示するように設定している
            slotLabelFormat: {
              hour: "numeric",
              minute: "2-digit",
            }, //カレンダーの左に表示されるの時間の表示形式を設定している
            slotDuration: "00:15:00", //カレンダーの横行の間隔の時間を設定している
            slotLabelInterval: "00:15:00", //カレンダーの左に表示されるの時間をどの間隔で表示するかを設定している
            slotMinTime: "07:00:00", //カレンダーの表示の開始時間を設定している
            slotMaxTime: "24:15:00", //カレンダーの表示の終了時間を設定している
            selectable: true, //カレンダーの時間をクリックした際にイベントを追加することができるように設定している
            selectMirror: true, //カレンダーの時間をクリックした際にイベントを追加する際にマウスで選択した時間を表示するかどうかを設定している
            dateClick: function (info) {
              handleEventClick(info);
              setWhoIsEvent("クリック");
            },
            select: function (info) {
              handleEventClick(info);
              setWhoIsEvent("選択");
            },
            eventClick: function (info) {
              console.log("info.eventだよ", info.event);
              handleEventClick(info.event);
              setWhoIsEvent("イベントクリック");
            },
          },
          multiMonth: {
            dayHeaderFormat: {
              weekday: "short",
            },
          },
        }}
        businessHours={{
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6], //カレンダーの営業日を設定している
          startTime: "7:00", //カレンダーの営業開始時間を設定している
          endTime: "22:00", //カレンダーの営業終了時間を設定している
        }}
        weekNumbers={true} //カレンダーの週番号を表示するかどうかを設定している
        weekText="週" //カレンダーの週番号の表示形式を設定している
        navLinks={true} //カレンダーの日付をクリックした際にその日付のページに遷移するかどうかを設定している
        nowIndicator={true} //カレンダーの現在時刻を表示するかどうかを設定している
        eventMaxStack={5} //カレンダーの週、日の表示の際の一日のマスに重ねることができるイベントの最大数を設定している
        //カレンダーの曜日と月の表示形式を設定している
        contentHeight={600} //カレンダーの高さを設定している
        plugins={[
          dayGridPlugin,
          luxonPlugin,
          timeGridPlugin,
          listPlugin,
          multiMonthPlugin,
          interactionPlugin, //日付をクリックした際にイベントを追加することができるように設定できる。https://fullcalendar.io/docs/dateClick参照
        ]} //カレンダーのプラグインを設定している。増やしていくことで機能を追加できる
        initialView="dayGridMonth" //カレンダーの初期表示を設定している
        locale={"ja"}
        titleFormat={{ year: "numeric", month: "short" }} //カレンダーのタイトルの表示形式を設定している
        weekends={true} //カレンダーの土日の表示を設定している
        events={eventInputs}
      />

      {showModal && selectedEvent && (
        <ScheduleModal
          showModal={showModal}
          selectedEvent={selectedEvent}
          setShowModal={setShowModal}
          setSelectedEvent={setSelectedEvent}
          whoIsEvent={whoIsEvent}
        />
      )}
    </>
  );
};

export default MyCalendar;
