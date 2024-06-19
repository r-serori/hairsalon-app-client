import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getYearly_sales } from "../../store/sales/yearly_sales/yearly_saleSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";

const yearly_sales: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (yearly_sales.length === 0) {
      const ownerId = Number(localStorage.getItem("owner_id"));
      dispatch(getYearly_sales(ownerId) as any);
    } else {
      return;
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.yearly_sales.loading);

  const message = useSelector((state: RootState) => state.yearly_sales.message);

  const error = useSelector((state: RootState) => state.yearly_sales.error);

  const yearly_sales = useSelector(
    (state: RootState) => state.yearly_sales.yearly_sales
  );

  const searchItems = [
    { key: "year", value: "年" },
    { key: "yearly_sales", value: "売上" },
  ];

  const tHeaderItems = ["年", "売上", "更新日", "削除"];

  const nodesProps = [
    { string: "year" },
    { number: "yearly_sales" },
    { date: "updated_at" },
  ];

  const nodes = yearly_sales;

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      <div className="mx-8 mt-4">
        <div className="flex mb-4 justify-end items-center gap-4">
          <RouterButton link="/daily_sales" value="日次売上画面へ" />
          <RouterButton link="/monthly_sales" value="月次売上画面へ" />
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/yearly_sales"
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default yearly_sales;
