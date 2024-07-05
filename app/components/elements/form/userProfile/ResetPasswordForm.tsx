import React, { useEffect, useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import { showUser } from "../../../../store/auth/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import PasswordField from "../../input/PasswordField";
import EmailField from "../../input/EmailField";

interface ResetPasswordFormProps {
  onSubmitResetPassword: (formData: { password: string }) => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onSubmitResetPassword,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("newPassword_123");
  const [confirmPassword, setConfirmPassword] = useState("newPassword_123");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const handleSubmitResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (email　!== user.email) {
    //   alert("メールアドレスが間違えています。");
    //   return;
    // }
    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }

    if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
      return;
    }

    onSubmitResetPassword({
      password: password,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-6 mt-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            パスワードリセット
          </h2>
        </div>

        <form onSubmit={handleSubmitResetPassword} className="mt-8 space-y-6">
          <EmailField
            id={0}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onValidationChange={(isValid) => setIsEmailValid(isValid)}
          />

          <PasswordField
            id={0}
            placeholder="新しいパスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onValidationChange={(isValid) => setIsPasswordValid(isValid)}
          />
          {/* 
          <BasicTextField
            type="text"
            placeholder="新しいパスワード確認"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onValidationChange={(isValid) => setIsConfirmPasswordValid(isValid)}
          /> */}

          <PrimaryButton value="登録" />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
