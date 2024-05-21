import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";

interface AuthRegisterFormProps {
  onSubmit: (formData: {
    id: number;
    login_id: string;
    password: string;
    created_at: string;
    updated_at: string;
    // confirmPassword: string;
  }) => void;
  errorMessage: string;
}

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = ({
  onSubmit,
  errorMessage,
}) => {
  const [login_id, setLogin_id] = useState("tester");
  const [password, setPassword] = useState("password123");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }

    onSubmit({
      id: 0,
      login_id: login_id,
      password: password,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウント登録
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {errorMessage && (
            <p className="text-red-600 text-center">{errorMessage}</p>
          )}
          <BasicTextField
            type="text"
            placeholder="ログインID"
            value={login_id}
            onChange={(e) => setLogin_id(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <BasicTextField
            type="password"
            placeholder="確認用Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /> */}

          <PrimaryButton value="登録" />
        </form>
      </div>
    </div>
  );
};

export default AuthRegisterForm;
