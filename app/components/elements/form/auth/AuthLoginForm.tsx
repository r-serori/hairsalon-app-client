import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";

interface AuthLoginFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const AuthLoginForm: React.FC<AuthLoginFormProps> = ({ onSubmit }) => {
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
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-6 mt-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ログイン画面
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
