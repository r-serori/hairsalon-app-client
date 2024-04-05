import Link from "next/link";
import { use } from "react";

const searchDate = () => {
  <div>
    <div>search attendance_timeDate</div>
    <Link href="/attendance_times/[attendance_id]?attendance_id=1">
      勤怠時間
    </Link>
  </div>;
};

export default searchDate;
