import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { MerchandiseState } from "../../../../store/merchandises/merchandiseSlice";

interface MerchandiseFormProps {
  node?: MerchandiseState;
  createMerchandise: (formData: MerchandiseState) => void;
  edit?: boolean;
}

const merchandiseForm: React.FC<MerchandiseFormProps> = ({
  node,
  createMerchandise,
  edit,
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
      owner_id: node ? node.owner_id : Number(localStorage.getItem("user_id")),
    });
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <div className="max-w-md w-full ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {edit ? "物販情報編集" : "物販情報作成"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <BasicTextField
            type="text"
            placeholder="物販名"
            value={merchandise_name}
            onChange={(e) => setMerchandiseName(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="価格"
            value={String(price)}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default merchandiseForm;
