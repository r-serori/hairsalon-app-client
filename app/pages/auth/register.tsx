import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthRegisterForm from "../../components/elements/form/auth/AuthRegisterForm";
import { register } from "../../store/auth/userSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { clearError, changeMessage } from "../../store/auth/userSlice";
import { isLogin } from "../../store/auth/isLoginSlice";
import { useEffect } from "react";
import {
  user,
  userStatus,
  userMessage,
  userError,
  userKey,
  userKeyStatus,
  ownerError,
} from "../../components/Hooks/authSelector";
import { getUserKey, allLogout } from "../../components/Hooks/useMethod";
import { pushUserId } from "../../components/Hooks/pushLocalStorage";
import { vioRoleApi } from "../../services/auth/vioRole";
import { getPermission } from "../../store/auth/permissionSlice";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const uStatus: string = useSelector(userStatus);

  const uError: string | null = useSelector(userError);

  const oError: string | null = useSelector(ownerError);

  useEffect(() => {
    localStorage.setItem("registerNow", "true");
  }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

  const handleRegister = async (formData: {
    name: string;
    email: string;
    phone_number: string;
    role: string;
    password: string;
    isAttendance: boolean;
    password_confirmation: string;
  }) => {
    try {
      const response: any = await dispatch(register(formData) as any);
      console.log("register.tsxのデータだよ", response);
      const userId = response.payload.responseUser.id;

      const userKey: string | null = await getUserKey(dispatch);

      if (userKey === null) {
        throw new Error("e");
      }
      const pushUser: boolean = pushUserId(userId, userKey);

      await dispatch(getPermission({}) as any);

      if (pushUser) {
        dispatch(isLogin());
        router.push("/auth/owner");
      } else {
        throw new Error("e");
      }
    } catch (error) {
      allLogout(dispatch);
      changeMessage("登録処理に失敗しました！もう一度お試しください！");
      localStorage.removeItem("registerNow");
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {oError && (
        <BasicAlerts type="error" message={oError} space={1} padding={0.6} />
      )}

      {uError && (
        <BasicAlerts type="error" message={uError} space={1} padding={0.6} />
      )}

      {uStatus === "loading" ? (
        <p>loading...</p>
      ) : (
        <div>
          <div className="mt-4 ml-4">
            <RouterButton
              link="/"
              value="ホーム画面へ戻る"
              onChangeAndRouter={() => dispatch(clearError())}
            />
          </div>
          <AuthRegisterForm onSubmitOwner={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
