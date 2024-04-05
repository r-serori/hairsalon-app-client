import Link from "next/link";

const customersShow = () => {
  return (
    <div>
      <h1>Customer Show</h1>
      <Link href="/customers/[id]/edit?id=1">編集</Link>
      <br />

      <Link href="/customers/[id]/delete?id=1">削除</Link>
      <br />
    </div>
  );
};

export default customersShow;
