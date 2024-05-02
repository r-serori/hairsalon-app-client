import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import rootReducer from "../../../../redux/reducers/rootReducer";
import {
  AttendanceState,
  RootState,
} from "../../../../store/attendances/attendanceSlice";

interface AttendanceFormProps {
  node?: AttendanceState;
  // createAttendanceアクションをプロパティとして持つ
  createAttendance: (formData: AttendanceState) => void;
}

const AttendanceForm: React.FC<AttendanceFormProps> = ({
  node,
  createAttendance,
}) => {
  const [attendance_name, setAttendanceName] = useState(
    node ? node.attendance_name : ""
  );
  const [position, setPosition] = useState(node ? node.position : "オーナー");
  const [phone_number, setPhoneNumber] = useState(
    node ? node.phone_number : ""
  );
  const [address, setAddress] = useState(node ? node.address : "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAttendance({
      id: node ? node.id : 0,
      attendance_name: attendance_name,
      position: position,
      phone_number: phone_number,
      address: address,
      created_at: "",
      updated_at: "",
    });
  };

  const handleChange = (newValue) => {
    setPosition(newValue);
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            スタッフ登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <BasicTextField
            type="text"
            placeholder="スタッフ名"
            value={attendance_name}
            onChange={(e) => setAttendanceName(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <SingleCheckBox
            label={"役職"}
            value={position}
            getOptions={["オーナー", "マネージャー", "社員"]}
            onChange={handleChange}
            nodeId={"position"}
          />

          <BasicTextField
            type="text"
            placeholder="住所"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default AttendanceForm;
