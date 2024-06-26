import Link from "next/link";
import ComponentTable from "../../../components/elements/table";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { selectGetAttendanceTimes } from "../../../store/attendances/attendance_times/attendance_timesSlice";
import EasyModal from "../../../components/elements/modal/easy/EasyModal";
import { useState } from "react";
import usePageReload from "../../../components/Hooks/usePageReload";
import BasicAlerts from "../../../components/elements/alert/Alert";
import RouterButton from "../../../components/elements/button/RouterButton";
import { OwnerPermission } from "../../../components/Hooks/OwnerPermission";

const attendanceTimes: React.FC = () => {
  const [role, setRole] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  // 初回のみデータ取得を行うためのフラグ
  const [attendanceTimeOpen, setAttendanceTimeOpen] = useState(false);

  const status = useSelector(
    (state: RootState) => state.attendance_time.status
  );

  const message = useSelector(
    (state: RootState) => state.attendance_time.message
  );

  const error = useSelector((state: RootState) => state.attendance_time.error);

  const attendanceTimes = useSelector(
    (state: RootState) => state.attendance_time.attendance_times
  );

  const [yearMonth, setYearMonth] = useState("000111");

  const nowAttendanceTime = async () => {
    try {
      await dispatch(
        selectGetAttendanceTimes({
          user_id: Number(id),
          yearMonth: "000111",
        }) as any
      );
      setYearMonth("000111");
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    try {
      const role = localStorage.getItem("role");
      if (role === "オーナー") {
        setRole(role);
      } else {
        router.push("/dashboard");
      }
      if (attendanceTimes.length === 0 && id && role === "オーナー") {
        setYearMonth("000111");
        dispatch(
          selectGetAttendanceTimes({
            user_id: Number(id),
            yearMonth: yearMonth,
          }) as any
        );
      } else {
        return;
      }
    } catch (error) {
      // console.log(error);
    }
  }, [id, dispatch]);

  const user = useSelector((state: RootState) =>
    state.auth.auth.find((auth) => auth.id === Number(id))
  );
  console.log(user);

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
  console.log("nodes", nodes);

  return (
    <div>
      <div>
        {message && (
          <BasicAlerts type="info" message={message} space={1} padding={0.6} />
        )}
        {error && (
          <BasicAlerts type="error" message={error} space={1} padding={0.6} />
        )}
      </div>
      <div className="flex justify-between my-4 mx-4">
        <div>
          <RouterButton link="/attendances" value="スタッフ画面へ戻る" />
        </div>
        <div>
          {yearMonth !== "000111" && (
            <button
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md text-bold px-4 py-2 text-center "
              onClick={() => {
                nowAttendanceTime();
              }}
            >
              現在の年月に戻す
            </button>
          )}
        </div>
        <div>
          <EasyModal
            open={attendanceTimeOpen}
            setOpen={setAttendanceTimeOpen}
            whoAreYou="attendanceTimes"
            whatIsYourId={Number(id)}
            setYearMonth={setYearMonth}
          />
        </div>
      </div>
      {status === "loading" ? (
        <p>loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/attendance_times"
          role={role}
        />
      )}
    </div>
  );
};

export default attendanceTimes;
