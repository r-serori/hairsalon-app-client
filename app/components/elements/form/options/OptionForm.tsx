import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { OptionState } from "../../../../store/options/optionSlice";
import BasicNumberField from "../../input/BasicNumberField";

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
  const [option_name, setOptionName] = useState<string>(
    node ? node.option_name : ""
  );
  const [price, setPrice] = useState<number>(node ? node.price : 0);

  const [optionNameValidate, setOptionNameValidate] = useState<boolean>(
    node.option_name ? true : false
  );
  const [priceValidate, setPriceValidate] = useState<boolean>(
    node.price ? true : false
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!optionNameValidate || !priceValidate) {
      return;
    }
    createOption({
      id: node ? node.id : 0,
      option_name: option_name,
      price: price,
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
            id={node ? node.id : 0}
            placeholder="オプション名"
            value={option_name}
            onChange={(e) => setOptionName(e.target.value)}
            onValidationChange={(isValid) => setOptionNameValidate(isValid)}
          />

          <BasicNumberField
            id={node ? node.id : 0}
            placeholder="価格"
            value={String(price)}
            onChange={(e) => setPrice(Number(e.target.value))}
            onValidationChange={(isValid) => setPriceValidate(isValid)}
            format={true}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default optionForm;
