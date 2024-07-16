import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStockCategory } from "../../../store/stocks/stock_categories/stock_categorySlice";
import StockCategoryForm from "../../../components/elements/form/stocks/stock_categories/StockCategoriesForm";
import { useRouter } from "next/router";
import {
  stock_categoryStatus,
  stock_categoryError,
} from "../../../components/Hooks/selector";
import RouterButton from "../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../components/elements/alert/Alert";

const stockCategoryCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const scStatus: string = useSelector(stock_categoryStatus);
  const scError: string = useSelector(stock_categoryError);

  const handleCreate = async (formData: { id: number; category: string }) => {
    try {
      const response = await dispatch(createStockCategory(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/stock_categories");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-full ">
      {scError && (
        <BasicAlerts type="error" message={scError} space={1} padding={1} />
      )}
      {scStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="ml-4 mt-4">
            <RouterButton
              link={"/stock_categories"}
              value="在庫カテゴリ画面に戻る"
            />
          </div>

          <StockCategoryForm createStockCategory={handleCreate} />
        </div>
      )}
    </div>
  );
};

export default stockCategoryCreate;
