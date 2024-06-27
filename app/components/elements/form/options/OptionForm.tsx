import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { OptionState } from "../../../../store/options/optionSlice";

interface OptionFormProps {
  node?: OptionState;
  createOption: (formData: OptionState) => void;
  edit?: boolean;
}

const optionForm: React.FC<OptionFormProps> = ({
  node,
  createOption,
  edit,
}) => {
  const [option_name, setOptionName] = useState(node ? node.option_name : "");
  const [price, setPrice] = useState(node ? node.price : 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createOption({
      id: node ? node.id : 0,
      option_name: option_name,
      price: price,
      owner_id: node ? node.owner_id : Number(localStorage.getItem("user_id")),
    });
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <div className="max-w-md w-full ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {edit ? "オプション情報編集" : "オプション情報新規作成"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <BasicTextField
            type="text"
            placeholder="オプション名"
            value={option_name}
            onChange={(e) => setOptionName(e.target.value)}
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

export default optionForm;
