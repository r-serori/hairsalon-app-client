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
import {
  stock_categoryStatus,
  stock_categoriesStore,
} from "../../../../components/Hooks/selector";
import { userKey } from "../../../../components/Hooks/authSelector";
import { getUserKey } from "../../../../components/Hooks/useMethod";
import { getOwnerId } from "../../../../components/Hooks/getLocalStorage";

const stockCategoryEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const scStatus: string = useSelector(stock_categoryStatus);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const stockCategory = useSelector(stock_categoriesStore).find(
    (stockCategory) => stockCategory.id === Number(id)
  );
  console.log("stockCategoryだよ");
  console.log(stockCategory);

  const key: string | null = useSelector(userKey);

  const handleUpdate = async (formData: {
    id: number;
    category: string;
    owner_id: number;
  }) => {
    try {
      if (formData.owner_id === 0) {
        if (key === null) {
          const userKey: string | null = await getUserKey(dispatch);
          if (userKey !== null) {
            const ownerId = await getOwnerId(userKey);

            formData.owner_id = ownerId;
            await dispatch(updateStockCategory(formData) as any);
          }
        }
      } else {
        await dispatch(updateStockCategory(formData) as any);
      }
    } catch (error) {
      console.error(error);
    }
    router.push("/stock_categories");
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/stock_categories"} />
      {scStatus === "loading" ? (
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
