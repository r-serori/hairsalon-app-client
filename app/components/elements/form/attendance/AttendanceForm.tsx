import React, { useState } from "react";
import AuthInput from "../../input/AuthInput";

interface AttendanceFormProps {
  onSubmit: (formData: {
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
    loading: boolean;
    error: string | null;
  }) => void;
}

const AttendanceForm: React.FC<AttendanceFormProps> = ({ onSubmit }) => {
  const [attendance_name, setAttendanceName] = useState("");
  const [position, setPosition] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      attendance_name,
      position,
      phone_number,
      address,
      loading: false,
      error: null,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            スタッフ登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <AuthInput
            type="text"
            placeholder="スタッフ名"
            value={attendance_name}
            onChange={(e) => setAttendanceName(e.target.value)}
          />

          <AuthInput
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />

          <AuthInput
            type="text"
            placeholder="Phone Number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <AuthInput
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit" className="...">
            作成
          </button>
        </form>
      </div>
    </div>
  );
};

export default AttendanceForm;
