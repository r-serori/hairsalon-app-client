import Link from "next/link";
import ComponentTable from "../../components/elements/table";

const hairstyles: React.FC = () => {
  const tHeaderItems = ["髪型", "編集", "削除"];

  const nodesProps = [{ text: "hairstyle_name" }];

  const nodes = [
    {
      id: 1,
      hairstyle_name: "ワンレングス",
    },
    {
      id: 2,
      hairstyle_name: "グラデーション",
    },
  ];
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

      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/hairstyles"
      />
    </div>
  );
};

export default hairstyles;
