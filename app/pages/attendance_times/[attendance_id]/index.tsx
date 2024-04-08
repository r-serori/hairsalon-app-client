import Link from "next/link";
import ComponentTable from "../../../components/elements/table";

const attendanceTimes = () => {
  const tHeaderItems = [
    "日付",
    "出勤時間",
    "退勤時間",
    "休憩",
    "更新日",
    "編集",
    "削除",
  ];
  const nodesProps = [
    { date: "date" },
    { time: "start_time" },
    { time: "end_time" },
    { number: "break_time" },
    { date: "updated_at" },
  ];

  const nodes = [
    {
      id: 1,
      date: "2024-01-01",
      start_time: "00:11:22",
      end_time: "22:33:44",
      break_time: "1",
      updated_at: "2024-01-01",
    },
    {
      id: 2,
      date: "2022-01-02",
      start_time: "00:11:22",
      end_time: "22:33:44",
      break_time: "1",
      updated_at: "2022-01-02",
    },

    // 他の行データもここに追加する
  ];

  return (
    <div>
      <Link href="/attendance_times/create">新規作成</Link>
      <br />

      <Link href="/attendance_times/[attendance_id]/edit?attendance_id=1">
        勤怠時間編集
      </Link>
      <br />

      <Link href="/attendance_times/[attendance_id]/delete?attendance_id=1">
        勤怠時間削除
      </Link>

      <br />

      <Link href="/attendance_times/[attendance_id]/search/[search_date]?attendance_id=1&search_date=yyyy-mm">
        勤怠時間検索
      </Link>

      <br />
      <Link href="/attendance_times/[attendance_id]?attendance_id=1">
        全体へ戻る
      </Link>

      <br />
      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/attendance_times"
      />
    </div>
  );
};

export default attendanceTimes;
