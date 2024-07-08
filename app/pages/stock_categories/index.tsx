import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Stock_categoryState,
  getStockCategory,
} from "../../store/stocks/stock_categories/stock_categorySlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  stock_categoryMessage,
  stock_categoryStatus,
  stock_categoryError,
  stock_categoriesStore,
} from "../../components/Hooks/selector";
import { userKey, permissionStore } from "../../components/Hooks/authSelector";
import { PermissionsState } from "../../store/auth/permissionSlice";
import { staffPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { allLogout } from "../../components/Hooks/useMethod";

const stock_categories = () => {
  const router = useRouter();
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);

  const dispatch = useDispatch();

  const scStatus: string = useSelector(stock_categoryStatus);

  const scMessage: string | null = useSelector(stock_categoryMessage);

  const scError: string | null = useSelector(stock_categoryError);

  const stockCategories: Stock_categoryState[] = useSelector(
    stock_categoriesStore
  );
  console.log(stockCategories);

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        staffPermission(permission, router);
        if (permission === "オーナー") {
          setTHeaderItems(["在庫カテゴリ名", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          setTHeaderItems(["在庫カテゴリ名", "編集"]);
        } else {
          setTHeaderItems(["在庫カテゴリ名"]);
        }
        if (
          _.isEmpty(stockCategories) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
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

    fetchData();
  }, [dispatch]);

  const searchItems = [{ key: "category", value: "在庫カテゴリ名" }];

  const nodesProps = [{ text: "category" }];

  const nodes = stockCategories;

  return (
    <div>
      {scMessage && (
        <BasicAlerts
          type="success"
          message={scMessage}
          space={1}
          padding={0.6}
        />
      )}
      {scError && (
        <BasicAlerts type="error" message={scError} space={1} padding={0.6} />
      )}
      <div className="mx-4">
        <div className="flex justify-between my-4">
          <RouterButton link="/stocks" value="在庫画面に戻る" />
          <RouterButton
            link="/stock_categories/create"
            value="在庫カテゴリ新規作成"
          />
        </div>
        {scStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/stock_categories"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default stock_categories;
