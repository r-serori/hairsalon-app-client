import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHairstyle } from "../../store/hairstyles/hairstyleSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { UserPermission } from "../../components/Hooks/UserPermission";
import { useState } from "react";
import { useRouter } from "next/router";

const hairstyles: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const dispatch = useDispatch();

  const hairstyles = useSelector(
    (state: RootState) => state.hairstyle.hairstyle
  );
  console.log(hairstyles);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "スタッフ" || role === "マネージャー" || role === "オーナー") {
      setRole(role);
    } else {
      router.push("/dashboard");
    }
    if (
      hairstyles.length === 0 &&
      (role === "オーナー" || role === "マネージャー" || role === "スタッフ")
    ) {
      try {
        const ownerId = Number(localStorage.getItem("owner_id"));
        dispatch(getHairstyle(ownerId) as any);
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.hairstyle.status);

  const message = useSelector((state: RootState) => state.hairstyle.message);

  const error = useSelector((state: RootState) => state.hairstyle.error);

  const searchItems = [{ key: "hairstyle_name", value: "髪型" }];

  const tHeaderItems =
    role === "オーナー"
      ? ["髪型", "更新日", "編集", "削除"]
      : role === "マネージャー"
      ? ["髪型", "更新日", "編集"]
      : ["髪型", "更新日"];

  const nodesProps = [{ text: "hairstyle_name" }, { date: "updated_at" }];

  const nodes = hairstyles;
  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      <div>
        <div className="my-4 ml-4">
          <RouterButton
            link="/hairstyles/create"
            value="ヘアスタイル情報新規作成"
          />
        </div>
        {loading === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/hairstyles"
            role={role}
          />
        )}
      </div>
    </div>
  );
};

export default hairstyles;
