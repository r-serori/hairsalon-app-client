import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { use, useEffect } from "react";
import { CourseState, getCourse } from "../../store/courses/courseSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import { useState } from "react";
import { useRouter } from "next/router";
import { userKey } from "../../components/Hooks/authSelector";
import RouterButton from "../../components/elements/button/RouterButton";
import {
  courseError,
  courseMessage,
  courseStatus,
  coursesStore,
} from "../../components/Hooks/selector";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import { getUserKey } from "../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import _ from "lodash";

const courses: React.FC = () => {
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);

  const router = useRouter();

  const dispatch = useDispatch();

  const cStatus: string = useSelector(courseStatus);

  const cMessage: string | null = useSelector(courseMessage);

  const cError: string | null = useSelector(courseError);

  const key: string | null = useSelector(userKey);

  const courses: CourseState[] = useSelector(coursesStore);
  console.log("coursesです");
  console.log(courses);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (key === null) {
          const userKey: string = await getUserKey(dispatch);

          if (userKey !== null) {
            const roleData: string | null = await getRole(userKey);
            const ownerId: number | null = await getOwnerId(userKey);

            const vioRole: "オーナー" | "マネージャー" | "スタッフ" | null =
              await getVioRoleData(userKey);

            if (roleData !== null && ownerId !== null && vioRole !== null) {
              setOwnerId(ownerId);
              setPermission(vioRole);
            } else {
              throw new Error("RoleData or ownerId is null");
            }
          } else {
            throw new Error("UserKey is null");
          }
        }

        staffPermission(permission, router);

        if (
          _.isEmpty(courses) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getCourse(ownerId) as any); // getCourseの非同期処理をawaitする
        } else {
          return;
        }

        if (permission === "オーナー") {
          setTHeaderItems(["コース名", "価格", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          setTHeaderItems(["コース名", "価格", "編集"]);
        } else {
          setTHeaderItems(["コース名", "価格"]);
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData(); // useEffect内で関数を呼び出す
  }, [dispatch, key, courses, ownerId]); // useEffectの依存リストを指定

  const searchItems = [
    { key: "course_name", value: "コース名" },
    { key: "price", value: "価格" },
  ];

  console.log("tHeaderItemsです", tHeaderItems);

  const nodesProps = [{ text: "course_name" }, { number: "price" }];

  const nodes = courses;

  return (
    <div>
      {cMessage && (
        <BasicAlerts
          type="success"
          message={cMessage}
          space={1}
          padding={0.6}
        />
      )}

      {cError && (
        <BasicAlerts type="error" message={cError} space={1} padding={0.6} />
      )}
      <div className="mx-8 mt-4">
        <div className="flex my-4 ml-2">
          <RouterButton link="/courses/create" value="新規作成" />
        </div>
        {cStatus === "loading" && !tHeaderItems ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/courses"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default courses;
