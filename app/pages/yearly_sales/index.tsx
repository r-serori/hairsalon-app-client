import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Yearly_salesState,
  getYearly_sales,
} from "../../store/sales/yearly_sales/yearly_saleSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  yearly_salesStore,
  yearly_saleStatus,
  yearly_saleMessage,
  yearly_saleError,
} from "../../components/Hooks/selector";
import { userKey } from "../../components/Hooks/authSelector";
import { allLogout, ownerPermission } from "../../components/Hooks/useMethod";
import { getUserKey } from "../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import _ from "lodash";

const yearly_sales: React.FC = () => {
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const yearly_sales: Yearly_salesState[] = useSelector(yearly_salesStore);

  const ysStatus: string = useSelector(yearly_saleStatus);

  const ysMessage: string | null = useSelector(yearly_saleMessage);

  const ysError: string | null = useSelector(yearly_saleError);

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
          setTHeaderItems(["年", "売上", "削除"]);
        } else {
          throw new Error("Permission is not オーナー");
        }

        if (_.isEmpty(yearly_sales) && permission === "オーナー") {
          dispatch(getYearly_sales(ownerId) as any);
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, key, permission, ownerId, yearly_sales]);

  const searchItems = [
    { key: "year", value: "年" },
    { key: "yearly_sales", value: "売上" },
  ];

  const nodesProps = [{ string: "year" }, { number: "yearly_sales" }];

  const nodes: Yearly_salesState[] = yearly_sales;

  return (
    <div>
      {ysMessage && (
        <BasicAlerts
          type="success"
          message={ysMessage}
          space={1}
          padding={0.6}
        />
      )}

      {ysError && (
        <BasicAlerts type="error" message={ysError} space={1} padding={0.6} />
      )}
      <div className="mx-4 mt-4">
        <div className="flex mb-4 justify-end items-center gap-4">
          <RouterButton link="/daily_sales" value="日次売上画面へ" />
          <RouterButton link="/monthly_sales" value="月次売上画面へ" />
        </div>

        {ysStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/yearly_sales"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default yearly_sales;
