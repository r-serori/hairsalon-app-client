import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { use, useEffect } from "react";
import { getCourse } from "../../store/courses/courseSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import { useState } from "react";
import { useRouter } from "next/router";
import RouterButton from "../../components/elements/button/RouterButton";

const courses: React.FC = () => {
  const [role, setRole] = useState<string>("");
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const router = useRouter();

  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.course.status);

  const message = useSelector((state: RootState) => state.course.message);

  const error = useSelector((state: RootState) => state.course.error);

  const courses = useSelector((state: RootState) => state.course.course);
  console.log("coursesです");
  console.log(courses);

  useEffect(() => {
    try {
      const role = localStorage.getItem("role");
      if (
        role === "スタッフ" ||
        role === "マネージャー" ||
        role === "オーナー"
      ) {
        setRole(role);
      } else {
        router.push("/dashboard");
      }
      if (role === "オーナー") {
        setTHeaderItems(["コース名", "価格", "編集", "削除"]);
      } else if (role === "マネージャー") {
        setTHeaderItems(["コース名", "価格", "編集"]);
      } else {
        setTHeaderItems(["コース名", "価格"]);
      }
      if (
        courses.length === 0 &&
        (role === "オーナー" || role === "マネージャー" || role === "スタッフ")
      ) {
        const ownerId = Number(localStorage.getItem("owner_id"));
        dispatch(getCourse(ownerId) as any);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const searchItems = [
    { key: "course_name", value: "コース名" },
    { key: "price", value: "価格" },
  ];

  console.log("roleです", role);
  console.log("tHeaderItemsです", tHeaderItems);

  const nodesProps = [{ text: "course_name" }, { number: "price" }];

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
        {loading === "loading" && !tHeaderItems ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/courses"
            role={role}
          />
        )}
      </div>
    </div>
  );
};

export default courses;
