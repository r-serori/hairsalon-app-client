import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStock } from "../../../store/stocks/stockSlice";
import StockForm from "../../../components/elements/form/stocks/StockForm";
import { useRouter } from "next/router";
import { stockStatus, stockError } from "../../../components/Hooks/selector";
import RouterButton from "../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../components/elements/alert/Alert";

const stockCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const sStatus: string = useSelector(stockStatus);
  const sError: string = useSelector(stockError);

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
      const response = await dispatch(createStock(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/stocks");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-full ">
      {sError && (
        <BasicAlerts type="error" message={sError} space={1} padding={1} />
      )}
      {sStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="mt-4 ml-4">
            <RouterButton link={"/stocks"} value="在庫画面に戻る" />
          </div>

          <StockForm createStock={handleCreate} />
        </div>
      )}
    </div>
  );
};

export default stockCreate;
