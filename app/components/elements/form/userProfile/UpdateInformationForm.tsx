import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";

interface UpdateInformationFormProps {
  onSubmitUserInformation: (formData: {
    name: string;
    email: string;
    phone_number: string;
  }) => void;
}

const UpdateInformationForm: React.FC<UpdateInformationFormProps> = ({
  onSubmitUserInformation,
}) => {
  const [name, setName] = useState("testerStaff");
  const [email, setEmail] = useState("testerStaff@hairsaron.com");
  const [phone_number, setPhoneNumber] = useState("07012345678");

  const handleSubmitStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }
    onSubmitUserInformation({
      name: name,
      email: email,
      phone_number: phone_number,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-6 mt-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            プロフィール更新
          </h2>
        </div>

        <form onSubmit={handleSubmitStaff} className="mt-8 space-y-6">
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
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <PrimaryButton value="登録" />
        </form>
      </div>
    </div>
  );
};

export default UpdateInformationForm;
