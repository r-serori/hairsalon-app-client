import Link from "next/link";

const stock_categories = () => {
  return (
    <div>
      <h1>Stock Categories</h1>
      <Link href="/stock_categories/create">新規作成</Link>
      <br />

      <Link href="/stock_categories/[id]?id=1">詳細</Link>
      <br />

      <Link href="/stock_categories/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/stock_categories/[id]/delete?id=1">削除</Link>
      <br />
    </div>
  );
};

export default stock_categories;
