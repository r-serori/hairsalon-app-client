import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDaily_sales } from "../../store/sales/daily_sales/daily_saleSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { Router } from "next/router";
import { OwnerPermission } from "../../components/Hooks/OwnerPermission";
import { useState } from "react";
import { useRouter } from "next/router";

const daily_sales: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const dispatch = useDispatch();

  const daily_sales = useSelector(
    (state: RootState) => state.daily_sales.daily_sales
  );
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "オーナー") {
      setRole(role);
    } else {
      router.push("/dashboard");
    }
    if (daily_sales.length === 0 && role === "オーナー") {
      const ownerId = Number(localStorage.getItem("owner_id"));
      dispatch(getDaily_sales(ownerId) as any);
    } else {
      return;
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.daily_sales.loading);

  const message = useSelector((state: RootState) => state.daily_sales.message);

  const error = useSelector((state: RootState) => state.daily_sales.error);

  const searchItems = [
    { key: "date", value: "日付" },
    { key: "daily_sales", value: "売上" },
  ];

  const tHeaderItems = ["日付", "売上", "更新日", "削除"];

  const nodesProps = [
    { string: "date" },
    { number: "daily_sales" },
    { date: "updated_at" },
  ];

  const nodes = daily_sales;

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      <div className="mx-8 mt-4">
        <div className="flex justify-center items-center mb-4">
          <div className="flex justify-start items-center mb-4 gap-4">
            <RouterButton link="/monthly_sales" value="月次売上画面へ" />
            <RouterButton link="/yearly_sales" value="年次売上画面へ" />
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/daily_sales"
            isLoading={loading}
            role={role}
          />
        )}
      </div>
    </div>
  );
};

export default daily_sales;
