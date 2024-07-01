import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  MerchandiseState,
  getMerchandise,
} from "../../store/merchandises/merchandiseSlice";
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
import { userKey, permissionStore } from "../../components/Hooks/authSelector";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import { PermissionsState } from "../../store/auth/permissionSlice";
import _ from "lodash";

const merchandises = () => {
  const router = useRouter();
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);
  const dispatch = useDispatch();

  const merchandises: MerchandiseState[] = useSelector(merchandiseStore);
  console.log(merchandises);

  const mStatus: string = useSelector(merchandiseStatus);

  const mMessage: string | null = useSelector(merchandiseMessage);

  const mError: string | null = useSelector(merchandiseError);

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await staffPermission(permission, router);

        if (
          _.isEmpty(merchandises) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getMerchandise({}) as any);
        } else {
          return;
        }
        if (permission === "オーナー") {
          await setTHeaderItems(["物販名", "価格", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          await setTHeaderItems(["物販名", "価格", "編集"]);
        } else {
          await setTHeaderItems(["物販名", "価格"]);
        }
      } catch (error) {
        console.error("Error:", error);
        await allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, key, merchandises, permission]);

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
