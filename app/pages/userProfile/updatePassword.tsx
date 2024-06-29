import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateUserPassword, showUser } from "../../store/auth/userSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import UpdatePasswordForm from "../../components/elements/form/userProfile/UpdatePasswordForm";
import { useEffect } from "react";
import { useState } from "react";
import { getUserKey } from "../../components/Hooks/useMethod";
import {
  getUserId,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import {
  userError,
  userKey,
  userMessage,
  userStatus,
} from "../../components/Hooks/authSelector";
import { staffPermission } from "../../components/Hooks/useMethod";

const updatePasswordPage: React.FC = () => {
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);
  const [userId, setUserId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const key: string | null = useSelector(userKey);

  const uError: string | null = useSelector(userError);

  const uStatus: string = useSelector(userStatus);

  const uMessage: string | null = useSelector(userMessage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (key === null) {
          const userKey: string = await getUserKey(dispatch);

          if (userKey !== null) {
            const userId: number | null = await getUserId(userKey);

            const ownerId: number | null = await getOwnerId(userKey);

            const vioRole: "オーナー" | "マネージャー" | "スタッフ" | null =
              await getVioRoleData(userKey);

            if (ownerId !== null && vioRole !== null && userId !== null) {
              setOwnerId(ownerId);
              setPermission(vioRole);
              setUserId(userId);
            } else {
              throw new Error("RoleData or ownerId is null");
            }
          } else {
            throw new Error("UserKey is null");
          }
        }

        staffPermission(permission, ownerId);

        if (
          permission === "オーナー" ||
          permission === "マネージャー" ||
          permission === "スタッフ"
        ) {
          const response = dispatch(showUser(Number()) as any);
        } else {
          return;
        }
      } catch (error) {
        console.log("Error", error);
        return;
      }
    };

    fetchData();
  }, [key, permission, ownerId, userId]);

  const handleUpdatePassword = async (formData: {
    current_password: string;
    password: string;
  }) => {
    console.log(formData);
    try {
      const response = await dispatch(updateUserPassword(formData) as any);
      router.push("/attendances");
    } catch (error) {
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {uError && (
        <BasicAlerts type="error" message={uError} space={1} padding={0.6} />
      )}

      {uMessage && (
        <BasicAlerts
          type="success"
          message={uMessage}
          space={1}
          padding={0.6}
        />
      )}

      {uStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <UpdatePasswordForm onSubmitUpdatePassword={handleUpdatePassword} />
      )}
    </div>
  );
};

export default updatePasswordPage;
