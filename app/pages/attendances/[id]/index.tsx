import Link from "next/link";

const attenDanceShow = () => {
  return (
    <div>
      <h1>Attendance Show</h1>
      <Link href="/attendance_times/[attendance_id]?attendance_id=1">
        勤怠時間
      </Link>

      <br />
    </div>
  );
};

export default attenDanceShow;
