import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";

interface AuthLoginFormProps {
  onSubmit: (formData: {
    id: number;
    login_id: string;
    password: string;
    created_at: string;
    updated_at: string;
  }) => void;
  errorMessage: string;
}

const AuthLoginForm: React.FC<AuthLoginFormProps> = ({
  onSubmit,
  errorMessage,
}) => {
  const [login_id, setLogin_id] = useState("tanaka123");
  const [password, setPassword] = useState("password123");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: 0,
      login_id: login_id,
      password: password,
      created_at: "",
      updated_at: "",
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
            placeholder="ログインID"
            value={login_id}
            onChange={(e) => setLogin_id(e.target.value)}
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
