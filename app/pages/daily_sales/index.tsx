import Link from "next/link";
import ComponentTable from "../../components/elements/table";

const daily_sales: React.FC = () => {
  const tHeaderItems = ["日付", "売上", "更新日", "編集", "削除"];

  const nodesProps = [
    { date: "date" },
    { number: "daily_sales" },
    { date: "updated_at" },
  ];

  const nodes = [
    {
      id: 1,
      date: "2024-01-01",
      daily_sales: 70000,
      updated_at: "2024-01-01",
    },
    {
      id: 2,
      date: "2024-01-02",
      daily_sales: 60000,
      updated_at: "2024-01-02",
    },
  ];

  return (
    <div>
      <h1>daily_sales</h1>
      <Link href="/daily_sales/create">新規作成</Link>
      <br />
      <Link href="/daily_sales/[id]?id=1">詳細</Link>
      <br />
      <Link href="/daily_sales/[id]/edit?id=1">編集</Link>
      <br />
      <Link href="/daily_sales/[id]/delete?id=1">削除</Link>
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
        link="/daily_sales"
      />
    </div>
  );
};

export default daily_sales;
