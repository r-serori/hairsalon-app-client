import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStock } from "../../../store/stocks/stockSlice";
import StockForm from "../../../components/elements/form/stocks/StockForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import { stockStatus } from "../../../components/Hooks/selector";
import RouterButton from "../../../components/elements/button/RouterButton";

const stockCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const sStatus: string = useSelector(stockStatus);

  const handleCreate = async (formData: {
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
      await dispatch(createStock(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/stocks"); // Redirect to the stock list page after creating a stock
  };
  return (
    <div className="min-h-full ">
      <div className="mt-4 ml-4">
        <RouterButton link={"/stocks"} value="在庫画面に戻る" />
      </div>
      {sStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <StockForm createStock={handleCreate} />
      )}
    </div>
  );
};

export default stockCreate;
