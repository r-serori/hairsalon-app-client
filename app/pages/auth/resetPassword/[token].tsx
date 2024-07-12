import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { resetPassword, showUser } from "../../../store/auth/userSlice";
import BasicAlerts from "../../../components/elements/alert/Alert";
import ResetPasswordForm from "../../../components/elements/form/userProfile/ResetPasswordForm";
import { useEffect } from "react";
import {
  userError,
  userKey,
  userMessage,
  userStatus,
  permissionStore,
} from "../../../components/Hooks/authSelector";

const resetPasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { token } = router.query;

  const uError = useSelector(userError);

  const uStatus = useSelector(userStatus);

  const uMessage = useSelector(userMessage);

  const handleResetPassword = async (formData: {
    email: string;
    password: string;
    password_confirmation: string;
  }) => {
    console.log(formData);
    const requestForm = { ...formData, token: token as string };
    try {
      const response = await dispatch(resetPassword(requestForm) as any);
      if (response.meta.requestStatus === "fulfilled") {
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
        <ResetPasswordForm onSubmitResetPassword={handleResetPassword} />
      )}
    </div>
  );
};

export default resetPasswordPage;
