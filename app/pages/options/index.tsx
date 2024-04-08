import Link from "next/link";
import ComponentTable from "../../components/elements/table";

const options: React.FC = () => {
  const tHeaderItems = ["オプション名", "価格", "編集", "削除"];

  const nodesProps = [{ text: "option_name" }, { number: "price" }];

  const nodes = [
    {
      id: 1,
      option_name: "エステ",
      price: 3000,
    },
    {
      id: 2,
      option_name: "ヘッドスパ",
      price: 2000,
    },
  ];
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

      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/options"
      />
    </div>
  );
};

export default options;
