import React, { useState, useEffect } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { StockState } from "../../../../store/stocks/stockSlice";

interface StockFormProps {
  node?: StockState;
  createStock: (formData: StockState) => void;
}

const stockForm: React.FC<StockFormProps> = ({ node, createStock }) => {
  const stockCategories = useSelector(
    (state: RootState) => state.stock_category.stock_category
  );
  console.log(stockCategories);

  const stockCategoryNames = stockCategories.map(
    (category) => category.category
  );
  console.log("stockCategoryNamesだよ");
  console.log(stockCategoryNames);

  const [product_name, setProductName] = useState(
    node ? node.product_name : ""
  );
  const [product_price, setProductPrice] = useState(
    node ? node.product_price : 0
  );
  const [quantity, setQuantity] = useState(node ? node.quantity : 0);
  const [remarks, setRemark] = useState(node ? node.remarks : "");
  const [supplier, setSupplier] = useState(node ? node.supplier : "");
  const [notice, setNotice] = useState(node ? node.notice : 0);
  const [stockCategoryIdName, setStockCategoryIdName] = useState(
    node
      ? stockCategories.find(
          (category) => category.id === node.stock_category_id
        )?.category
      : stockCategoryNames[0]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createStock({
      id: node ? node.id : 0,
      product_name: product_name,
      product_price: product_price,
      quantity: quantity,
      remarks: remarks,
      supplier: supplier,
      notice: notice,
      stock_category_id: stockCategories.find(
        (category) => category.category === stockCategoryIdName
      )?.id,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 pt-12 py-80 px-4 sm:px-6 lg:px-8 min-h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            在庫登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
            value={remarks}
            onChange={(e) => setRemark(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="仕入れ先"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="設定した数量を下回った場合通知します"
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
          />

          <SingleCheckBox
            label={"在庫カテゴリー"}
            getOptions={stockCategoryNames}
            value={stockCategoryIdName}
            nodeId={node ? node.id.toString() : "stock_category_id"}
            onChange={(newValue) => setStockCategoryIdName(newValue)}
          />
          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default stockForm;
