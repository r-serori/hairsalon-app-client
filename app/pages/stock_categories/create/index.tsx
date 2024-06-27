import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStockCategory,
  getStockCategory,
} from "../../../store/stocks/stock_categories/stock_categorySlice";
import { RootState } from "../../../redux/store";
import StockCategoryForm from "../../../components/elements/form/stocks/stock_categories/StockCategoriesForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";

const stockCategoryCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector(
    (state: RootState) => state.stock_category.status
  );

  const handleCreate = async (formData: {
    id: number;
    category: string;
    owner_id: number;
  }) => {
    try {
      await dispatch(createStockCategory(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/stock_categories");
  };

  return (
    <div className="min-h-full ">
      <div className="ml-4 mt-4 ">
        <BackAgainButton link={"/stock_categories"} />
      </div>
      {loading === "loading" ? (
        <p>Loading...</p>
      ) : (
        <StockCategoryForm createStockCategory={handleCreate} />
      )}
    </div>
  );
};

export default stockCategoryCreate;
