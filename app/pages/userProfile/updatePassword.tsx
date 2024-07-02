import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateUserPassword, showUser } from "../../store/auth/userSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import UpdatePasswordForm from "../../components/elements/form/userProfile/UpdatePasswordForm";
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

const updatePasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  const uError: string | null = useSelector(userError);

  const uStatus: string = useSelector(userStatus);

  const uMessage: string | null = useSelector(userMessage);

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

  const handleUpdatePassword = async (formData: {
    current_password: string;
    password: string;
  }) => {
    console.log(formData);
    try {
      await dispatch(updateUserPassword(formData) as any);
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
        <UpdatePasswordForm onSubmitUpdatePassword={handleUpdatePassword} />
      )}
    </div>
  );
};

export default updatePasswordPage;
