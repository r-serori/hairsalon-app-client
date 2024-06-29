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
import { userKey } from "../../components/Hooks/authSelector";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import { getUserKey } from "../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import _ from "lodash";

const hairstyles: React.FC = () => {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);
  const dispatch = useDispatch();

  const hairstyles: HairstyleState[] = useSelector(hairstylesStore);
  console.log(hairstyles);

  const hStatus: string = useSelector(hairstyleStatus);

  const hMessage: string | null = useSelector(hairstyleMessage);

  const hError: string | null = useSelector(hairstyleError);

  const key: string | null = useSelector(userKey);

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
          _.isEmpty(hairstyles) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getHairstyle(ownerId) as any);
        } else {
          return;
        }
        if (permission === "オーナー") {
          setTHeaderItems(["髪型名", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          setTHeaderItems(["髪型名", "編集"]);
        } else {
          setTHeaderItems(["髪型名"]);
        }
      } catch (error) {
        console.log(error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, key, hairstyles, ownerId]);

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

      <div>
        <div className="my-4 ml-4">
          <RouterButton
            link="/hairstyles/create"
            value="ヘアスタイル情報新規作成"
          />
        </div>
        {hStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/hairstyles"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default hairstyles;
