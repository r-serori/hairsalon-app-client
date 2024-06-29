import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { OptionState, getOption } from "../../store/options/optionSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  optionError,
  optionMessage,
  optionStatus,
  optionsStore,
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

const options: React.FC = () => {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);

  const dispatch = useDispatch();

  const opStatus: string = useSelector(optionStatus);

  const opMessage: string | null = useSelector(optionMessage);

  const opError: string | null = useSelector(optionError);

  const key: string | null = useSelector(userKey);

  const options: OptionState[] = useSelector(optionsStore);

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
          _.isEmpty(options) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getOption(ownerId) as any);
        } else {
          return;
        }

        if (permission === "オーナー") {
          setTHeaderItems(["オプション名", "価格", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          setTHeaderItems(["オプション名", "価格", "編集"]);
        } else {
          setTHeaderItems(["オプション名", "価格"]);
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, key, options, ownerId]);

  const searchItems = [
    { key: "option_name", value: "オプション名" },
    { key: "price", value: "価格" },
  ];

  const nodesProps = [{ text: "option_name" }, { number: "price" }];

  const nodes = options;

  return (
    <div>
      {opMessage && (
        <BasicAlerts
          type="success"
          message={opMessage}
          space={1}
          padding={0.6}
        />
      )}

      {opError && (
        <BasicAlerts type="error" message={opError} space={1} padding={0.6} />
      )}

      <div className="mx-4">
        <div className="flex my-4">
          <RouterButton link="/options/create" value="オプション情報新規作成" />
        </div>

        {opStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/options"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default options;
