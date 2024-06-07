import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStock, getStock } from "../../../store/stocks/stockSlice";
import { RootState } from "../../../redux/store";
import StockForm from "../../../components/elements/form/stocks/StockForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";

const stockCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.stock.loading);

  const handleCreate = async (formData: {
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
      await dispatch(createStock(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/stocks"); // Redirect to the stock list page after creating a stock
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/stocks"} />
      {loading ? <p>Loading...</p> : <StockForm createStock={handleCreate} />}
    </div>
  );
};

export default stockCreate;
