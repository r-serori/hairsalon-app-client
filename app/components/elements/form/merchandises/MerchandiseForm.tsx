import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { MerchandiseState } from "../../../../store/merchandises/merchandiseSlice";

interface MerchandiseFormProps {
  node?: MerchandiseState;
  createMerchandise: (formData: MerchandiseState) => void;
}

const merchandiseForm: React.FC<MerchandiseFormProps> = ({
  node,
  createMerchandise,
}) => {
  const [merchandise_name, setMerchandiseName] = useState(
    node ? node.merchandise_name : ""
  );
  const [price, setPrice] = useState(node ? node.price : 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMerchandise({
      id: node ? node.id : 0,
      merchandise_name: merchandise_name,
      price: price,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 pt-12 py-80 px-4 sm:px-6 lg:px-8 min-h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            物販登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
