import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStock } from "../../store/stocks/stockSlice";
import { getStockCategory } from "../../store/stocks/stock_categories/stock_categorySlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";

const stocks: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);

  const dispatch = useDispatch();

  const stocks = useSelector((state: RootState) => state.stock.stocks);
  console.log(stocks);

  const stockCategories = useSelector(
    (state: RootState) => state.stock_category.stock_category
  );
  console.log(stockCategories);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "スタッフ" || role === "マネージャー" || role === "オーナー") {
      setRole(role);
    } else {
      router.push("/dashboard");
    }
    if (role === "オーナー") {
      setTHeaderItems([
        "在庫カテゴリ",
        "商品名",
        "価格",
        "在庫数量",
        "備考",
        "仕入れ先",
        "通知",

        "編集",
        "削除",
      ]);
    } else if (role === "マネージャー") {
      setTHeaderItems([
        "在庫カテゴリ",
        "商品名",
        "価格",
        "在庫数量",
        "備考",
        "仕入れ先",
        "通知",

        "編集",
      ]);
    } else {
      setTHeaderItems([
        "在庫カテゴリ",
        "商品名",
        "価格",
        "在庫数量",
        "備考",
        "仕入れ先",
        "通知",
      ]);
    }
    if (
      stocks.length === 0 &&
      (role === "オーナー" || role === "マネージャー" || role === "スタッフ")
    ) {
      try {
        const ownerId = Number(localStorage.getItem("owner_id"));
        dispatch(getStock(ownerId) as any);
        dispatch(getStockCategory(ownerId) as any);
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.stock.status);

  const stockCategoryLoading = useSelector(
    (state: RootState) => state.stock_category.status
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

  const nodesProps = [
    { text: "category_name" },
    { text: "product_name" },
    { number: "product_price" },
    { number: "quantity" },
    { text: "remarks" },
    { text: "supplier" },
    { number: "notice" },
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

      {loading === "loading" || stockCategoryLoading === "loading" ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/stocks"
          role={role}
        />
      )}
    </div>
  );
};

export default stocks;
