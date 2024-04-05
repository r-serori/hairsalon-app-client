import Link from "next/link";

const customers = () => {
  return (
    <div>
      <h1>Customers</h1>
      <Link href="/customers/create">新規作成</Link>
      <br />

      <Link href="/customers/[id]?id=1">詳細</Link>
      <br />

      <Link href="/customers/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/customers/[id]/delete?id=1">削除</Link>
      <br />

      <Link href="/customers/[id]/search?id=customer">検索</Link>
      <br />

      <Link href="/customers/[id]/schedule?id=1">予約</Link>
    </div>
  );
};

export default customers;
