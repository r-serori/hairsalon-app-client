import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import EmailField from "../../input/EmailField";
import BasicNumberField from "../../input/BasicNumberField";
import PasswordField from "../../input/PasswordField";

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
  const [name, setName] = useState<string>("testerOwner");
  const [email, setEmail] = useState<string>("testerOwner@hairsaron.com");
  const [phone_number, setPhoneNumber] = useState<string>("08012345678");
  const [password, setPassword] = useState<string>("password123");
  const [confirmPassword, setConfirmPassword] = useState<string>("password123");

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
      <div className="max-w-md w-full space-y-6">
        <div>
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">
            ユーザー登録
          </h2>
        </div>

        <form onSubmit={handleSubmitOwner} className="mt-6 space-y-6">
          <BasicTextField
            id={0}
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            decideLength={50}
          />

          <EmailField
            id={1}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <BasicNumberField
            id={2}
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            maxNumber={999999999999999}
          />

          <PasswordField
            id={3}
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PasswordField
            id={4}
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
