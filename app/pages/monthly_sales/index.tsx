import Link from "next/link";
import ComponentTable from "../../components/elements/table";

const monthly_sales: React.FC = () => {
  const tHeaderItems = ["年", "月", "売上", "更新日", "編集", "削除"];

  const nodesProps = [
    { number: "year" },
    { number: "month" },
    { number: "monthly_sales" },
    { date: "updated_at" },
  ];

  const nodes = [
    {
      id: 1,
      year: "2024",
      month: "1",
      monthly_sales: 1200000,
      updated_at: "2024-01-01",
    },
    {
      id: 2,
      year: "2024",
      month: "2",
      monthly_sales: 1100000,
      updated_at: "2024-02-01",
    },
  ];
  return (
    <div>
      <h1>monthly_sales</h1>
      <Link href="/monthly_sales/create">新規作成</Link>
      <br />
      <Link href="/monthly_sales/[id]?id=1">詳細</Link>
      <br />
      <Link href="/monthly_sales/[id]/edit?id=1">編集</Link>
      <br />
      <Link href="/monthly_sales/[id]/delete?id=1">削除</Link>
      <br />
      <Link href="/daily_sales">日売上</Link>
      <br />
      <Link href="/monthly_sales">月売上</Link>
      <br />
      <Link href="/yearly_sales">年売上</Link>
      <br />

      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/monthly_sales"
      />
    </div>
  );
};

export default monthly_sales;
