import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStockCategory } from "../../store/stocks/stock_categories/stock_categorySlice";
import { RootState } from "../../redux/store";

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
    dispatch(getStockCategory({}) as any);
  }, [dispatch]);

  const searchItems = [{ key: "category", value: "在庫カテゴリ名" }];

  const tHeaderItems = ["在庫カテゴリ名", "編集", "削除"];

  const nodesProps = [{ text: "category" }];

  const nodes = stockCategories;

  return (
    <div className="mx-auto max-w-6xl px-4 ">
      {message ? (
        <p className="py-4 text-blue-700">{message}</p>
      ) : error ? (
        <p className="py-4 text-red-700">{error}</p>
      ) : null}
      <div className="flex space-x-4 mb-4">
        <Link href="/stock_categories/create">新規作成</Link>
        <Link href="/stocks">在庫画面</Link>
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
