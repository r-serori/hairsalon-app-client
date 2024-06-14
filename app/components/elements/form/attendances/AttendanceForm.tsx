import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import { AuthState } from "../../../../store/auth/authSlice";

interface UserUpdateFormProps {
  onSubmit: (formData: { id: number; role: string }) => void;
  node: AuthState;
}

const UserUpdateForm: React.FC<UserUpdateFormProps> = ({ onSubmit, node }) => {
  const [name, setName] = useState(node.name);
  const [phone_number, setPhoneNumber] = useState(node.phone_number);
  const [role, setRole] = useState(node.role);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      id: node.id,
      role: role,
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-md w-full space-y-6 mt-4">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ユーザー情報編集
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <BasicTextField
            type="text"
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={true}
          />

          <BasicTextField
            type="text"
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={true}
          />

          <SingleCheckBox
            label="役職"
            value={role}
            onChange={(newValue) => setRole(newValue)}
            getOptions={["マネージャー", "スタッフ"]}
          />

          <PrimaryButton value="スタッフ情報更新" />
        </form>
      </div>
    </div>
  );
};

export default UserUpdateForm;
