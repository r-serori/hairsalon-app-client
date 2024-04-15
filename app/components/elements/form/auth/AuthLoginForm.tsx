import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";

interface AuthFormProps {
  onSubmit: (formData: {
    login_id: string;
    password: string;
    created_at: string;
    updated_at: string;
  }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [login_id, setLogin_id] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      login_id: login_id,
      password: password,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="...">
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

      <button type="submit" className="...">
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
