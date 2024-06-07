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

const stockEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.stock.loading);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const stocks = useSelector((state: RootState) =>
    state.stock.stocks.find(
      (stock: StockState) => stock.id === parseInt(id as string)
    )
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
    stock_category_id: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      try {
        await dispatch(updateStock(formData) as any);
      } catch (error) {
        console.error(error);
      }
      await dispatch(getStock() as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/stocks"); // Redirect to the stock list page after updating a stock
  };

  return (
    <div className="min-h-full">
      <BackAgainButton link={"/stocks"} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <StockForm node={stocks} createStock={handleUpdate} />
      )}
    </div>
  );
};

export default stockEdit;
