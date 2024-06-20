import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStockCategory } from "../../store/stocks/stock_categories/stock_categorySlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";

const stock_categories = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState) => state.stock_category.loading
  );

  const message = useSelector(
    (state: RootState) => state.stock_category.message
  );

  const error = useSelector((state: RootState) => state.stock_category.error);

  const stockCategories = useSelector(
    (state: RootState) => state.stock_category.stock_category
  );
  console.log(stockCategories);

  useEffect(() => {
    if (stockCategories.length === 0) {
      const ownerId = Number(localStorage.getItem("owner_id"));
      dispatch(getStockCategory(ownerId) as any);
    } else {
      return;
    }
  }, [dispatch]);

  const searchItems = [{ key: "category", value: "在庫カテゴリ名" }];

  const tHeaderItems = ["在庫カテゴリ名", "編集", "削除"];

  const nodesProps = [{ text: "category" }];

  const nodes = stockCategories;

  return (
    <div className="mx-4">
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}
      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      <div className="flex mb-4">
        <RouterButton
          link="/stock_categories/create"
          value="在庫カテゴリ新規作成"
        />
        <RouterButton link="/stocks" value="在庫画面に戻る" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/stock_categories"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default stock_categories;
