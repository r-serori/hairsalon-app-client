import Link from "next/link";

const options: React.FC = () => {
  return (
    <div>
      <h1>options</h1>
      <Link href="/options/create">新規作成</Link>
      <br />

      <Link href="/options/[id]?id=1">詳細</Link>
      <br />

      <Link href="/options/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/options/[id]/delete?id=1">削除</Link>
      <br />

      <Link href="/options/[id]/search?id=option">検索</Link>
      <br />
    </div>
  );
};

export default options;
