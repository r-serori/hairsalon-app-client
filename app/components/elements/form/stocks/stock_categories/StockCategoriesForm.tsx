import React, { useState } from "react";
import BasicTextField from "../../../input/BasicTextField";
import SingleCheckBox from "../../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../../button/PrimaryButton";
import MultiCheckbox from "../../../input/checkbox/MultiCheckbox";
import { Stock_categoryState } from "../../../../../store/stocks/stock_categories/stock_categorySlice";

interface StockCategoryFormProps {
  node?: Stock_categoryState;
  createStockCategory: (formData: Stock_categoryState) => void;
}

const stockForm: React.FC<StockCategoryFormProps> = ({
  node,
  createStockCategory,
}) => {
  const [category, setCategory] = useState(node ? node.category : "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createStockCategory({
      id: node ? node.id : 0,
      category: category,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 pt-12 py-80 px-4 sm:px-6 lg:px-8 min-h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            在庫カテゴリー登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <BasicTextField
            type="text"
            placeholder="カテゴリー名"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default stockForm;
