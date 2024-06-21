import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { resetPassword, showUser } from "../../store/auth/authSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import ResetPasswordForm from "../../components/elements/form/userProfile/ResetPasswordForm";
import { useEffect } from "react";
import { useState } from "react";

const resetPasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const response = dispatch(showUser({}) as any);
    setUser(response.payload.responseUser);
  }, [user]);

  const isLoading = useSelector((state: RootState) => state.auth.loading);
  const message = useSelector((state: RootState) => state.auth.message);
  const error = useSelector((state: RootState) => state.auth.error);

  const handleResetPassword = async (formData: { password: string }) => {
    console.log(formData);
    try {
      const response = await dispatch(resetPassword(formData) as any);
      router.push("/attendances");
    } catch (error) {
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ResetPasswordForm onSubmitResetPassword={handleResetPassword} />
      )}
    </div>
  );
};

export default resetPasswordPage;
