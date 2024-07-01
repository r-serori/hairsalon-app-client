import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStockCategory } from "../../../store/stocks/stock_categories/stock_categorySlice";
import StockCategoryForm from "../../../components/elements/form/stocks/stock_categories/StockCategoriesForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import { stock_categoryStatus } from "../../../components/Hooks/selector";

const stockCategoryCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading: string = useSelector(stock_categoryStatus);

  const handleCreate = async (formData: { id: number; category: string }) => {
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
