import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";

interface optionFormProps {
  onSubmit: (formData: {
    id: number;
    option_name: string;
    price: number;
    created_at: string;
    updated_at: string;
    loading: boolean;
    error: string | null;
  }) => void;
}

const optionForm: React.FC<optionFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [option_name, setOptionName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      option_name: option_name,
      price: price,
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
            placeholder="オプション名"
            value={option_name}
            onChange={(e) => setOptionName(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="価格"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default optionForm;
