import AuthLoginForm from "../../components/elements/form/auth/AuthLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../../store/auth/userSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import { isLogin } from "../../store/auth/isLoginSlice";
import { clearError, changeMessage } from "../../store/auth/userSlice";
import RouterButton from "../../components/elements/button/RouterButton";
import { useEffect } from "react";
import {
  userStatus,
  userMessage,
  userError,
} from "../../components/Hooks/authSelector";
import { getUserKey, allLogout } from "../../components/Hooks/useMethod";
import { pushUserId } from "../../components/Hooks/pushLocalStorage";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { getPermission } from "../../store/auth/permissionSlice";
import path from "path";
import ForgotPasswordButton from "../../components/elements/button/ForgotPasswordButton";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const uStatus: string = useSelector(userStatus);

  const uMessage: string | null = useSelector(userMessage);

  const uError: string | null = useSelector(userError);

  useEffect(() => {
    localStorage.setItem("registerNow", "true");
  }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

  const handleLogin = async (formData: { email: string; password: string }) => {
    console.log(formData);
    try {
      const response: any = await dispatch(login(formData) as any);
      console.log("Success", response);
      const userId: number = response.payload.responseUser.id;

      const userKey: string | null = await getUserKey(dispatch);

      if (userKey === null) {
        console.log("key is null");
        throw new Error("e");
      }
      const pushUser: boolean = pushUserId(userId, userKey);

      console.log("pushUser", pushUser);

      await dispatch(getPermission({}) as any);

      if (pushUser && response.payload.status !== 299) {
        dispatch(isLogin());
        router.push("/dashboard");
      } else if (pushUser && response.payload.status === 299) {
        dispatch(isLogin());
        router.push("/auth/owner");
      } else {
        throw new Error("e");
      }
    } catch (error) {
      localStorage.removeItem("registerNow");
      allLogout(dispatch);
      changeMessage("ログイン処理に失敗しました！もう一度お試しください！");
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
        <div>
          <div className="mt-4 ml-4 flex justify-between">
            <RouterButton
              link="/"
              value="ホーム画面へ"
              onChangeAndRouter={() => dispatch(clearError())}
            />
            <ForgotPasswordButton />
          </div>
          <AuthLoginForm onSubmit={handleLogin} />

          <div className="flex justify-center gap-32 ">
            <div id="active" className="mt-10 text-8xl ">
              <ContentCutIcon className="text-8xl" />
            </div>
            <div id="rotate" className="mt-10 text-8xl">
              <StorefrontIcon className="text-8xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
