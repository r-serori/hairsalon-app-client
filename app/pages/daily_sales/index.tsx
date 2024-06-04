import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDaily_sales } from "../../store/sales/daily_sales/daily_saleSlice";
import { RootState } from "../../redux/store";

interface Daily_salesProps {
  update?: boolean;
}

const daily_sales: React.FC<Daily_salesProps> = ({ update }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (update) {
      return;
    } else {
      dispatch(getDaily_sales({}) as any);
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.daily_sales.loading);

  const message = useSelector((state: RootState) => state.daily_sales.message);

  const error = useSelector((state: RootState) => state.daily_sales.error);

  const daily_sales = useSelector(
    (state: RootState) => state.daily_sales.daily_sales
  );

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
    <div className="mx-auto max-w-6xl px-4 ">
      {message ? (
        <p className="py-4 text-blue-700">{message}</p>
      ) : error ? (
        <p className="py-4 text-red-700">{error}</p>
      ) : null}
      <div className="flex space-x-4 mb-4">
        <Link href="/daily_sales/create">新規作成</Link>
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
          link="/daily_sales"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default daily_sales;
