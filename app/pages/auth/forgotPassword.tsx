import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { forgotPassword, showUser } from "../../store/auth/userSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import ForgotPasswordForm from "../../components/elements/form/userProfile/ForgotPasswordForm";
import { useEffect } from "react";
import {
  userError,
  userKey,
  userMessage,
  userStatus,
  permissionStore,
} from "../../components/Hooks/authSelector";

const forgotPasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const uError = useSelector(userError);

  const uStatus = useSelector(userStatus);

  const uMessage = useSelector(userMessage);

  const handleForgotPassword = async (email: string) => {
    try {
      const response = await dispatch(forgotPassword(email) as any);
      if (response.meta.requestStatus === "fulfilled") {
        router.push("/auth/resetEmailWait");
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
        <ForgotPasswordForm onSubmitForgotPassword={handleForgotPassword} />
      )}
    </div>
  );
};

export default forgotPasswordPage;
