import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";

interface HairstyleFormProps {
  onSubmit: (formData: {
    id: number;
    hairstyle_name: string;
    created_at: string;
    updated_at: string;
    loading: boolean;
    error: string | null;
  }) => void;
}

const hairstyleForm: React.FC<HairstyleFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [hairstyle_name, setHairstyleName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      hairstyle_name: hairstyle_name,
      created_at: "",
      updated_at: "",
      loading: false,
      error: null,
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            コース登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="hidden"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value))}
          />

          <BasicTextField
            type="text"
            placeholder="コース名"
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
