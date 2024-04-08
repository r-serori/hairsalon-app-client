import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { number } from "yup";

const courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      course_name: "course1",
      price: 1000,
    },
    {
      id: 2,
      course_name: "course2",
      price: 2000,
    },
  ];

  const tHeaderItems = ["コース名", "価格", "編集", "削除"];

  const nodesProps = [{ text: "course_name" }, { number: "price" }];

  const nodes = [
    {
      id: 1,
      course_name: "カットとシェービングA",
      price: 7000,
    },
    {
      id: 2,
      course_name: "カットとシェービングB",
      price: 5000,
    },
  ];

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

      <ComponentTable
        nodes={nodes}
        nodesProps={nodesProps}
        tHeaderItems={tHeaderItems}
        link="/courses"
      />
    </div>
  );
};

export default courses;
