import Link from "next/link";

const hairstyles: React.FC = () => {
  return (
    <div>
      <h1>hairstyles</h1>
      <Link href="/hairstyles/create">新規作成</Link>
      <br />

      <Link href="/hairstyles/[id]?id=1">詳細</Link>
      <br />

      <Link href="/hairstyles/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/hairstyles/[id]/delete?id=1">削除</Link>
      <br />

      <Link href="/hairstyles/[id]/search?id=hairstyle">検索</Link>
      <br />
    </div>
  );
};

export default hairstyles;
