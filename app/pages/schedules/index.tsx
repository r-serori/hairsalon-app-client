import Link from "next/link";

const schedules: React.FC = () => {
  return (
    <div>
      <h1>schedules</h1>

      <Link href="/schedules/create">予約作成</Link>

      <br />

      <Link href="/schedules/[id]/edit?id=1">予約編集</Link>
      <br />

      <Link href="/schedules/[id]/delete?id=1">削除</Link>

      <br />

      <Link href="/schedules/[id]/search?id=1">検索</Link>

      <br />
      <Link href="/daily_sales">日次売上</Link>

      <br />
    </div>
  );
};

export default schedules;
