import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAttendance,
  setLoading,
} from "../../../store/attendances/attendanceSlice";
import { RootState } from "../../../redux/reducers/rootReducer";
import { useRouter } from "next/router";

const courseCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return <div></div>;
};

export default courseCreate;
