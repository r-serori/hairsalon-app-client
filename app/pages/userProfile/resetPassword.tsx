import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { resetPassword, showUser } from "../../store/auth/userSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import ResetPasswordForm from "../../components/elements/form/userProfile/ResetPasswordForm";
import { useEffect } from "react";
import {
  userError,
  userKey,
  userMessage,
  userStatus,
  permissionStore,
} from "../../components/Hooks/authSelector";
import { PermissionsState } from "../../store/auth/permissionSlice";
import { staffPermission } from "../../components/Hooks/useMethod";

const resetPasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  const uError = useSelector(userError);

  const uStatus = useSelector(userStatus);

  const uMessage = useSelector(userMessage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        staffPermission(permission, router);

        if (
          permission === "オーナー" ||
          permission === "マネージャー" ||
          permission === "スタッフ"
        ) {
          await dispatch(showUser({}) as any);
        } else {
          return;
        }
      } catch (error) {
        console.log("Error", error);
        return;
      }
    };
    fetchData();
  }, [dispatch]);

  const handleResetPassword = async (formData: { password: string }) => {
    console.log(formData);
    try {
      await dispatch(resetPassword(formData) as any);
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
