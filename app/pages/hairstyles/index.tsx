import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  HairstyleState,
  getHairstyle,
} from "../../store/hairstyles/hairstyleSlice";
import BasicAlerts from "../../components/elements/alert/BasicAlert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useRouter, NextRouter } from "next/router";
import {
  hairstylesStore,
  hairstyleStatus,
  hairstyleMessage,
  hairstyleError,
  hairstyleErrorStatus,
} from "../../components/Hooks/selector";
import { permissionStore } from "../../components/Hooks/authSelector";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import { PermissionsState } from "../../store/auth/permissionSlice";
import _ from "lodash";
import { AppDispatch } from "../../redux/store";
import { renderError } from "../../store/errorHandler";
import { NodesProps, SearchItems } from "../../components/Hooks/interface";

const Hairstyles: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);

  const hairstyles: HairstyleState[] = useSelector(hairstylesStore);
  const hStatus: string = useSelector(hairstyleStatus);
  const hMessage: string | null = useSelector(hairstyleMessage);
  const hError: string | null = useSelector(hairstyleError);
  const hErrorStatus: number = useSelector(hairstyleErrorStatus);

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
          const response = await dispatch(getHairstyle() as any);
          if (response.meta.requestStatus === "rejected") {
            const re = renderError(hErrorStatus, router, dispatch);
            if (re === null) throw new Error("髪型情報の取得に失敗しました");
          }
        }
      } catch (error) {
        return;
      }
    };

    if (permission) fetchData();
  }, [dispatch, permission]);

  const searchItems: SearchItems = [{ key: "hairstyle_name", value: "髪型" }];

  const nodesProps: NodesProps[] = [{ text: "hairstyle_name" }];

  const nodes: HairstyleState[] = hairstyles;
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
      {hStatus === "loading" || !nodes ? (
        <p>Loading...</p>
      ) : permission === null ? (
        <p>あなたに権限はありません。</p>
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

export default Hairstyles;
