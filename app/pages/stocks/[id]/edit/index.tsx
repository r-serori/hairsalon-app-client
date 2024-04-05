import Link from "next/link";

const stockEdit = () => {
  return (
    <div>
      <h1>Stock Edit</h1>
      <Link href="/stocks/[id]/delete?id=1">削除</Link>
      <br />
    </div>
  );
};

export default stockEdit;
