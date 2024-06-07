import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourse } from "../../store/courses/courseSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import { Basic } from "next/font/google";

const courses: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse({}) as any);
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.course.loading);

  const message = useSelector((state: RootState) => state.course.message);

  const error = useSelector((state: RootState) => state.course.error);

  const courses = useSelector((state: RootState) => state.course.course);
  console.log("coursesです");
  console.log(courses);

  const searchItems = [
    { key: "course_name", value: "コース名" },
    { key: "price", value: "価格" },
  ];

  const tHeaderItems = ["コース名", "価格", "更新日", "編集", "削除"];

  const nodesProps = [
    { text: "course_name" },
    { number: "price" },
    { text: "updated_at" },
  ];

  const nodes = courses;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 ">
      {message ? (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      ) : error ? (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      ) : null}
      <div className="flex space-x-4 mb-4">
        <Link href="/courses/create">新規作成</Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ComponentTable
          nodes={nodes}
          searchItems={searchItems}
          nodesProps={nodesProps}
          tHeaderItems={tHeaderItems}
          link="/courses"
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default courses;
