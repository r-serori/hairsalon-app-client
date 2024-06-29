import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Daily_salesState,
  getDaily_sales,
} from "../../store/sales/daily_sales/daily_saleSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  daily_saleError,
  daily_saleMessage,
  daily_saleStatus,
} from "../../components/Hooks/selector";
import { getUserKey, ownerPermission } from "../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import _ from "lodash";
import { allLogout } from "../../components/Hooks/useMethod";
import { userKey } from "../../components/Hooks/authSelector";

const daily_sales: React.FC = () => {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);

  const dispatch = useDispatch();

  const daily_sales: Daily_salesState[] = useSelector(
    (state: RootState) => state.daily_sales.daily_sales
  );

  const dsStatus: string | null = useSelector(daily_saleStatus);

  const dsMessage: string | null = useSelector(daily_saleMessage);

  const dsError: string | null = useSelector(daily_saleError);

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

        ownerPermission(permission, router);

        if (permission === "オーナー") {
          setTHeaderItems(["日付", "売上", "編集", "削除"]);
        } else {
          throw new Error("Permission is not オーナー");
        }

        if (_.isEmpty(daily_sales) && permission === "オーナー") {
          await dispatch(getDaily_sales(ownerId) as any);
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, key, daily_sales, ownerId, permission]);

  const searchItems = [
    { key: "date", value: "日付" },
    { key: "daily_sales", value: "売上" },
  ];

  const nodesProps = [{ string: "date" }, { number: "daily_sales" }];

  const nodes: Daily_salesState[] = daily_sales;

  return (
    <div>
      {dsMessage && (
        <BasicAlerts
          type="success"
          message={dsMessage}
          space={1}
          padding={0.6}
        />
      )}

      {dsError && (
        <BasicAlerts type="error" message={dsError} space={1} padding={0.6} />
      )}
      <div className="mx-8 mt-4">
        <div className="flex justify-end items-center mb-4">
          <div className="flex justify-start items-center mb-4 gap-4">
            <RouterButton link="/monthly_sales" value="月次売上画面へ" />
            <RouterButton link="/yearly_sales" value="年次売上画面へ" />
          </div>
        </div>
        {dsStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/daily_sales"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default daily_sales;
