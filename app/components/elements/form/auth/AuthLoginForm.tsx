import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import EmailField from "../../input/EmailField";
import PasswordField from "../../input/PasswordField";
import ForgotPasswordButton from "../../button/ForgotPasswordButton";

interface AuthLoginFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const AuthLoginForm: React.FC<AuthLoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>("owner@hairmail.com");
  const [password, setPassword] = useState<string>("Password_123");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // フィールドのバリデーションをチェック
    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    onSubmit({
      email: email,
      password: password,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h2 className=" my-12 text-center text-3xl font-extrabold text-gray-900">
            ログイン画面
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12 mx-4">
          <EmailField
            id={0}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onValidationChange={(isValid) => setIsEmailValid(isValid)}
          />

          <PasswordField
            id={0}
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onValidationChange={(isValid) => setIsPasswordValid(isValid)}
          />

          <PrimaryButton value="ログイン" />
        </form>
      </div>
    </div>
  );
};

export default AuthLoginForm;
