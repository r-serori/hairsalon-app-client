import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { StockState, getStock } from "../../store/stocks/stockSlice";
import {
  Stock_categoryState,
  getStockCategory,
} from "../../store/stocks/stock_categories/stock_categorySlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  stockError,
  stockMessage,
  stockStatus,
  stock_categoriesStore,
  stock_categoryStatus,
  stocksStore,
} from "../../components/Hooks/selector";
import { userKey, permissionStore } from "../../components/Hooks/authSelector";
import { PermissionsState } from "../../store/auth/permissionSlice";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";

const stocks: React.FC = () => {
  const router = useRouter();
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const dispatch = useDispatch();

  const stocks: StockState[] = useSelector(stocksStore);

  const sStatus: string = useSelector(stockStatus);

  const sMessage: string | null = useSelector(stockMessage);

  const sError: string | null = useSelector(stockError);

  const stockCategories: Stock_categoryState[] = useSelector(
    stock_categoriesStore
  );

  const scStatus: string = useSelector(stock_categoryStatus);

  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        staffPermission(permission, router);

        if (permission === "オーナー") {
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
        } else if (permission === "マネージャー") {
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
        } else if (permission === "スタッフ") {
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
          _.isEmpty(stocks) &&
          _.isEmpty(stockCategories) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getStock({}) as any);
          await dispatch(getStockCategory({}) as any);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    if (permission) fetchData();
  }, [dispatch, permission]);

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
      {sMessage && (
        <BasicAlerts
          type="success"
          message={sMessage}
          space={1}
          padding={0.6}
        />
      )}
      {sError && (
        <BasicAlerts type="error" message={sError} space={1} padding={0.6} />
      )}
      {sStatus === "loading" ||
      scStatus === "loading" ||
      !nodes ||
      permission === null ? (
        <p>Loading...</p>
      ) : (
        <div className="mx-4">
          <div className="flex justify-between items-center gap-4 my-4 ">
            <RouterButton link="/stocks/create" value="在庫新規作成画面へ" />
            <RouterButton link="/stock_categories" value="在庫カテゴリ画面へ" />
          </div>

          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/stocks"
            role={permission}
          />
        </div>
      )}
    </div>
  );
};

export default stocks;
