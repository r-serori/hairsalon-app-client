import Link from "next/link";
import ComponentTable from "../../components/elements/table";

const yearly_sales: React.FC = () => {
  const tHeaderItems = ["年", "売上", "更新日", "編集", "削除"];

  const nodesProps = [
    { date: "year" },
    { number: "yearly_sales" },
    { date: "updated_at" },
  ];

  const nodes = [
    {
      id: 1,
      year: "2024",
      yearly_sales: 12000000,
      updated_at: "2024-01-01",
    },
    {
      id: 2,
      year: "2025",
      yearly_sales: 10000000,
      updated_at: "2025-01-01",
    },
  ];
  return (
    <div>
      <h1>yearly_sales</h1>
      <Link href="/yearly_sales/create">新規作成</Link>
      <br />
      <Link href="/yearly_sales/[id]?id=1">詳細</Link>
      <br />
      <Link href="/yearly_sales/[id]/edit?id=1">編集</Link>
      <br />
      <Link href="/yearly_sales/[id]/delete?id=1">削除</Link>
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
        link="/yearly_sales"
      />
    </div>
  );
};

export default yearly_sales;
