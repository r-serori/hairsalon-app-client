import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateStockCategory } from "../../../../store/stocks/stock_categories/stock_categorySlice";
import StockCategoryForm from "../../../../components/elements/form/stocks/stock_categories/StockCategoriesForm";
import {
  stock_categoryStatus,
  stock_categoriesStore,
  stock_categoryError,
} from "../../../../components/Hooks/selector";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/Alert";

const stockCategoryEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const scStatus: string = useSelector(stock_categoryStatus);
  const scError: string = useSelector(stock_categoryError);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const stockCategory = useSelector(stock_categoriesStore).find(
    (stockCategory) => stockCategory.id === Number(id)
  );
  console.log("stockCategoryだよ");
  console.log(stockCategory);

  const handleUpdate = async (formData: { id: number; category: string }) => {
    try {
      const response = await dispatch(updateStockCategory(formData) as any);

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
      <div className="my-4 ml-4">
        <RouterButton
          link={"/stock_categories"}
          value="在庫カテゴリ画面に戻る"
        />
      </div>
      {scStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <StockCategoryForm
          node={stockCategory}
          createStockCategory={handleUpdate}
          edit={true}
        />
      )}
    </div>
  );
};

export default stockCategoryEdit;
