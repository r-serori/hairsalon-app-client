import Link from "next/link";
import ComponentTable from "../../components/elements/table";

const attendances = () => {
  const DeleteButton = {};

  const attendanceTimes = {
    component: (node) => (
      <Link href="/attendances/[id]/time-management?id=1" className="btn">
        時間管理
      </Link>
    ),
  };

  const tHeaderItems = ["名前", "電話番号", "役職", "住所", "操作", "時間管理"];
  const nodesProps = [
    { text: "name" },
    { number: "phone_number" },
    { text: "position" },
    { text: "address" },
  ];

  const nodes = [
    {
      id: 1,
      name: "田中太郎",
      phone_number: "00011112222",
      position: "オーナー",
      address: "東京都港区2-2-22 208",
    },
    {
      id: 2,
      name: "田中次郎",
      phone_number: "00011113333",
      position: "社員",
      address: "東京都港区2-2-22 206",
    },
    // 他の行データもここに追加する
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 ">
      <div className="flex space-x-4 mb-4">
        <Link href="/attendances/create" className="btn">
          新規作成
        </Link>
        <Link href="/attendances/[id]?id=1" className="btn">
          詳細
        </Link>
      </div>
      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/attendances"
      />
    </div>
  );
};

export default attendances;
