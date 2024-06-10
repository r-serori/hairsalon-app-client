import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAttendance } from "../../store/attendances/attendanceSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";

const Attendances = () => {
  const dispatch = useDispatch();

  const attendances = useSelector(
    (state: RootState) => state.attendance.attendances
  );
  console.log(attendances);

  useEffect(() => {
    try {
      if (attendances.length === 0) {
        dispatch(getAttendance({}) as any);
      } else {
        return;
      }
    } catch (error) {
      console.log("Error", error);
      return;
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.attendance.loading);

  const message = useSelector((state: RootState) => state.attendance.message);

  const error = useSelector((state: RootState) => state.attendance.error);

  const searchItems = [
    { key: "attendance_name", value: "名前" },
    { key: "phone_number", value: "電話番号" },
    { key: "position", value: "役職" },
    { key: "address", value: "住所" },
  ];

  const tHeaderItems = [
    "名前",
    "電話番号",
    "役職",
    "住所",
    "更新日",
    "編集",
    "削除",
    "時間管理",
  ];

  const nodesProps = [
    { text: "attendance_name" },
    { number: "phone_number" },
    { text: "position" },
    { text: "address" },
    { date: "updated_at" },
  ];

  // nodesにattendancesをマップして処理
  const nodes = attendances;

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      <div className="mx-8 mt-4">
        <div className="flex my-4 ml-2">
          <RouterButton link="/attendances/create" value="新規作成" />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/attendances"
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Attendances;
