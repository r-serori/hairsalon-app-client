import Link from "next/link";
import ComponentTable from "../../../components/elements/table";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { selectGetAttendanceTimes } from "../../../store/attendances/attendance_times/attendance_timesSlice";
import { getAttendance } from "../../../store/attendances/attendanceSlice";
import EasyModal from "../../../components/elements/modal/easy/EasyModal";
import { useState } from "react";
import usePageReload from "../../../components/Hooks/usePageReload";
import BasicAlerts from "../../../components/elements/alert/Alert";

const attendanceTimes: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  usePageReload(() => {
    dispatch(getAttendance({}) as any);
  });

  const [attendanceTimeOpen, setAttendanceTimeOpen] = useState(false);

  const loading = useSelector(
    (state: RootState) => state.attendance_time.loading
  );

  const message = useSelector(
    (state: RootState) => state.attendance_time.message
  );

  const error = useSelector((state: RootState) => state.attendance_time.error);

  const attendanceTimes = useSelector(
    (state: RootState) => state.attendance_time.attendance_times
  );

  const nowAttendanceTime = async () => {
    await dispatch(
      selectGetAttendanceTimes({
        attendance_id: Number(id),
        yearMonth: "無し",
      }) as any
    );
    setYearMonth("無し");
  };

  const [yearMonth, setYearMonth] = useState("無し");

  useEffect(() => {
    try {
      if (attendanceTimes.length === 0 && id) {
        setYearMonth("無し");
        dispatch(
          selectGetAttendanceTimes({
            attendance_id: Number(id),
            yearMonth: yearMonth,
          }) as any
        );
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("勤怠情報取得！！");
    }
  }, [id, dispatch]);

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
      {message && (
        <BasicAlerts type="info" message={message} space={1} padding={0.6} />
      )}
      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      <Link href="/attendance_times/[attendance_id]?attendance_id=1">
        全体へ戻る
      </Link>
      <EasyModal
        open={attendanceTimeOpen}
        setOpen={setAttendanceTimeOpen}
        whoAreYou="attendanceTimes"
        whatIsYourId={Number(id)}
        setYearMonth={setYearMonth}
      />
      {yearMonth !== "無し" && (
        <button
          onClick={() => {
            nowAttendanceTime();
          }}
        >
          現在の年月に戻す
        </button>
      )}
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
