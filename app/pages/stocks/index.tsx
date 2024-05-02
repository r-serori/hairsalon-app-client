import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStock } from "../../store/stocks/stockSlice";
import { getStockCategory } from "../../store/stocks/stock_categories/stock_categorySlice";
import { RootState } from "../../redux/store";

const stocks: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.stock.loading);

  const stocks = useSelector((state: RootState) => state.stock.stocks);
  console.log(stocks);

  const stockCategories = useSelector(
    (state: RootState) => state.stock_category.stock_category
  );
  console.log(stockCategories);

  useEffect(() => {
    try {
      dispatch(getStock() as any);
      dispatch(getStockCategory() as any);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("ストック、ストックカテゴリー取得！！");
    }
  }, [dispatch]);

  const searchItems = [
    { key: "category_name", value: "在庫カテゴリ" },
    { key: "product_name", value: "商品名" },
    { key: "product_price", value: "価格" },
    { key: "quantity", value: "数量" },
    { key: "remarks", value: "備考" },
    { key: "supplier", value: "仕入れ先" },
  ];

  //コースカテゴリをとってきて、nosesPropsに追加する

  const tHeaderItems = [
    "在庫カテゴリ",
    "商品名",
    "価格",
    "数量",
    "備考",
    "仕入れ先",
    "更新日",
    "編集",
    "削除",
  ];

  const nodesProps = [
    { text: "category_name" },
    { text: "product_name" },
    { number: "product_price" },
    { number: "quantity" },
    { text: "remarks" },
    { text: "supplier" },
    { date: "updated_at" },
  ];

  //stocksのstock_category_idとstockCategoriesのidが一致するものをnodesに追加する
  const nodes = [
    ...stocks.map((stock) => {
      const categoryAndStock = stockCategories.find(
        (category) => category.id === stock.stock_category_id
      );
      return {
        id: stock.id,
        category_name: categoryAndStock?.category || "",
        product_name: stock.product_name,
        product_price: stock.product_price,
        quantity: stock.quantity,
        remarks: stock.remarks,
        supplier: stock.supplier,
        updated_at: stock.updated_at,
      };
    }),

    // 他の行データもここに追加する
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 ">
      <div className="flex space-x-4 mb-4">
        <Link href="/stocks/create">新規作成</Link>
        <Link href="/stock_categories">カテゴリ画面</Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/stocks"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default stocks;
