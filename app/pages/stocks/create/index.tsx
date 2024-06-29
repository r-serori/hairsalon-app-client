import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStock, getStock } from "../../../store/stocks/stockSlice";
import { RootState } from "../../../redux/store";
import StockForm from "../../../components/elements/form/stocks/StockForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import { stockStatus } from "../../../components/Hooks/selector";
import { getUserKey } from "../../../components/Hooks/useMethod";
import { getOwnerId } from "../../../components/Hooks/getLocalStorage";

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
    owner_id: number;
  }) => {
    try {
      const userKey: string | null = await getUserKey(dispatch);
      const ownerId = await getOwnerId(userKey);
      formData.owner_id = ownerId;
      await dispatch(createStock(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/stocks"); // Redirect to the stock list page after creating a stock
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/stocks"} />
      {sStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <StockForm createStock={handleCreate} />
      )}
    </div>
  );
};

export default stockCreate;
