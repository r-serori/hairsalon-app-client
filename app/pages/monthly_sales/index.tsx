import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Monthly_salesState,
  getMonthly_sales,
} from "../../store/sales/monthly_sales/monthly_saleSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  monthly_salesStore,
  monthly_saleStatus,
  monthly_saleMessage,
  monthly_saleError,
} from "../../components/Hooks/selector";
import {
  getUserKey,
  allLogout,
  ownerPermission,
} from "../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import _ from "lodash";
import { userKey } from "../../components/Hooks/authSelector";

const monthly_sales: React.FC = () => {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);

  const dispatch = useDispatch();

  const monthly_sales: Monthly_salesState[] = useSelector(monthly_salesStore);

  const msStatus: string = useSelector(monthly_saleStatus);

  const msMessage: string | null = useSelector(monthly_saleMessage);

  const msError: string | null = useSelector(monthly_saleError);

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
          setTHeaderItems(["年月", "売上", "編集", "削除"]);
        } else {
          throw new Error("Permission is not オーナー");
        }

        if (_.isEmpty(monthly_sales) && permission === "オーナー") {
          await dispatch(getMonthly_sales(ownerId) as any);
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };
    fetchData();
  }, [dispatch, key, ownerId, permission, monthly_sales]);

  const searchItems = [
    { key: "year_month", value: "年-月" },
    { key: "monthly_sales", value: "売上" },
  ];

  const nodesProps = [{ string: "year_month" }, { number: "monthly_sales" }];

  const nodes: Monthly_salesState[] = monthly_sales;

  return (
    <div>
      {msMessage && (
        <BasicAlerts
          type="success"
          message={msMessage}
          space={1}
          padding={0.6}
        />
      )}

      {msError && (
        <BasicAlerts type="error" message={msError} space={1} padding={0.6} />
      )}
      <div className="mx-8 my-4">
        <div className="flex justify-end items-center mb-4 gap-4">
          <RouterButton link="/daily_sales" value="日次売上画面へ" />
          <RouterButton link="/yearly_sales" value="年次売上画面へ" />
        </div>

        {msStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/monthly_sales"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default monthly_sales;
