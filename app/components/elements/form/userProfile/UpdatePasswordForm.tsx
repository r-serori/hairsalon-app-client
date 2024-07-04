import React, { useEffect, useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import { showUser } from "../../../../store/auth/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import PasswordField from "../../input/PasswordField";

interface UpdatePasswordFormProps {
  onSubmitUpdatePassword: (formData: {
    current_password: string;
    password: string;
  }) => void;
}

const UpdatePasswordForm: React.FC<UpdatePasswordFormProps> = ({
  onSubmitUpdatePassword,
}) => {
  const [current_password, setCurrentPassword] = useState("password123");
  const [password, setPassword] = useState("newPassword123");
  const [confirmPassword, setConfirmPassword] = useState("newPassword123");

  const handleSubmitStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }

    onSubmitUpdatePassword({
      current_password: current_password,
      password: password,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-6 mt-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            パスワード更新
          </h2>
        </div>

        <form onSubmit={handleSubmitStaff} className="mt-8 space-y-6">
          <PasswordField
            id={0}
            placeholder="現在のパスワード"
            value={current_password}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <PasswordField
            id={0}
            placeholder="新しいパスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* 
          <PasswordField
           id={0}
            placeholder="新しいパスワード確認"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /> */}

          <PrimaryButton value="登録" />
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
