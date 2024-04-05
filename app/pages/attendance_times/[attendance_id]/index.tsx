import Link from "next/link";

const attendanceTimes = () => {
  return (
    <div>
      <h1>Attendance Times</h1>

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
    </div>
  );
};

export default attendanceTimes;
