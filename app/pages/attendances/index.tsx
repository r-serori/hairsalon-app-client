import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { getUsers } from "../../store/auth/authSlice";
import { OwnerPermission } from "../../components/Hooks/Permission";
import { useState } from "react";

const Attendances = () => {
  const [role, setRole] = useState<string>("");
  OwnerPermission(setRole);
  const dispatch = useDispatch();

  const auth = useSelector((state: RootState) => state.auth.auth);

  useEffect(() => {
    const getStaffs = async () => {
      const ownerId = Number(localStorage.getItem("owner_id"));
      const response = await dispatch(getUsers(ownerId) as any);
      console.log("response", response);
      localStorage.setItem("userCount", response.payload.userCount);
    };
    try {
      const userCount = localStorage.getItem("userCount");
      if (!userCount || auth.length < Number(userCount)) {
        getStaffs();
      }
    } catch (error) {
      console.log("Error", error);
      return;
    }
  }, []);

  const loading = useSelector((state: RootState) => state.auth.loading);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

  const searchItems = [
    { key: "name", value: "名前" },
    { key: "staff_phone_number", value: "スタッフ電話番号" },
    { key: "role", value: "役職" },
  ];

  const tHeaderItems = [
    "名前",
    "スタッフ電話番号",
    "役職",
    "更新日",
    "編集",
    "勤怠時間管理",
  ];

  const nodesProps = [
    { text: "name" },
    { number: "staff_phone_number" },
    { text: "role" },
    { date: "updated_at" },
  ];

  // nodesにusersをマップして処理
  const nodes = auth
    .filter((user: any) => {
      return user.role !== "オーナー";
    })
    .map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        staff_phone_number: user.phone_number,
        role: user.role,
        isAttendance: user.isAttendance,
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
          <RouterButton link="/auth/staffRegister" value="ユーザー登録" />
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
