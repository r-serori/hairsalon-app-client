import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { MerchandiseState } from "../../../../store/merchandises/merchandiseSlice";
import BasicNumberField from "../../input/BasicNumberField";

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
  const [merchandise_name, setMerchandiseName] = useState<string>(
    node ? node.merchandise_name : ""
  );
  const [price, setPrice] = useState<number>(node ? node.price : 0);

  const [merchandiseNameValidate, setMerchandiseNameValidate] =
    useState<boolean>(node && node.merchandise_name ? true : false);
  const [priceValidate, setPriceValidate] = useState<boolean>(
    node && node.price ? true : false
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!merchandiseNameValidate || !priceValidate) {
      return;
    }
    createMerchandise({
      id: node ? node.id : 0,
      merchandise_name: merchandise_name,
      price: price,
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
            id={node ? node.id : 0}
            placeholder="物販名"
            value={merchandise_name}
            onChange={(e) => setMerchandiseName(e.target.value)}
            onValidationChange={(isValid) =>
              setMerchandiseNameValidate(isValid)
            }
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

export default merchandiseForm;
