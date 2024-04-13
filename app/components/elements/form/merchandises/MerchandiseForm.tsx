import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";

interface MerchandiseFormProps {
  onSubmit: (formData: {
    id: number;
    merchandise_name: string;
    price: number;
    created_at: Date;
    updated_at: Date;
    loading: boolean;
    error: string | null;
  }) => void;
}

const merchandiseForm: React.FC<MerchandiseFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [merchandise_name, setMerchandiseName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      merchandise_name: merchandise_name,
      price: price,
      created_at: new Date(),
      updated_at: new Date(),
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
            placeholder="物販名"
            value={merchandise_name}
            onChange={(e) => setMerchandiseName(e.target.value)}
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

export default merchandiseForm;
