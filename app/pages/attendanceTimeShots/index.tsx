import Link from "next/link";
import { useState } from "react";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import { getAttendanceUsers } from "../../store/auth/authSlice";
import { UserPermission } from "../../components/Hooks/Permission";

const AttendanceTimeShots = () => {
  const [role, setRole] = useState<string>("");
  UserPermission(setRole);
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.auth.auth);
  console.log("users", users);
  const loading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    try {
      const ownerId = Number(localStorage.getItem("owner_id"));
      dispatch(getAttendanceUsers(ownerId) as any);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("出席情報取得！！");
    }
  }, [dispatch]);

  const message = useSelector((state: RootState) => state.auth.message);

  const timeLoading = useSelector(
    (state: RootState) => state.attendance_time.loading
  );

  const timeMessage = useSelector(
    (state: RootState) => state.attendance_time.message
  );

  const error = useSelector((state: RootState) => state.auth.error);

  const timeError = useSelector(
    (state: RootState) => state.attendance_time.error
  );

  const searchItems = [{ key: "shotUserName", value: "名前" }];

  const tHeaderItems = ["名前", "勤務中？", "出勤", "退勤"];

  const nodesProps = [{ text: "shotUserName" }, { text: "attendanceNow" }];

  const nodes = users.map((user) => {
    return {
      id: user.id,
      shotUserName: user.name,
      attendanceNow: user.isAttendance ? "勤務中" : "退勤中",
      isAttendance: user.isAttendance,
    };
  });
  console.log("nodes", nodes);

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
        {timeLoading || !nodes ? (
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
