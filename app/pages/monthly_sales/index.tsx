import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Monthly_salesState,
  getMonthly_sales,
} from "../../store/monthly_sales/monthly_saleSlice";
import BasicAlerts from "../../components/elements/alert/BasicAlert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useRouter, NextRouter } from "next/router";
import {
  monthly_salesStore,
  monthly_saleStatus,
  monthly_saleMessage,
  monthly_saleError,
  monthly_saleErrorStatus,
} from "../../components/Hooks/selector";
import { allLogout, ownerPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { permissionStore } from "../../components/Hooks/authSelector";
import { PermissionsState } from "../../store/auth/permissionSlice";
import EasyModal from "../../components/elements/modal/easy/EasyModal";
import { AppDispatch } from "../../redux/store";
import { renderError } from "../../store/errorHandler";

const monthly_sales: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [salesOpen, setSalesOpen] = useState<boolean>(false);
  const [yearMonth, setYearMonth] = useState<string>("");

  const monthly_sales: Monthly_salesState[] = useSelector(monthly_salesStore);
  const msStatus: string = useSelector(monthly_saleStatus);
  const msMessage: string | null = useSelector(monthly_saleMessage);
  const msError: string | null = useSelector(monthly_saleError);
  const msErrorStatus: number = useSelector(monthly_saleErrorStatus);

  const permission: PermissionsState = useSelector(permissionStore);

  const nowMonthlySales = async () => {
    try {
      const response = await dispatch(getMonthly_sales() as any);
      if (response.meta.requestStatus === "rejected") {
        const re = renderError(msErrorStatus, router, dispatch);
        if (re === null) throw new Error("月次売上情報の取得に失敗しました");
      }
      setYearMonth("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        ownerPermission(permission, router);

        if (permission === "オーナー") {
          setTHeaderItems(["年月", "売上", "編集", "削除"]);
        } else {
          router.push("/dashboard");
        }

        if (_.isEmpty(monthly_sales) && permission === "オーナー") {
          const response = await dispatch(getMonthly_sales() as any);
          setYearMonth("");
          if (response.meta.requestStatus === "rejected") {
            const re = renderError(msErrorStatus, router, dispatch);
            if (re === null)
              throw new Error("月次売上情報の取得に失敗しました");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (permission) fetchData();
  }, [dispatch, permission]);

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
      {msStatus === "loading" || !nodes ? (
        <p>Loading...</p>
      ) : permission === null ? (
        <p>あなたに権限はありません。</p>
      ) : (
        <div className="mx-4">
          <div className="flex justify-between items-center my-4">
            <div className="flex justify-start items-center gap-4 ">
              {yearMonth === "" && (
                <EasyModal
                  open={salesOpen}
                  setOpen={setSalesOpen}
                  whoAreYou="monthlySales"
                  yearMonth={yearMonth}
                  setYearMonth={setYearMonth}
                />
              )}
              {yearMonth !== "" && (
                <button
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md text-bold px-4 py-2 text-center "
                  onClick={() => {
                    nowMonthlySales();
                  }}
                >
                  現在の年月に戻す
                </button>
              )}
            </div>
            <div className="flex justify-end items-center gap-4">
              <RouterButton link="/daily_sales" value="日次売上画面へ" />
              <RouterButton link="/yearly_sales" value="年次売上画面へ" />
            </div>
          </div>

          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/monthly_sales"
            role={permission}
          />
        </div>
      )}
    </div>
  );
};

export default monthly_sales;
