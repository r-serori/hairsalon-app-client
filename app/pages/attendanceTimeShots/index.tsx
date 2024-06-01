import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAttendance } from "../../store/attendances/attendanceSlice";
import { RootState } from "../../redux/store";

const AttendanceTimeShots = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getAttendance({}) as any);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("出席情報取得！！");
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.attendance.loading);

  const message = useSelector((state: RootState) => state.attendance.message);

  const attendances = useSelector(
    (state: RootState) => state.attendance.attendances
  );

  const error = useSelector((state: RootState) => state.attendance.error);

  const searchItems = [
    { key: "shotAttendance_name", value: "名前" },
    { key: "shotPosition", value: "役職" },
    ,
  ];

  const tHeaderItems = ["名前", "役職", "勤務中？", "出勤", "退勤"];

  const nodesProps = [
    { text: "shotAttendance_name" },
    { text: "shotPosition" },
    { text: "isAttendance" },
  ];

  const nodes = attendances.map((attendance) => {
    return {
      id: attendance.id,
      shotAttendance_name: attendance.attendance_name,
      shotPosition: attendance.position,
      isAttendance: attendance.isAttendance ? "勤務中" : "退勤中",
    };
  });

  return (
    <div className="mx-auto max-w-6xl px-4">
      {message ? (
        <p className="py-4 text-blue-700">{message}</p>
      ) : error ? (
        <p className="py-4 text-red-700">{error}</p>
      ) : null}

      <ComponentTable
        nodes={nodes}
        searchItems={searchItems}
        tHeaderItems={tHeaderItems}
        nodesProps={nodesProps}
        link="/attendanceTimeShots"
        isLoading={loading}
      />
    </div>
  );
};

export default AttendanceTimeShots;
