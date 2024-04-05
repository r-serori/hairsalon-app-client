import Link from "next/link";

const monthly_sales: React.FC = () => {
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
    </div>
  );
};

export default monthly_sales;
