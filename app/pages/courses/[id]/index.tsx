import Link from "next/link";
const courseShow = () => {
  return (
    <div>
      <h1>Course Show</h1>
      <Link href="/courses/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/courses/[id]/delete?id=1">削除</Link>
      <br />
    </div>
  );
};

export default courseShow;
