import React, { useEffect, useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import { showUser } from "../../../../store/auth/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

interface ResetPasswordFormProps {
  onSubmitResetPassword: (formData: { password: string }) => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onSubmitResetPassword,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("newPassword123");

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

    onSubmitResetPassword({
      password: password,
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

        <form onSubmit={handleSubmitResetPassword} className="mt-8 space-y-6">
          <BasicTextField
            type="text"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="新しいパスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* 
          <BasicTextField
            type="text"
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

export default ResetPasswordForm;
