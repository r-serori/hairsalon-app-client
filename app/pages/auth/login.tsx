import AuthLoginForm from "../../components/elements/form/auth/AuthLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../redux/store";
import { login } from "../../store/auth/userSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import { isLogin, isLogout } from "../../store/auth/isLoginSlice";
import { clearError, changeMessage } from "../../store/auth/userSlice";
import RouterButton from "../../components/elements/button/RouterButton";
import { useEffect } from "react";
import { allLogout } from "../../components/Hooks/useMethod";

import {
  user,
  userStatus,
  userMessage,
  userError,
  userKey,
  userKeyStatus,
} from "../../components/Hooks/authSelector";
import { getUserKey } from "../../components/Hooks/useMethod";
import {
  pushUserData,
  pushOwnerId,
} from "../../components/Hooks/pushLocalStorage";
import { UserData } from "../../components/Hooks/interface";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const UStatus: string = useSelector(userStatus) as string;

  const UMessage: string | null = useSelector(userMessage) as string | null;

  const UError: string | null = useSelector(userError) as string | null;

  const key: string | null = useSelector(userKey) as string | null;

  useEffect(() => {
    localStorage.setItem("registerNow", "true");
  }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

  const handleLogin = async (formData: { email: string; password: string }) => {
    console.log(formData);
    try {
      const response: any = await dispatch(login(formData) as any);
      console.log("Success", response);
      const ownerId: number = response.payload.responseOwnerId as number;

      const userData: UserData = {
        user_id: response.payload.responseUser.id as number,
        role: response.payload.responseUser.role as string,
      } as UserData;

      (await getUserKey(dispatch)) as string | null;

      if (key === null) {
        throw new Error("e");
      }

      const pushUser: boolean = (await pushUserData(
        userData as UserData,
        key as string
      )) as boolean;

      const pushOwner: boolean = (await pushOwnerId(ownerId, key)) as boolean;

      if (pushUser && pushOwner) {
        dispatch(isLogin());
        // 暗号化されたデータをローカルストレージに保存
        localStorage.setItem("isLogin", "true");
        localStorage.removeItem("registerNow");
        router.push("/dashboard");
      } else if (pushUser && !pushOwner) {
        dispatch(isLogin());
        localStorage.setItem("isLogin", "true");
        localStorage.removeItem("registerNow");
        router.push("/auth/owner");
      } else {
        throw new Error("e");
      }
    } catch (error) {
      localStorage.removeItem("registerNow");
      await allLogout(dispatch);
      await changeMessage(
        "ログイン処理に失敗しました！もう一度お試しください！"
      );
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {UError && (
        <BasicAlerts type="error" message={UError} space={1} padding={0.6} />
      )}

      {UMessage && (
        <BasicAlerts
          type="success"
          message={UMessage}
          space={1}
          padding={0.6}
        />
      )}

      {UStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="mt-4 ml-4">
            <RouterButton
              link="/"
              value="ホーム画面へ戻る"
              onChangeAndRouter={() => dispatch(clearError())}
            />
          </div>
          <AuthLoginForm onSubmit={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
