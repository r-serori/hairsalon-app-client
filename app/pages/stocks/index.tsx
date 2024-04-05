import Link from "next/link";

const stocks: React.FC = () => {
  return (
    <div>
      <h1>stocks</h1>
      <Link href="/stocks/create">新規作成</Link>
      <br />
      <Link href="/stocks/[id]/edit?id=1">編集</Link>
      <br />
      <Link href="/stocks/[id]/delete?id=1">削除</Link>
      <br />
      <Link href="/stocks/[id]/search/[search_stock]?id=id&search_stock=search_stock">
        検索
      </Link>
      <br />
      <Link href="/stock_categories">カテゴリ画面</Link>

      <br />
    </div>
  );
};

export default stocks;
