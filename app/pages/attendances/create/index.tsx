import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAttendance,
  getAttendance,
} from "../../../store/attendances/attendanceSlice";
import { RootState } from "../../../redux/store";
import AttendanceForm from "../../../components/elements/form/attendances/AttendanceForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/BackAgainButton";

const attendanceCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.attendance.loading);

  const handleCreate = async (formData: {
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
      await dispatch(createAttendance(formData) as any);
    } catch (error) {
      console.error(error);
    } finally {
      router.push("/attendances"); // Redirect to the attendance list page after creating a attendance
    }
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/attendances"} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AttendanceForm createAttendance={handleCreate} />
      )}
    </div>
  );
};

export default attendanceCreate;
