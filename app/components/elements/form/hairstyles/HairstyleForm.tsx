import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { HairstyleState } from "../../../../store/hairstyles/hairstyleSlice";

interface HairstyleFormProps {
  node?: HairstyleState;
  createHairstyle: (formData: HairstyleState) => void;
}

const hairstyleForm: React.FC<HairstyleFormProps> = ({
  node,
  createHairstyle,
}) => {
  const [hairstyle_name, setHairstyleName] = useState(
    node ? node.hairstyle_name : ""
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createHairstyle({
      id: node ? node.id : 0,
      hairstyle_name: hairstyle_name,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 pt-12 py-80 px-4 sm:px-6 lg:px-8 min-h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            髪型登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <BasicTextField
            type="text"
            placeholder="髪型名"
            value={hairstyle_name}
            onChange={(e) => setHairstyleName(e.target.value)}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default hairstyleForm;
