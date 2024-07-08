import React, { useState, useEffect } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { StockState } from "../../../../store/stocks/stockSlice";
import { stock_categoriesStore } from "../../../Hooks/selector";
import { Stock_categoryState } from "../../../../store/stocks/stock_categories/stock_categorySlice";
import BasicNumberField from "../../input/BasicNumberField";

interface StockFormProps {
  node?: StockState;
  createStock: (formData: StockState) => void;
  edit?: boolean;
}

const stockForm: React.FC<StockFormProps> = ({ node, createStock, edit }) => {
  const stockCategories: Stock_categoryState[] = useSelector(
    stock_categoriesStore
  );

  console.log(stockCategories);

  const stockCategoryNames = stockCategories.map(
    (category) => category.category
  );

  console.log("stockCategoryNamesだよ");
  console.log(stockCategoryNames);

  const [product_name, setProductName] = useState<string>(
    node ? node.product_name : ""
  );
  const [product_price, setProductPrice] = useState<number>(
    node ? node.product_price : 0
  );
  const [quantity, setQuantity] = useState<number>(node ? node.quantity : 0);
  const [remarks, setRemark] = useState<string>(node ? node.remarks : "");
  const [supplier, setSupplier] = useState<string>(node ? node.supplier : "");
  const [notice, setNotice] = useState<number>(node ? node.notice : 0);
  const [stockCategoryIdName, setStockCategoryIdName] = useState<string>(
    node
      ? stockCategories.find(
          (category) => category.id === node.stock_category_id
        )?.category
      : stockCategoryNames[0]
  );

  const [productNameValidate, setProductNameValidate] = useState<boolean>(true);
  const [productPriceValidate, setProductPriceValidate] =
    useState<boolean>(true);
  const [quantityValidate, setQuantityValidate] = useState<boolean>(true);
  const [noticeValidate, setNoticeValidate] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !productNameValidate ||
      !productPriceValidate ||
      !quantityValidate ||
      !noticeValidate
    ) {
      return;
    }
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
    });
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <div className="max-w-md w-full ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {edit ? "在庫情報編集" : "在庫情報新規作成"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <BasicTextField
            id={node ? node.id : 0}
            placeholder="商品名"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            onValidationChange={(isValid) => setProductNameValidate(isValid)}
          />

          <BasicNumberField
            id={node ? node.id : 0}
            placeholder="価格"
            value={String(product_price)}
            onChange={(e) => setProductPrice(Number(e.target.value))}
            onValidationChange={(isValid) => setProductPriceValidate(isValid)}
          />

          <BasicNumberField
            id={node ? node.id : 0}
            placeholder="数量"
            value={String(quantity)}
            onChange={(e) => setQuantity(Number(e.target.value))}
            onValidationChange={(isValid) => setQuantityValidate(isValid)}
          />

          <BasicTextField
            id={node ? node.id : 0}
            placeholder="備考"
            value={remarks}
            onChange={(e) => setRemark(e.target.value)}
            multiline={true}
            decideLength={150}
            rows={4}
            required={false}
          />

          <BasicTextField
            id={node ? node.id : 0}
            placeholder="仕入れ先"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            required={false}
          />

          <BasicNumberField
            id={node ? node.id : 0}
            placeholder="設定した数量を下回った場合通知します"
            value={String(notice)}
            onChange={(e) => setNotice(Number(e.target.value))}
            onValidationChange={(isValid) => setNoticeValidate(isValid)}
          />

          <SingleCheckBox
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
