import React, { useState } from "react";
import BasicTextField from "../../../input/BasicTextField";
import SingleCheckBox from "../../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../../button/PrimaryButton";
import MultiCheckbox from "../../../input/checkbox/MultiCheckbox";
import { Stock_categoryState } from "../../../../../store/stocks/stock_categories/stock_categorySlice";

interface StockCategoryFormProps {
  node?: Stock_categoryState;
  createStockCategory: (formData: Stock_categoryState) => void;
  edit?: boolean;
}

const stockForm: React.FC<StockCategoryFormProps> = ({
  node,
  createStockCategory,
  edit,
}) => {
  const [category, setCategory] = useState(node ? node.category : "");

  const [categoryValidate, setCategoryValidate] = useState<boolean>(
    node && node.category ? true : false
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!categoryValidate) {
      return;
    }

    createStockCategory({
      id: node ? node.id : 0,
      category: category,
    });
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <div className="max-w-md w-full ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {edit ? "在庫カテゴリー情報編集" : "在庫カテゴリー情報新規作成"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <BasicTextField
            id={node ? node.id : 0}
            placeholder="カテゴリー名"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            onValidationChange={(isValid) => setCategoryValidate(isValid)}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default stockForm;
