import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";

interface AuthRegisterFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    password: string;
    role: string;
    // confirmPassword: string;
  }) => void;
  errorMessage: string;
  ownerId: number | null;
}

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = ({
  onSubmit,
  errorMessage,
  ownerId,
}) => {
  const [name, setName] = useState("tester");
  const [email, setEmail] = useState("bbb@hairsaron.com");
  const [password, setPassword] = useState("password123");
  const [role, setRole] = useState(ownerId ? "オーナー" : "スタッフ");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }

    onSubmit({
      name: name,
      email: email,
      password: password,
      role: role,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウント登録
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {errorMessage && (
            <p className="text-red-600 text-center">{errorMessage}</p>
          )}

          <BasicTextField
            type="text"
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <SingleCheckBox
            label="役職"
            value={role}
            onChange={(newValue) => setRole(newValue)}
            getOptions={ownerId ? ["マネージャー", "スタッフ"] : ["オーナー"]}
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
