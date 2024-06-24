import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStock } from "../../store/stocks/stockSlice";
import { getStockCategory } from "../../store/stocks/stock_categories/stock_categorySlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { UserPermission } from "../../components/Hooks/Permission";

const stocks: React.FC = () => {
  UserPermission();
  const dispatch = useDispatch();

  const stocks = useSelector((state: RootState) => state.stock.stocks);
  console.log(stocks);

  const stockCategories = useSelector(
    (state: RootState) => state.stock_category.stock_category
  );
  console.log(stockCategories);

  useEffect(() => {
    try {
      if (stocks.length === 0) {
        const ownerId = Number(localStorage.getItem("owner_id"));
        dispatch(getStock(ownerId) as any);
        dispatch(getStockCategory(ownerId) as any);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("ストック、ストックカテゴリー取得！！");
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.stock.loading);

  const stockCategoryLoading = useSelector(
    (state: RootState) => state.stock_category.loading
  );

  const message = useSelector((state: RootState) => state.stock.message);

  const error = useSelector((state: RootState) => state.stock.error);

  const searchItems = [
    { key: "category_name", value: "在庫カテゴリ" },
    { key: "product_name", value: "商品名" },
    { key: "product_price", value: "価格" },
    { key: "quantity", value: "在庫数量" },
    { key: "remarks", value: "備考" },
    { key: "supplier", value: "仕入れ先" },
    { key: "notice", value: "通知" },
  ];

  //コースカテゴリをとってきて、nosesPropsに追加する

  const tHeaderItems = [
    "在庫カテゴリ",
    "商品名",
    "価格",
    "在庫数量",
    "備考",
    "仕入れ先",
    "通知",
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
    { number: "notice" },
    { string: "updated_at" },
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
        notice: stock.notice,
        updated_at: stock.updated_at,
      };
    }),

    // 他の行データもここに追加する
  ];
  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}
      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      <div className="flex justify-end items-center gap-4 my-4 mr-4">
        <RouterButton link="/stocks/create" value="在庫画面へ" />
        <RouterButton link="/stock_categories" value="在庫カテゴリ画面へ" />
      </div>

      {!loading && !stockCategoryLoading ? (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/stocks"
          isLoading={loading}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default stocks;
