import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { getUsers } from "../../store/auth/authSlice";

const Attendances = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const userId = localStorage.getItem("user_id");
      const ownerId = localStorage.getItem("owner_id");
      dispatch(
        getUsers({ owner_id: Number(ownerId), user_id: Number(userId) }) as any
      );
    } catch (error) {
      console.log("Error", error);
      return;
    }
  }, [dispatch]);

  const { auth, loading, error, message } = useSelector(
    (state: RootState) => state.auth
  );

  const searchItems = [
    { key: "name", value: "名前" },
    { key: "phone_number", value: "電話番号" },
    { key: "role", value: "役職" },
  ];

  const tHeaderItems = [
    "名前",
    "電話番号",
    "役職",
    "更新日",
    "編集",
    "削除",
    "勤怠時間管理",
  ];

  const nodesProps = [
    { text: "name" },
    { number: "phone_number" },
    { text: "role" },
    { date: "updated_at" },
  ];

  // nodesにusersをマップして処理
  const nodes = auth.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      phone_number: user.phone_number,
      role: user.role,
      updated_at: user.updated_at,
    };
  });

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      <div className="mx-8 mt-4">
        <div className="flex my-4 ml-2">
          <RouterButton link="/auth/register" value="ユーザー登録" />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/attendances"
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default Attendances;
