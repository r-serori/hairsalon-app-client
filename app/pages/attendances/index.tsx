import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAttendance } from "../../store/attendances/attendanceSlice";
import { RootState } from "../../redux/store";

const Attendances = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.attendance.loading);

  const attendances = useSelector(
    (state: RootState) => state.attendance.attendances
  );
  console.log(attendances);

  useEffect(() => {
    dispatch(getAttendance() as any);
  }, [dispatch]);

  const tHeaderItems = [
    "名前",
    "電話番号",
    "役職",
    "住所",
    "編集",
    "削除",
    "時間管理",
  ];
  const nodesProps = [
    { text: "attendance_name" },
    { number: "phone_number" },
    { text: "position" },
    { text: "address" },
  ];

  // nodesにattendancesをマップして処理
  const nodes = attendances;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 ">
      <div className="flex space-x-4 mb-4">
        <Link href="/attendances/create" className="btn">
          新規作成
        </Link>
        <Link href="/attendances/[id]?id=1" className="btn">
          詳細
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/attendances"
        />
      )}
    </div>
  );
};

export default Attendances;
