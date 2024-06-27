import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMonthly_sales } from "../../store/sales/monthly_sales/monthly_saleSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";

const monthly_sales: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const dispatch = useDispatch();

  const monthly_sales = useSelector(
    (state: RootState) => state.monthly_sales.monthly_sales
  );

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "オーナー") {
      setRole(role);
    } else {
      router.push("/dashboard");
    }
    if (role === "オーナー") {
      setTHeaderItems(["年月", "売上", "編集", "削除"]);
    } else {
      router.push("/dashboard");
    }
    if (monthly_sales.length === 0 && role === "オーナー") {
      try {
        const ownerId = Number(localStorage.getItem("owner_id"));
        dispatch(getMonthly_sales(ownerId) as any);
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch]);
  const loading = useSelector((state: RootState) => state.monthly_sales.status);

  const message = useSelector(
    (state: RootState) => state.monthly_sales.message
  );

  const error = useSelector((state: RootState) => state.monthly_sales.error);

  const searchItems = [
    { key: "year_month", value: "年-月" },
    { key: "monthly_sales", value: "売上" },
  ];

  const nodesProps = [{ string: "year_month" }, { number: "monthly_sales" }];

  const nodes = monthly_sales;

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      <div className="mx-8 my-4">
        <div className="flex justify-end items-center mb-4 gap-4">
          <RouterButton link="/daily_sales" value="日次売上画面へ" />
          <RouterButton link="/yearly_sales" value="年次売上画面へ" />
        </div>

        {loading === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/monthly_sales"
            role={role}
          />
        )}
      </div>
    </div>
  );
};

export default monthly_sales;
