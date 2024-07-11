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
import { PermissionsState } from "../../store/auth/permissionSlice";
import { userKey, permissionStore } from "../../components/Hooks/authSelector";
import { allLogout, ownerPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";
import EasyModal from "../../components/elements/modal/easy/EasyModal";

const yearly_sales: React.FC = () => {
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [salesOpen, setSalesOpen] = useState<boolean>(false);
  const [yearMonth, setYearMonth] = useState<string>("");

  const dispatch = useDispatch();
  const router = useRouter();

  const yearly_sales: Yearly_salesState[] = useSelector(yearly_salesStore);

  const ysStatus: string = useSelector(yearly_saleStatus);

  const ysMessage: string | null = useSelector(yearly_saleMessage);

  const ysError: string | null = useSelector(yearly_saleError);

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  const nowYearlySales = async () => {
    try {
      await dispatch(getYearly_sales({}) as any);
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
          setTHeaderItems(["年", "売上", "削除"]);
        } else {
          throw new Error("Permission is not オーナー");
        }

        if (_.isEmpty(yearly_sales) && permission === "オーナー") {
          await dispatch(getYearly_sales({}) as any);
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch]);

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
      <div className="mx-4">
        <div className="flex justify-between items-center my-4">
          <div className="flex justify-start items-center gap-4 ">
            <EasyModal
              open={salesOpen}
              setOpen={setSalesOpen}
              whoAreYou="yearlySales"
              setYearMonth={setYearMonth}
            />
            {yearMonth !== "" && (
              <button
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md text-bold px-4 py-2 text-center "
                onClick={() => {
                  nowYearlySales();
                }}
              >
                現在の年月に戻す
              </button>
            )}
          </div>
          <div className="flex justify-end items-center gap-4">
            <RouterButton link="/daily_sales" value="日次売上画面へ" />
            <RouterButton link="/monthly_sales" value="月次売上画面へ" />
          </div>
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
