import Link from "next/link";

const merchandises = () => {
  return (
    <div>
      <h1>merchandises</h1>
      <Link href="/merchandises/create">新規作成</Link>
      <br />

      <Link href="/merchandises/[id]?id=1">詳細</Link>
      <br />

      <Link href="/merchandises/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/merchandises/[id]/delete?id=1">削除</Link>
      <br />

      <Link href="/merchandises/[id]/search?id=merchandise">検索</Link>
      <br />
    </div>
  );
};

export default merchandises;
