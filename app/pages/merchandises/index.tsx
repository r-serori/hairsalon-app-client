import Link from "next/link";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMerchandise } from "../../store/merchandises/merchandiseSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { UserPermission } from "../../components/Hooks/UserPermission";
import { useState } from "react";
import { useRouter } from "next/router";

const merchandises = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const dispatch = useDispatch();

  const merchandises = useSelector(
    (state: RootState) => state.merchandise.merchandise
  );
  console.log(merchandises);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "スタッフ" || role === "マネージャー" || role === "オーナー") {
      setRole(role);
    } else {
      router.push("/dashboard");
    }
    if (
      merchandises.length === 0 &&
      (role === "オーナー" || role === "マネージャー" || role === "スタッフ")
    ) {
      try {
        const ownerId = Number(localStorage.getItem("owner_id"));
        dispatch(getMerchandise(ownerId) as any);
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.merchandise.status);

  const message = useSelector((state: RootState) => state.merchandise.message);

  const error = useSelector((state: RootState) => state.merchandise.error);

  const searchItems = [
    { key: "merchandise_name", value: "物販名" },
    { key: "price", value: "価格" },
  ];

  const tHeaderItems =
    role === "オーナー"
      ? ["物販名", "価格", "更新日", "編集", "削除"]
      : role === "マネージャー"
      ? ["物販名", "価格", "更新日", "編集"]
      : ["物販名", "価格", "更新日"];

  const nodesProps = [
    { text: "merchandise_name" },
    { number: "price" },
    { date: "updated_at" },
  ];

  const nodes = merchandises;

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      <div className="mx-4">
        <div className="flex my-4 ">
          <RouterButton link="/merchandises/create" value="物販情報新規作成" />
        </div>
        {loading === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/merchandises"
            role={role}
          />
        )}
      </div>
    </div>
  );
};

export default merchandises;
