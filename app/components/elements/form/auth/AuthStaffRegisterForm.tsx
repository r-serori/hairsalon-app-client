import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";

interface AuthStaffRegisterFormProps {
  onSubmitStaff: (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    isAttendance: boolean;
  }) => void;
}

const AuthStaffRegisterForm: React.FC<AuthStaffRegisterFormProps> = ({
  onSubmitStaff,
}) => {
  const [name, setName] = useState<string>("testerStaff");
  const [email, setEmail] = useState<string>("testerStaff@hairsaron.com");
  const [phone_number, setPhoneNumber] = useState<string>("07012345678");
  const [password, setPassword] = useState<string>("password123");
  const [role, setRole] = useState<string>("スタッフ");
  const [confirmPassword, setConfirmPassword] = useState<string>("password123");

  const handleSubmitStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }

    onSubmitStaff({
      name: name,
      email: email,
      phone_number: phone_number,
      password: password,
      role: role,
      isAttendance: false,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-6 mt-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            スタッフ登録
          </h2>
        </div>

        <form onSubmit={handleSubmitStaff} className="mt-8 space-y-6">
          <BasicTextField
            type="text"
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="パスワード確認"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <SingleCheckBox
            label="役職"
            value={role}
            onChange={(newValue) => setRole(newValue)}
            getOptions={["マネージャー", "スタッフ"]}
          />

          <PrimaryButton value="登録" />
        </form>
      </div>
    </div>
  );
};

export default AuthStaffRegisterForm;
