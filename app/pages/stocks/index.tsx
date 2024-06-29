import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { StockState, getStock } from "../../store/stocks/stockSlice";
import {
  Stock_categoryState,
  getStockCategory,
} from "../../store/stocks/stock_categories/stock_categorySlice";
import { RootState } from "../../redux/store";
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
import { userKey } from "../../components/Hooks/authSelector";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import { getUserKey } from "../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import _ from "lodash";

const stocks: React.FC = () => {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);

  const dispatch = useDispatch();

  const stocks: StockState[] = useSelector(stocksStore);

  const sStatus: string = useSelector(stockStatus);

  const sMessage: string | null = useSelector(stockMessage);

  const sError: string | null = useSelector(stockError);

  const stockCategories: Stock_categoryState[] = useSelector(
    stock_categoriesStore
  );

  const scStatus: string = useSelector(stock_categoryStatus);

  const key: string | null = useSelector(userKey);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (key === null) {
          const userKey: string = await getUserKey(dispatch);

          if (userKey !== null) {
            const roleData: string | null = await getRole(userKey);
            const ownerId: number | null = await getOwnerId(userKey);

            const vioRole: "オーナー" | "マネージャー" | "スタッフ" | null =
              await getVioRoleData(userKey);

            if (roleData !== null && ownerId !== null && vioRole !== null) {
              setOwnerId(ownerId);
              setPermission(vioRole);
            } else {
              throw new Error("RoleData or ownerId is null");
            }
          } else {
            throw new Error("UserKey is null");
          }
        }

        staffPermission(permission, router);

        if (
          _.isEmpty(stocks) &&
          _.isEmpty(stockCategories) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getStock(ownerId) as any);
          await dispatch(getStockCategory(ownerId) as any);
        } else {
          return;
        }

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
      } catch (error) {
        console.log(error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, key, stocks, stockCategories, ownerId]);

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

      <div className="flex justify-end items-center gap-4 my-4 mr-4">
        <RouterButton link="/stocks/create" value="在庫画面へ" />
        <RouterButton link="/stock_categories" value="在庫カテゴリ画面へ" />
      </div>

      {sStatus === "loading" || scStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/stocks"
          role={permission}
        />
      )}
    </div>
  );
};

export default stocks;
