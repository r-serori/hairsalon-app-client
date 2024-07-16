import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  HairstyleState,
  getHairstyle,
} from "../../store/hairstyles/hairstyleSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  hairstylesStore,
  hairstyleStatus,
  hairstyleMessage,
  hairstyleError,
} from "../../components/Hooks/selector";
import { userKey, permissionStore } from "../../components/Hooks/authSelector";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import { PermissionsState } from "../../store/auth/permissionSlice";
import _ from "lodash";

const hairstyles: React.FC = () => {
  const router = useRouter();
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const dispatch = useDispatch();

  const hairstyles: HairstyleState[] = useSelector(hairstylesStore);
  console.log(hairstyles);

  const hStatus: string = useSelector(hairstyleStatus);

  const hMessage: string | null = useSelector(hairstyleMessage);

  const hError: string | null = useSelector(hairstyleError);

  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        staffPermission(permission, router);

        if (permission === "オーナー") {
          setTHeaderItems(["髪型名", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          setTHeaderItems(["髪型名", "編集"]);
        } else {
          setTHeaderItems(["髪型名"]);
        }
        if (
          _.isEmpty(hairstyles) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getHairstyle({}) as any);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    if (permission) fetchData();
  }, [dispatch, permission]);

  const searchItems = [{ key: "hairstyle_name", value: "髪型" }];

  const nodesProps = [{ text: "hairstyle_name" }];

  const nodes = hairstyles;
  return (
    <div>
      {hMessage && (
        <BasicAlerts
          type="success"
          message={hMessage}
          space={1}
          padding={0.6}
        />
      )}

      {hError && (
        <BasicAlerts type="error" message={hError} space={1} padding={0.6} />
      )}
      {hStatus === "loading" || !nodes || permission === null ? (
        <p>Loading...</p>
      ) : (
        <div className="mx-4">
          <div className="my-4">
            <RouterButton link="/hairstyles/create" value="髪型情報新規作成" />
          </div>

          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/hairstyles"
            role={permission}
          />
        </div>
      )}
    </div>
  );
};

export default hairstyles;
