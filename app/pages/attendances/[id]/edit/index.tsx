import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  updateAttendance,
  getAttendanceById,
} from "../../../../store/attendances/attendanceSlice";
import { RootState } from "../../../../redux/store";
import AttendanceForm from "../../../../components/elements/form/attendances/AttendanceForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../../components/elements/button/BackAgainButton";

const attenDanceEdit = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.attendance.loading);
  const router = useRouter();

  const attendance = useSelector(
    (state: RootState) => state.attendance.attendances
  );
  console.log(attendance);

  useEffect(() => {
    const { EditId } = router.query; // idを取得
    console.log("EditIdだよ");
    console.log(EditId);
    dispatch(getAttendanceById(parseInt(EditId as string)) as any);
  }, [dispatch, router.query]);

  return (
    <div>
      <BackAgainButton link={"/attendances"} />
    </div>
  );
};

export default attenDanceEdit;
