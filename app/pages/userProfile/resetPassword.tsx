import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { resetPassword, showUser } from "../../store/auth/userSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import ResetPasswordForm from "../../components/elements/form/userProfile/ResetPasswordForm";
import { useEffect } from "react";
import { useState } from "react";
import { getUserData, getUserId } from "../../components/Hooks/getLocalStorage";
import {
  userError,
  userKey,
  userMessage,
  userStatus,
} from "../../components/Hooks/authSelector";
import {
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import { getUserKey, staffPermission } from "../../components/Hooks/useMethod";
import { ownerPermission } from "../../components/Hooks/useMethod";

const resetPasswordPage: React.FC = () => {
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);
  const [userId, setUserId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const key: string | null = useSelector(userKey);

  const uError = useSelector(userError);

  const uStatus = useSelector(userStatus);

  const uMessage = useSelector(userMessage);

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

  const handleResetPassword = async (formData: { password: string }) => {
    console.log(formData);
    try {
      const response = await dispatch(resetPassword(formData) as any);
      router.push("/dashboard");
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
        <ResetPasswordForm onSubmitResetPassword={handleResetPassword} />
      )}
    </div>
  );
};

export default resetPasswordPage;
