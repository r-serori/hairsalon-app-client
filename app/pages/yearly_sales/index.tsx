import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getYearly_sales } from "../../store/sales/yearly_sales/yearly_saleSlice";
import { RootState } from "../../redux/store";

interface Yearly_salesProps {
  update?: boolean;
}
const yearly_sales: React.FC<Yearly_salesProps> = ({ update }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (update) {
      return;
    } else {
      dispatch(getYearly_sales({}) as any);
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
    <div className="mx-auto max-w-6xl px-4">
      {message ? (
        <p className="py-4 text-blue-700">{message}</p>
      ) : error ? (
        <p className="py-4 text-red-700">{error}</p>
      ) : null}
      <div className="flex space-x-4 mb-4">
        <Link href="/yearly_sales/create">新規作成</Link>
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
          link="/yearly_sales"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default yearly_sales;
