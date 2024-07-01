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
import { user, userStatus } from "../../../../components/Hooks/authSelector";
import { UserAllState } from "../../../../components/Hooks/interface";
import {
  getUserKey,
  ownerPermission,
} from "../../../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../../../components/Hooks/getLocalStorage";
import { userKey } from "../../../../components/Hooks/authSelector";
import { allLogout } from "../../../../components/Hooks/useMethod";

const attenDanceEdit: React.FC = () => {
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);
  const [ownerId, setOwnerId] = useState<number | null>(null);

  const dispatch = useDispatch();

  const uStatus: string = useSelector(userStatus);

  const key: string | null = useSelector(userKey);

  const router = useRouter();

  const { id } = router.query; // idを取得
  // console.log("idだよ");
  // console.log({ id });

  let editUser: UserAllState = useSelector(user).find(
    (user) => user.id === Number(id)
  );

  const [dispatchLoading, setDispatchLoading] = useState<boolean>(false);
  useEffect(() => {
    setDispatchLoading(true);
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
              await setOwnerId(ownerId);
              await setPermission(vioRole);
            } else {
              throw new Error("RoleData or ownerId is null");
            }
          } else {
            throw new Error("UserKey is null");
          }
        }

        await ownerPermission(permission, ownerId);

        if (!editUser && permission === "オーナー") {
          const response = await dispatch(showUser(Number(id)) as any);
          editUser = response.payload.responseUser;
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
  }, [user, id, dispatch, key, permission, ownerId]);

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
