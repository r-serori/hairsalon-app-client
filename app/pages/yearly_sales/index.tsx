import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Yearly_salesState,
  getYearly_sales,
} from "../../store/yearly_sales/yearly_saleSlice";
import BasicAlerts from "../../components/elements/alert/BasicAlert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useRouter, NextRouter } from "next/router";
import {
  yearly_salesStore,
  yearly_saleStatus,
  yearly_saleMessage,
  yearly_saleError,
  yearly_saleErrorStatus,
} from "../../components/Hooks/selector";
import { PermissionsState } from "../../store/auth/permissionSlice";
import { permissionStore } from "../../components/Hooks/authSelector";
import { ownerPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { AppDispatch } from "../../redux/store";
import { renderError } from "../../store/errorHandler";
import {
  NodesProps,
  SearchItems,
  THeaderItems,
} from "../../components/Hooks/interface";

const Yearly_sales: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [tHeaderItems, setTHeaderItems] = useState<THeaderItems>([]);

  const yearly_sales: Yearly_salesState[] = useSelector(yearly_salesStore);
  const ysStatus: string = useSelector(yearly_saleStatus);
  const ysMessage: string | null = useSelector(yearly_saleMessage);
  const ysError: string | null = useSelector(yearly_saleError);
  const ysErrorStatus: number = useSelector(yearly_saleErrorStatus);

  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        ownerPermission(permission, router);

        if (permission === "オーナー") {
          setTHeaderItems(["年", "売上", "編集", "削除"]);
        } else {
          throw new Error("Permission is not オーナー");
        }

        if (_.isEmpty(yearly_sales) && permission === "オーナー") {
          const response = await dispatch(getYearly_sales() as any);
          if (response.meta.requestStatus === "rejected") {
            const re = renderError(ysErrorStatus, router, dispatch);
            if (re === null) throw new Error("年次売上の取得に失敗しました");
          }
        }
      } catch (error) {
        return;
      }
    };

    if (permission) fetchData();
  }, [dispatch, permission]);

  const searchItems: SearchItems = [
    { key: "year", value: "年" },
    { key: "yearly_sales", value: "売上" },
  ];

  const nodesProps: NodesProps[] = [
    { text: "year" },
    { number: "yearly_sales" },
  ];

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

      {ysStatus === "loading" || !nodes ? (
        <p>Loading...</p>
      ) : permission === null ? (
        <p>あなたに権限はありません。</p>
      ) : (
        <div className="mx-4">
          <div className="flex justify-end items-center gap-4 my-4">
            <RouterButton link="/daily_sales" value="日次売上画面へ" />
            <RouterButton link="/monthly_sales" value="月次売上画面へ" />
          </div>

          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/yearly_sales"
            role={permission}
          />
        </div>
      )}
    </div>
  );
};

export default Yearly_sales;
