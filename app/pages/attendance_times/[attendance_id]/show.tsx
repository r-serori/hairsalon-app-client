import ComponentTable from "../../../components/elements/table";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  Attendance_timeState,
  selectGetAttendanceTimes,
} from "../../../store/attendances/attendance_times/attendance_timesSlice";
import EasyModal from "../../../components/elements/modal/easy/EasyModal";
import { useState } from "react";
import BasicAlerts from "../../../components/elements/alert/Alert";
import RouterButton from "../../../components/elements/button/RouterButton";
import {
  attendance_timeError,
  attendance_timeMessage,
  attendance_timesStore,
  attendance_timeStatus,
} from "../../../components/Hooks/selector";
import {
  userKey,
  permissionStore,
} from "../../../components/Hooks/authSelector";
import { ownerPermission } from "../../../components/Hooks/useMethod";
import { allLogout } from "../../../components/Hooks/useMethod";
import _ from "lodash";
import { PermissionsState } from "../../../store/auth/permissionSlice";

const attendanceTimes: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  // 初回のみデータ取得を行うためのフラグ
  const [attendanceTimeOpen, setAttendanceTimeOpen] = useState<boolean>(false);

  const atStatus: string = useSelector(attendance_timeStatus);

  const atMessage: string | null = useSelector(attendance_timeMessage);

  const atError: string | null = useSelector(attendance_timeError);

  const attendanceTimes: Attendance_timeState[] = useSelector(
    attendance_timesStore
  );

  const [yearMonth, setYearMonth] = useState<string>("000111");

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
      console.error("Error:", error);
      allLogout(dispatch);
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        ownerPermission(permission, router);

        if (
          _.isEmpty(attendanceTimes) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          setYearMonth("000111");
          await dispatch(
            selectGetAttendanceTimes({
              user_id: Number(id),
              yearMonth: yearMonth,
            }) as any
          );
        } else {
          return;
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };
    fetchData();
  }, [dispatch]);

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

  const nodes: Attendance_timeState[] = attendanceTimes;
  console.log("nodes", nodes);

  return (
    <div>
      <div>
        {atMessage && (
          <BasicAlerts
            type="info"
            message={atMessage}
            space={1}
            padding={0.6}
          />
        )}
        {atError && (
          <BasicAlerts type="error" message={atError} space={1} padding={0.6} />
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
      {atStatus === "loading" ? (
        <p>loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/attendance_times"
          role={permission}
        />
      )}
    </div>
  );
};

export default attendanceTimes;
