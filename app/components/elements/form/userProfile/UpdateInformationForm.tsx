import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import EmailField from "../../input/EmailField";
import BasicNumberField from "../../input/BasicNumberField";

interface UpdateInformationFormProps {
  node: {
    name: string;
    email: string;
    phone_number: string;
  };
  onSubmitUserInformation: (formData: {
    name: string;
    email: string;
    phone_number: string;
  }) => void;
}

const UpdateInformationForm: React.FC<UpdateInformationFormProps> = ({
  node,
  onSubmitUserInformation,
}) => {
  const [name, setName] = useState<string>(node.name);
  const [email, setEmail] = useState<string>(node.email);
  const [phone_number, setPhoneNumber] = useState<string>(node.phone_number);
  const [edit, setEdit] = useState(false);

  const [nameValidate, setNameValidate] = useState<boolean>(true);
  const [emailValidate, setEmailValidate] = useState<boolean>(true);
  const [phone_numberValidate, setPhoneNumberValidate] =
    useState<boolean>(true);

  const handleSubmitStaff = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("パスワードが一致しません");
    //   return;
    // }

    if (!nameValidate || !emailValidate || !phone_numberValidate) {
      return;
    }
    onSubmitUserInformation({
      name: name,
      email: email,
      phone_number: phone_number,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-lg w-full space-y-6 mt-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {edit
              ? "あなたのプロフィール情報を編集"
              : "あなたのプロフィール情報"}
          </h2>
        </div>
        <div className="flex justify-center items-center text-center mx-auto pb-1">
          <button
            className="items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center "
            onClick={() => setEdit(!edit)}
          >
            編集
          </button>
        </div>

        <form onSubmit={handleSubmitStaff} className="mt-8 space-y-6">
          <BasicTextField
            id={0}
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={edit ? false : true}
            onValidationChange={(isValid) => setNameValidate(isValid)}
          />

          <EmailField
            id={0}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={edit ? false : true}
            onValidationChange={(isValid) => setEmailValidate(isValid)}
          />

          <BasicNumberField
            id={0}
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={edit ? false : true}
            onValidationChange={(isValid) => setPhoneNumberValidate(isValid)}
            format={false}
            maxNumber={999999999999999}
          />

          <PrimaryButton value="登録" />
        </form>
      </div>
    </div>
  );
};

export default UpdateInformationForm;
