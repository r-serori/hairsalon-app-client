import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { use, useEffect } from "react";
import { getCourse } from "../../store/courses/courseSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import usePageReload from "../../components/Hooks/usePageReload";
import { useState } from "react";
import { useRouter } from "next/router";
import RouterButton from "../../components/elements/button/RouterButton";

const courses: React.FC = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.course.loading);

  const message = useSelector((state: RootState) => state.course.message);

  const error = useSelector((state: RootState) => state.course.error);

  const courses = useSelector((state: RootState) => state.course.course);
  console.log("coursesです");
  console.log(courses);

  useEffect(() => {
    try {
      if (courses.length === 0) {
        const ownerId = Number(localStorage.getItem("owner_id"));
        dispatch(getCourse(ownerId) as any);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("コース取得！！");
    }
  }, [dispatch]);

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
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      <div className="mx-8 mt-4">
        <div className="flex my-4 ml-2">
          <RouterButton link="/courses/create" value="新規作成" />
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
    </div>
  );
};

export default courses;
