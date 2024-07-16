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
import { userKey, permissionStore } from "../../components/Hooks/authSelector";
import { PermissionsState } from "../../store/auth/permissionSlice";
import { allLogout, staffPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";

const options: React.FC = () => {
  const router = useRouter();
  const [tHeaderItems, setTHeaderItems] = useState<string[]>([]);

  const dispatch = useDispatch();

  const options: OptionState[] = useSelector(optionsStore);

  const opStatus: string = useSelector(optionStatus);

  const opMessage: string | null = useSelector(optionMessage);

  const opError: string | null = useSelector(optionError);

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        staffPermission(permission, router);

        if (permission === "オーナー") {
          setTHeaderItems(["オプション名", "価格", "編集", "削除"]);
        } else if (permission === "マネージャー") {
          setTHeaderItems(["オプション名", "価格", "編集"]);
        } else {
          setTHeaderItems(["オプション名", "価格"]);
        }

        if (
          _.isEmpty(options) &&
          (permission === "オーナー" ||
            permission === "マネージャー" ||
            permission === "スタッフ")
        ) {
          await dispatch(getOption({}) as any);
        } else {
          return;
        }
      } catch (error) {
        console.error("Error:", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    if (permission) fetchData();
  }, [dispatch, permission]);

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
      {opStatus === "loading" || !nodes || permission === null ? (
        <p>Loading...</p>
      ) : (
        <div className="mx-4">
          <div className="my-4">
            <RouterButton
              link="/options/create"
              value="オプション情報新規作成"
            />
          </div>

          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/options"
            role={permission}
          />
        </div>
      )}
    </div>
  );
};

export default options;
