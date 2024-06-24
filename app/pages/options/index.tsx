import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOption } from "../../store/options/optionSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { UserPermission } from "../../components/Hooks/UserPermission";
import { useState } from "react";
import { useRouter } from "next/router";

const options: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");

  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.option.loading);

  const message = useSelector((state: RootState) => state.option.message);

  const error = useSelector((state: RootState) => state.option.error);

  const options = useSelector((state: RootState) => state.option.option);
  console.log(options);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "スタッフ" || role === "マネージャー" || role === "オーナー") {
      setRole(role);
    } else {
      router.push("/dashboard");
    }
    if (
      options.length === 0 &&
      (role === "オーナー" || role === "マネージャー" || role === "スタッフ")
    ) {
      const ownerId = Number(localStorage.getItem("owner_id"));
      dispatch(getOption(ownerId) as any);
    } else {
      return;
    }
  }, [dispatch]);

  const searchItems = [
    { key: "option_name", value: "オプション名" },
    { key: "price", value: "価格" },
  ];

  const tHeaderItems =
    role === "オーナー"
      ? ["オプション名", "価格", "更新日", "編集", "削除"]
      : role === "マネージャー"
      ? ["オプション名", "価格", "更新日", "編集"]
      : ["オプション名", "価格", "更新日"];

  const nodesProps = [
    { text: "option_name" },
    { number: "price" },
    { date: "updated_at" },
  ];

  const nodes = options;

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      <div className="mx-4">
        <div className="flex my-4">
          <RouterButton link="/options/create" value="新規作成" />
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/options"
            isLoading={loading}
            role={role}
          />
        )}
      </div>
    </div>
  );
};

export default options;
