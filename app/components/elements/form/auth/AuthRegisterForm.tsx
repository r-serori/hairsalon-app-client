import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";

interface AuthRegisterFormProps {
  onSubmitOwner: (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    isAttendance: boolean;
    password_confirmation: string;
  }) => void;
}

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = ({
  onSubmitOwner,
}) => {
  const [name, setName] = useState("testerOwner");
  const [email, setEmail] = useState("testerOwner@hairsaron.com");
  const [phone_number, setPhoneNumber] = useState("08012345678");
  const [password, setPassword] = useState("password123");
  const [confirmPassword, setConfirmPassword] = useState("password123");

  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitOwner = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }
    onSubmitOwner({
      name: name,
      email: email,
      phone_number: phone_number,
      password: password,
      role: "オーナー",
      isAttendance: false,
      password_confirmation: confirmPassword,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-6 mt-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ユーザー登録
          </h2>
        </div>

        <form onSubmit={handleSubmitOwner} className="mt-8 space-y-6">
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

          <PrimaryButton value="登録" />
        </form>
      </div>
    </div>
  );
};

export default AuthRegisterForm;
