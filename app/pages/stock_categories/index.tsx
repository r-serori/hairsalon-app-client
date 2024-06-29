import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  stock_categoryMessage,
  stock_categoryStatus,
  stock_categoryError,
  stock_categoriesStore,
} from "../../components/Hooks/selector";
import { userKey } from "../../components/Hooks/authSelector";
import { staffPermission } from "../../components/Hooks/useMethod";
import { getUserKey } from "../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import _ from "lodash";
import { allLogout } from "../../components/Hooks/useMethod";

const stock_categories = () => {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);

  const dispatch = useDispatch();

  const scStatus: string = useSelector(stock_categoryStatus);

  const scMessage: string | null = useSelector(stock_categoryMessage);

  const scError: string | null = useSelector(stock_categoryError);

  const stockCategories: Stock_categoryState[] = useSelector(
    stock_categoriesStore
  );
  console.log(stockCategories);

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
          _.isEmpty(stockCategories) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getStockCategory(ownerId) as any);
        } else {
          return;
        }
        if (permission === "オーナー") {
          setTHeaderItems(["在庫カテゴリ名", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          setTHeaderItems(["在庫カテゴリ名", "編集"]);
        } else {
          setTHeaderItems(["在庫カテゴリ名"]);
        }
      } catch (error) {
        console.log(error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, key, stockCategories, ownerId]);

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
        <div className="flex mb-4">
          <RouterButton
            link="/stock_categories/create"
            value="在庫カテゴリ新規作成"
          />
          <RouterButton link="/stocks" value="在庫画面に戻る" />
        </div>
        {scError === "loading" ? (
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
