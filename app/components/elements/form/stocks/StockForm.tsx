import React, { useState, useEffect } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { stockCategoryApi } from "../../../../services/stock_categories/api";

interface StockFormProps {
  onSubmit: (formData: {
    id: number;
    product_name: string;
    product_price: number;
    remark: string;
    quantity: string;
    supplier: string; //仕入れ先
    stock_category_id: number; //在庫かてゴリーID、外部キー
    created_at: string;
    updated_at: string;
    loading: boolean;
    error: string | null;
  }) => void;
}

const stockForm: React.FC<StockFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [remark, setRemark] = useState("");
  const [supplier, setSupplier] = useState("");
  const [stock_category_id, setStockCategoryId] = useState(0);

  useEffect(() => {
    const fetchStockCategories = async () => {
      try {
        const getStockCategories: any =
          await stockCategoryApi.fetchAllStockCategories();
        console.log(getStockCategories);
        setStockCategoryId(getStockCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStockCategories();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      product_name: product_name,
      product_price: product_price,
      quantity: quantity,
      remark: remark,
      supplier: supplier,
      stock_category_id: stock_category_id,
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
            placeholder="商品名"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="価格"
            value={product_price}
            onChange={(e) => setProductPrice(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="数量"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="備考"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="仕入れ先"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />

          <MultiCheckbox options={stock_category_id} />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default stockForm;
