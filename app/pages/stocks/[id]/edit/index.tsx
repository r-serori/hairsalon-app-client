import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateStock, StockState } from "../../../../store/stocks/stockSlice";
import StockForm from "../../../../components/elements/form/stocks/StockForm";
import {
  stockStatus,
  stocksStore,
  stockError,
} from "../../../../components/Hooks/selector";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/Alert";

const stockEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const sStatus: string = useSelector(stockStatus);
  const sError: string = useSelector(stockError);

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
      const response = await dispatch(updateStock(formData) as any);

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
    <div className="min-h-full">
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

          <StockForm node={stocks} createStock={handleUpdate} edit={true} />
        </div>
      )}
    </div>
  );
};

export default stockEdit;
