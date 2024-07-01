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
} from "../../../../components/Hooks/authSelector";
import { UserAllState } from "../../../../components/Hooks/interface";
import { ownerPermission } from "../../../../components/Hooks/useMethod";
import { userKey } from "../../../../components/Hooks/authSelector";
import { allLogout } from "../../../../components/Hooks/useMethod";
import { PermissionsState } from "../../../../store/auth/permissionSlice";

const attenDanceEdit: React.FC = () => {
  const dispatch = useDispatch();

  const uStatus: string = useSelector(userStatus);

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  const router = useRouter();

  const { id } = router.query; // idを取得
  // console.log("idだよ");
  // console.log({ id });

  const editUser: UserAllState = useSelector(user).find(
    (user) => user.id === Number(id)
  );

  const [dispatchLoading, setDispatchLoading] = useState<boolean>(false);
  useEffect(() => {
    setDispatchLoading(true);
    const fetchData = async () => {
      try {
        await ownerPermission(permission, router);

        if (!editUser && permission === "オーナー") {
          await dispatch(showUser(Number(id)) as any);
        } else {
          return;
        }
      } catch (error) {
        // console.log("Error", error);
        await allLogout(dispatch);
        router.push("/auth/login");
      } finally {
        setDispatchLoading(false);
      }
    };

    fetchData();
  }, [id, dispatch, key, permission]);

  const handleUpdate = async (formData: { id: number; role: string }) => {
    try {
      await dispatch(updateUserPermission(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/attendances");
  };

  const handleDeleteUser = async () => {
    try {
      await dispatch(deleteUser(editUser.id) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/attendances");
  };

  return (
    <div className="min-h-full ">
      <div>
        <div className="flex justify-between mt-4 mx-4">
          <RouterButton link={"/attendances"} value="スタッフ画面に戻る" />

          <DeleteButton value="退職する" onClicker={handleDeleteUser} />
        </div>
      </div>

      {uStatus === "loading" || dispatchLoading || !user ? (
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
