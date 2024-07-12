import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../../redux/store";
import AttendanceForm from "../../../../components/elements/form/attendances/AttendanceForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import RouterButton from "../../../../components/elements/button/RouterButton";
import {
  updateUserPermission,
  deleteUser,
  showUser,
} from "../../../../store/auth/userSlice";
import UserUpdateForm from "../../../../components/elements/form/attendances/AttendanceForm";
import DeleteButton from "../../../../components/elements/button/DeleteButton";
import { useState } from "react";
import {
  user,
  userStatus,
  permissionStore,
  userMessage,
  userError,
} from "../../../../components/Hooks/authSelector";
import { UserAllState } from "../../../../components/Hooks/interface";
import { ownerPermission } from "../../../../components/Hooks/useMethod";
import { userKey } from "../../../../components/Hooks/authSelector";
import { allLogout } from "../../../../components/Hooks/useMethod";
import { PermissionsState } from "../../../../store/auth/permissionSlice";
import BasicAlerts from "../../../../components/elements/alert/Alert";

const attenDanceEdit: React.FC = () => {
  const dispatch = useDispatch();

  const uStatus: string = useSelector(userStatus);
  const uError: string = useSelector(userError);

  const permission: PermissionsState = useSelector(permissionStore);

  const router = useRouter();

  const { id } = router.query; // idを取得

  const editUser: UserAllState = useSelector(user).find(
    (user) => user.id === Number(id)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        ownerPermission(permission, router);

        if (!editUser && permission === "オーナー") {
          await dispatch(showUser(Number(id)) as any);
        } else {
          return;
        }
      } catch (error) {
        // console.log("Error", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch]);

  const handleUpdate = async (formData: { id: number; role: string }) => {
    try {
      const response = await dispatch(updateUserPermission(formData) as any);
      if (response.meta.requestStatus === "fulfilled") {
        router.push("/attendances");
      } else {
        throw new Error("更新に失敗しました");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      confirm(
        "本当にこのスタッフは退職しますか？今後このスタッフのデータは表示されませんが、よろしいですか？"
      );
      if (!confirm) {
        return;
      } else {
        await dispatch(deleteUser(editUser.id) as any);
      }
    } catch (error) {
      console.error(error);
    }
    router.push("/attendances");
  };

  return (
    <div className="min-h-full ">
      {uError && (
        <BasicAlerts message={uError} type={"error"} padding={1} space={1} />
      )}
      <div className="mx-4">
        <div className="flex justify-between my-4 ">
          <RouterButton link={"/attendances"} value="スタッフ画面に戻る" />

          <DeleteButton value="退職する" onClicker={handleDeleteUser} />
        </div>
      </div>

      {uStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          <UserUpdateForm onSubmit={handleUpdate} node={editUser} />
        </div>
      )}
    </div>
  );
};

export default attenDanceEdit;
