import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Daily_salesState,
  getDaily_sales,
} from "../../store/daily_sales/daily_saleSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  daily_saleError,
  daily_saleMessage,
  daily_salesStore,
  daily_saleStatus,
} from "../../components/Hooks/selector";
import { getUserKey, ownerPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { allLogout } from "../../components/Hooks/useMethod";
import { userKey, permissionStore } from "../../components/Hooks/authSelector";
import { PermissionsState } from "../../store/auth/permissionSlice";
import EasyModal from "../../components/elements/modal/easy/EasyModal";

const daily_sales: React.FC = () => {
  const router = useRouter();
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [salesOpen, setSalesOpen] = useState<boolean>(false);
  const [yearMonth, setYearMonth] = useState<string>("");

  const dispatch = useDispatch();

  const daily_sales: Daily_salesState[] = useSelector(daily_salesStore);

  const dsStatus: string | null = useSelector(daily_saleStatus);

  const dsMessage: string | null = useSelector(daily_saleMessage);

  const dsError: string | null = useSelector(daily_saleError);

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  const nowDailySales = async () => {
    try {
      await dispatch(getDaily_sales({}) as any);
      setYearMonth("");
    } catch (error) {
      console.error("Error:", error);
      allLogout(dispatch);
      router.push("/auth/login");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        ownerPermission(permission, router);

        if (permission === "オーナー") {
          setTHeaderItems(["日付", "売上", "編集", "削除"]);
        } else {
          throw new Error("Permission is not オーナー");
        }

        if (_.isEmpty(daily_sales) && permission === "オーナー") {
          setYearMonth("");
          await dispatch(getDaily_sales({}) as any);
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    if (permission) fetchData();
  }, [dispatch]);

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

      {dsStatus === "loading" || !nodes || permission === null ? (
        <p>Loading...</p>
      ) : (
        <div className="mx-4">
          <div className="flex justify-between items-center my-4">
            <div className="flex justify-start items-center gap-4 ">
              <EasyModal
                open={salesOpen}
                setOpen={setSalesOpen}
                whoAreYou="dailySales"
                setYearMonth={setYearMonth}
              />
              {yearMonth !== "" && (
                <button
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md text-bold px-4 py-2 text-center "
                  onClick={() => {
                    nowDailySales();
                  }}
                >
                  現在の年月に戻す
                </button>
              )}
            </div>
            <div className="flex justify-end items-center gap-4">
              <RouterButton link="/monthly_sales" value="月次売上画面へ" />
              <RouterButton link="/yearly_sales" value="年次売上画面へ" />
            </div>
          </div>

          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/daily_sales"
            role={permission}
          />
        </div>
      )}
    </div>
  );
};

export default daily_sales;
