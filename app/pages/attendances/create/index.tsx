import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAttendance,
  setLoading,
} from "../../../store/attendance/attendanceSlice";
import { RootState } from "../../../redux/reducers/rootReducer";
import AttendanceForm from "../../../components/elements/form/attendance/AttendanceForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/BackAgainButton";

const attendanceCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.attendance.loading);

  const handleCreate = async (formData: {
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
  }) => {
    try {
      dispatch(setLoading(true));
      await dispatch(createAttendance(formData) as any);
      router.push("/attendances"); // Redirect to the attendance list page after creating an attendance
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <BackAgainButton link={"/attendances"} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AttendanceForm onSubmit={handleCreate} />
      )}
    </div>
  );
};

export default attendanceCreate;
