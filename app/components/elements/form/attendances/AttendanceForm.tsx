import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";

interface AttendanceFormProps {
  onSubmit: (formData: {
    id: number;
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
    created_at: Date;
    updated_at: Date;
    loading: boolean;
    error: string | null;
  }) => void;
}

const AttendanceForm: React.FC<AttendanceFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [attendance_name, setAttendanceName] = useState("");
  const [position, setPosition] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      attendance_name: attendance_name,
      position: position,
      phone_number: phone_number,
      address: address,
      created_at: new Date(),
      updated_at: new Date(),
      loading: false,
      error: null,
    });
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
          <input
            type="hidden"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value))}
          />
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
            onChange={(e) => setPosition(e.target.value)}
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
