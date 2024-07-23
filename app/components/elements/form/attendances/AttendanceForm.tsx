import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import { UserState } from "../../../../store/auth/userSlice";
import { RoleState } from "../../../Hooks/interface";
import BasicNumberField from "../../input/BasicNumberField";

interface UserUpdateFormProps {
  onSubmit: (formData: { id: number; role: RoleState }) => void;
  node: UserState;
}

const UserUpdateForm: React.FC<UserUpdateFormProps> = ({ onSubmit, node }) => {
  const [name, setName] = useState<string>(node && node ? node.name : "");
  const [phone_number, setPhoneNumber] = useState<string>(
    node && node ? node.phone_number : ""
  );
  const [role, setRole] = useState<RoleState>(
    (node && node.role) || "スタッフ"
  );

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
            id={node.id}
            placeholder="名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={true}
            decideLength={50}
          />

          <BasicNumberField
            id={node.id}
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={true}
            maxNumber={999999999999999}
            format={false}
          />

          <SingleCheckBox
            value={role}
            onChange={(newValue: RoleState) => setRole(newValue)}
            getOptions={["マネージャー", "スタッフ"]}
          />

          <PrimaryButton value="スタッフ情報更新" />
        </form>
      </div>
    </div>
  );
};

export default UserUpdateForm;
