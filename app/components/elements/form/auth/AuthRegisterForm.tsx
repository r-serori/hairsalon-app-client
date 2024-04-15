import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";

interface AuthRegisterFormProps {
  onSubmit: (formData: {
    login_id: string;
    password: string;
    created_at: string;
    updated_at: string;
    confirmPassword: string;
  }) => void;
}

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = ({ onSubmit }) => {
  const [login_id, setLogin_id] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("パスワードが一致しません");
      return;
    }

    onSubmit({
      login_id: login_id,
      password: password,
      confirmPassword: confirmPassword,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an Account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <BasicTextField
            type="text"
            placeholder="Login ID"
            value={login_id}
            onChange={(e) => setLogin_id(e.target.value)}
          />

          <BasicTextField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <BasicTextField
            type="password"
            placeholder="確認用Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="...">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthRegisterForm;
