import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";

interface AuthLoginFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
  errorMessage: string;
}

const AuthLoginForm: React.FC<AuthLoginFormProps> = ({
  onSubmit,
  errorMessage,
}) => {
  const [email, setEmail] = useState("owner@hairmail.com");
  const [password, setPassword] = useState("password123");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      email: email,
      password: password,
    });
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8  pb-60 pt-20">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウント登録
          </h1>
        </div>
        {errorMessage && (
          <p className="text-red-600 text-center">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <BasicTextField
            type="text"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <BasicTextField
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PrimaryButton value="ログイン" />
        </form>
      </div>
    </div>
  );
};

export default AuthLoginForm;
