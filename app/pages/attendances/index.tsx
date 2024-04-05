import Link from "next/link";
import { useState } from "react";
import ComponentTable from "../../components/elements/table";

const attendances = () => {
  const tHeaderItems = ["名前", "電話番号", "役職", "住所"];
  const nodesItems = ["name", "phone_number", "position", "address"];

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
      <h1 className="text-3xl font-bold mb-4">勤怠管理</h1>
      <div className="flex space-x-4 mb-4">
        <Link href="/attendances/create" className="btn">
          新規作成
        </Link>
        <Link href="/attendances/[id]?id=1" className="btn">
          詳細
        </Link>
        <Link href="/attendances/[id]/edit?id=1" className="btn">
          編集
        </Link>
        <Link href="/attendances/[id]/delete?id=1" className="btn">
          削除
        </Link>
      </div>
      <ComponentTable
        nodes={nodes}
        nodesItems={nodesItems}
        tHeaderItems={tHeaderItems}
      />
    </div>
  );
};

export default attendances;
