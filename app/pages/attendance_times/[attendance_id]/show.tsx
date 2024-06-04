import Link from "next/link";
import ComponentTable from "../../../components/elements/table";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { selectGetAttendanceTimes } from "../../../store/attendances/attendance_times/attendance_timesSlice";

const attendanceTimes = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector(
    (state: RootState) => state.attendance_time.loading
  );

  const message = useSelector(
    (state: RootState) => state.attendance_time.message
  );

  const error = useSelector((state: RootState) => state.attendance_time.error);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const attendanceTimes = useSelector(
    (state: RootState) => state.attendance_time.attendance_times
  );

  useEffect(() => {
    try {
      if (attendanceTimes.length === 0 && id)
        dispatch(selectGetAttendanceTimes(Number(id)) as any);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("勤怠情報取得！！");
    }
  }, [id]);

  const attendance = useSelector((state: RootState) =>
    state.attendance.attendances.find(
      (attendance) => attendance.id === Number(id)
    )
  );
  console.log(attendance);

  const searchItems = [
    { key: "start_time", value: "出勤時間" },
    { key: "end_time", value: "退勤時間" },
  ];

  const tHeaderItems = [
    "出勤時間",
    "出勤画像",
    "退勤時間",
    "退勤画像",
    "出勤時間と写真を編集",
    "退勤時間と写真を編集",
    "削除",
  ];
  const nodesProps = [
    { string: "start_time" },
    { string: "start_photo_path" },
    { string: "end_time" },
    { string: "end_photo_path" },
  ];

  const nodes = attendanceTimes;

  return (
    <div>
      {message && <p className="text-blue-700 ml-4 my-4">{message}</p>}
      {error && <p className="text-red-700 ml-4 my-4">{error}</p>}
      <Link href="/attendance_times/create">新規作成</Link>
      <br />

      <Link href="/attendance_times/[attendance_id]/edit?attendance_id=1">
        勤怠時間編集
      </Link>

      <br />
      <Link href="/attendance_times/[attendance_id]?attendance_id=1">
        全体へ戻る
      </Link>

      <br />
      {loading ? (
        <p>loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/attendance_times"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default attendanceTimes;
