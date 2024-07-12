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
import { isLogout } from "../../store/auth/isLoginSlice";

const updatePasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const permission: PermissionsState = useSelector(permissionStore);

  const uError: string | null = useSelector(userError);

  const uStatus: string = useSelector(userStatus);

  const uMessage: string | null = useSelector(userMessage);

  const handleUpdatePassword = async (formData: {
    current_password: string;
    password: string;
    password_confirmation: string;
  }) => {
    console.log(formData);
    try {
      const response = await dispatch(updateUserPassword(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        dispatch(isLogout());
        localStorage.clear();
        router.push("/auth/login");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error", error);
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
