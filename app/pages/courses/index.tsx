import Link from "next/link";

const courses: React.FC = () => {
  return (
    <div>
      <h1>courses</h1>
      <Link href="/courses/create">新規作成</Link>
      <br />

      <Link href="/courses/[id]?id=1">詳細</Link>
      <br />

      <Link href="/courses/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/courses/[id]/delete?id=1">削除</Link>
      <br />

      <Link href="/courses/[id]/search?id=course">検索</Link>
    </div>
  );
};

export default courses;
