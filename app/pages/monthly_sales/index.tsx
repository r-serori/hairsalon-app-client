import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMonthly_sales } from "../../store/sales/monthly_sales/monthly_saleSlice";
import { RootState } from "../../redux/store";

const monthly_sales: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMonthly_sales({}) as any);
  }, [dispatch]);
  const loading = useSelector(
    (state: RootState) => state.monthly_sales.loading
  );

  const message = useSelector(
    (state: RootState) => state.monthly_sales.message
  );

  const error = useSelector((state: RootState) => state.monthly_sales.error);

  const monthly_sales = useSelector(
    (state: RootState) => state.monthly_sales.monthly_sales
  );

  const searchItems = [
    { key: "year_month", value: "年-月" },
    { key: "monthly_sales", value: "売上" },
  ];

  const tHeaderItems = ["年-月", "売上", "更新日", "削除"];

  const nodesProps = [
    { string: "year_month" },
    { number: "monthly_sales" },
    { date: "updated_at" },
  ];

  const nodes = monthly_sales;

  return (
    <div className="mx-auto max-w-6xl px-4 ">
      {message ? (
        <p className="py-4 text-blue-700">{message}</p>
      ) : error ? (
        <p className="py-4 text-red-700">{error}</p>
      ) : null}
      <div className="flex space-x-4 mb-4">
        <Link href="/monthly_sales/create">新規作成</Link>
        <Link href="/daily_sales">日売上</Link>
        <Link href="/monthly_sales">月売上</Link>
        <Link href="/yearly_sales">年売上</Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/monthly_sales"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default monthly_sales;
