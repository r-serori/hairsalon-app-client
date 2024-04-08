import Link from "next/link";
import ComponentTable from "../../components/elements/table";

const merchandises = () => {
  const tHeaderItems = ["物販名", "価格", "編集", "削除"];

  const nodesProps = [{ text: "merchandise_name" }, { number: "price" }];

  const nodes = [
    {
      id: 1,
      merchandise_name: "ワックス",
      price: 1500,
    },
    {
      id: 2,
      merchandise_name: "化粧水",
      price: 1200,
    },
  ];
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

      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/merchandises"
      />
    </div>
  );
};

export default merchandises;
