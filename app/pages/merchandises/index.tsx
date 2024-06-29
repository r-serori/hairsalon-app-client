import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  MerchandiseState,
  getMerchandise,
} from "../../store/merchandises/merchandiseSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  merchandiseStore,
  merchandiseStatus,
  merchandiseMessage,
  merchandiseError,
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

const merchandises = () => {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);
  const dispatch = useDispatch();

  const merchandises: MerchandiseState[] = useSelector(merchandiseStore);
  console.log(merchandises);

  const mStatus: string = useSelector(merchandiseStatus);

  const mMessage: string | null = useSelector(merchandiseMessage);

  const mError: string | null = useSelector(merchandiseError);

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
          _.isEmpty(merchandises) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getMerchandise(ownerId) as any);
        } else {
          return;
        }
        if (permission === "オーナー") {
          setTHeaderItems(["物販名", "価格", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          setTHeaderItems(["物販名", "価格", "編集"]);
        } else {
          setTHeaderItems(["物販名", "価格"]);
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, key, merchandises, ownerId]);

  const searchItems = [
    { key: "merchandise_name", value: "物販名" },
    { key: "price", value: "価格" },
  ];

  const nodesProps = [{ text: "merchandise_name" }, { number: "price" }];

  const nodes = merchandises;

  return (
    <div>
      {mMessage && (
        <BasicAlerts
          type="success"
          message={mMessage}
          space={1}
          padding={0.6}
        />
      )}

      {mError && (
        <BasicAlerts type="error" message={mError} space={1} padding={0.6} />
      )}

      <div className="mx-4">
        <div className="flex my-4 ">
          <RouterButton link="/merchandises/create" value="物販情報新規作成" />
        </div>
        {mStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/merchandises"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default merchandises;
