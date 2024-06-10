import Link from "next/link";
import { useState } from "react";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAttendance } from "../../store/attendances/attendanceSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";

const AttendanceTimeShots = () => {
  const dispatch = useDispatch();

  const attendances = useSelector(
    (state: RootState) => state.attendance.attendances
  );

  useEffect(() => {
    try {
      if (attendances.length === 0) {
        dispatch(getAttendance({}) as any);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("出席情報取得！！");
    }
  }, []);

  const loading = useSelector((state: RootState) => state.attendance.loading);

  const message = useSelector((state: RootState) => state.attendance.message);

  const timeLoading = useSelector(
    (state: RootState) => state.attendance_time.loading
  );

  const timeMessage = useSelector(
    (state: RootState) => state.attendance_time.message
  );

  const error = useSelector((state: RootState) => state.attendance.error);

  const timeError = useSelector(
    (state: RootState) => state.attendance_time.error
  );

  const searchItems = [
    { key: "shotAttendance_name", value: "名前" },
    { key: "shotPosition", value: "役職" },
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
    <div>
      <div>
        {timeMessage && (
          <BasicAlerts
            type="success"
            message={timeMessage}
            space={1}
            padding={0.6}
          />
        )}
        {timeError && (
          <BasicAlerts
            type="error"
            message={timeError}
            space={1}
            padding={0.6}
          />
        )}
      </div>
      <div className="mx-8 mt-4">
        {timeLoading ? (
          <p className="py-4 text-blue-700">Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            tHeaderItems={tHeaderItems}
            nodesProps={nodesProps}
            link="/attendanceTimeShots"
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default AttendanceTimeShots;
