import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateStock,
  getStock,
  StockState,
} from "../../../../store/stocks/stockSlice";
import { RootState } from "../../../../redux/store";
import StockForm from "../../../../components/elements/form/stocks/StockForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import {
  stockStatus,
  stocksStore,
} from "../../../../components/Hooks/selector";
import { userKey } from "../../../../components/Hooks/authSelector";
import RouterButton from "../../../../components/elements/button/RouterButton";

const stockEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const sStatus: string = useSelector(stockStatus);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const stocks = useSelector(stocksStore).find(
    (stock: StockState) => stock.id === Number(id)
  );
  console.log("stocksだよ");
  console.log(stocks);

  const handleUpdate = async (formData: {
    id: number;
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    supplier: string;
    notice: number;
    stock_category_id: number;
  }) => {
    try {
      await dispatch(updateStock(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/stocks"); // Redirect to the stock list page after updating a stock
  };

  return (
    <div className="min-h-full">
      <div className="mt-4 ml-4">
        <RouterButton link={"/stocks"} value="在庫画面に戻る" />
      </div>
      {sStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <StockForm node={stocks} createStock={handleUpdate} edit={true} />
      )}
    </div>
  );
};

export default stockEdit;
