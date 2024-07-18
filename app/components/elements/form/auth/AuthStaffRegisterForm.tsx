import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import EmailField from "../../input/EmailField";
import BasicNumberField from "../../input/BasicNumberField";
import PasswordField from "../../input/PasswordField";

interface AuthStaffRegisterFormProps {
  onSubmitStaff: (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    isAttendance: boolean;
  }) => void;
}

const AuthStaffRegisterForm: React.FC<AuthStaffRegisterFormProps> = ({
  onSubmitStaff,
}) => {
  const [name, setName] = useState<string>("testerStaff");
  const [email, setEmail] = useState<string>("testerStaff@hairsaron.com");
  const [phone_number, setPhoneNumber] = useState<string>("07012345678");
  const [password, setPassword] = useState<string>("Password_123");
  const [role, setRole] = useState<string>("スタッフ");
  const [confirmPassword, setConfirmPassword] =
    useState<string>("Password_123");

  const [nameValidate, setNameValidate] = useState<boolean>(true);
  const [emailValidate, setEmailValidate] = useState<boolean>(true);
  const [phone_numberValidate, setPhoneNumberValidate] =
    useState<boolean>(true);
  const [passwordValidate, setPasswordValidate] = useState<boolean>(true);
  const [confirmPasswordValidate, setConfirmPasswordValidate] =
    useState<boolean>(true);
  const [roleValidate, setRoleValidate] = useState<boolean>(true);

  const handleSubmitStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }

    if (
      !nameValidate ||
      !emailValidate ||
      !phone_numberValidate ||
      !passwordValidate ||
      !confirmPasswordValidate ||
      !roleValidate
    ) {
      return;
    }

    onSubmitStaff({
      name: name,
      email: email,
      phone_number: phone_number,
      password: password,
      role: role,
      isAttendance: false,
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

        <form onSubmit={handleSubmitStaff} className="mt-8 space-y-6">
          <BasicTextField
            id={0}
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onValidationChange={(isValid) => setNameValidate(isValid)}
          />

          <EmailField
            id={0}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onValidationChange={(isValid) => setEmailValidate(isValid)}
          />

          <BasicNumberField
            id={0}
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onValidationChange={(isValid) => setPhoneNumberValidate(isValid)}
            format={false}
          />

          <PasswordField
            id={0}
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onValidationChange={(isValid) => setPasswordValidate(isValid)}
          />

          <PasswordField
            id={1}
            placeholder="パスワード確認"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onValidationChange={(isValid) =>
              setConfirmPasswordValidate(isValid)
            }
          />

          <SingleCheckBox
            value={role}
            onChange={(newValue) => setRole(newValue)}
            getOptions={["マネージャー", "スタッフ"]}
            onValidationChange={(isValid) => setRoleValidate(isValid)}
          />

          <PrimaryButton value="登録" />
        </form>
      </div>
    </div>
  );
};

export default AuthStaffRegisterForm;
