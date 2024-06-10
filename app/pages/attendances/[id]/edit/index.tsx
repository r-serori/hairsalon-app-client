import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAttendance,
  updateAttendance,
  getAttendanceById,
  AttendanceState,
} from "../../../../store/attendances/attendanceSlice";
import { RootState } from "../../../../redux/store";
import AttendanceForm from "../../../../components/elements/form/attendances/AttendanceForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import RouterButton from "../../../../components/elements/button/RouterButton";

const attenDanceEdit: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.attendance.loading);
  const router = useRouter();

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const attendance = useSelector((state: RootState) =>
    state.attendance.attendances.find(
      (attendance: AttendanceState) => attendance.id === parseInt(id as string)
    )
  );

  console.log("attendanceだよ");
  console.log(attendance);

  const handleUpdate = async (formData: {
    id: number;
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
    isAttendance: boolean;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      try {
        await dispatch(updateAttendance(formData) as any);
      } catch (error) {
        console.error(error);
      }
      router.push("/attendances"); // Redirect to the attendance list page after updating a attendance
    } catch (error) {
      console.error(error);
    } finally {
      router.push("/attendances"); // Redirect to the attendance list page after updating a attendance
    }
  };

  return (
    <div className="min-h-full ">
      <div className="mt-4 ml-4">
        <RouterButton link={"/attendances"} value="スタッフ画面に戻る" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AttendanceForm
          createAttendance={handleUpdate}
          node={attendance}
          edit={true}
        />
      )}
    </div>
  );
};

export default attenDanceEdit;
