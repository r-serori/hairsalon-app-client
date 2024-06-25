import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateStockCategory,
  getStockCategory,
} from "../../../../store/stocks/stock_categories/stock_categorySlice";
import { RootState } from "../../../../redux/store";
import StockCategoryForm from "../../../../components/elements/form/stocks/stock_categories/StockCategoriesForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import { ManagerPermission } from "../../../../components/Hooks/ManagerPermission";

const stockCategoryEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector(
    (state: RootState) => state.stock_category.status
  );

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const stockCategory = useSelector((state: RootState) =>
    state.stock_category.stock_category.find(
      (stockCategory) => stockCategory.id === parseInt(id as string)
    )
  );

  console.log("stockCategoryだよ");
  console.log(stockCategory);

  const handleUpdate = async (formData: {
    id: number;
    category: string;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      await dispatch(updateStockCategory(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/stock_categories"); // Redirect to the stock_category list page after updating a stock_category
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/stock_categories"} />
      {loading === "loading" ? (
        <p>Loading...</p>
      ) : (
        <StockCategoryForm
          node={stockCategory}
          createStockCategory={handleUpdate}
          edit={true}
        />
      )}
      <h1>StockCategory Edit</h1>
    </div>
  );
};

export default stockCategoryEdit;
