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
import {
  pushUserData,
  pushOwnerId,
} from "../../components/Hooks/pushLocalStorage";
import { UserData } from "../../components/Hooks/interface";
import { string } from "yup";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const UStatus: string = useSelector(userStatus) as string;

  const UError: string | null = useSelector(userError) as string | null;

  const OError: string | null = useSelector(ownerError) as string | null;

  const key: string | null = useSelector(userKey) as string | null;

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

      if (pushUser) {
        await dispatch(isLogin());
        localStorage.setItem("isLogin", "true");
        localStorage.removeItem("registerNow");
        router.push("/auth/owner");
      } else {
        throw new Error("e");
      }
    } catch (error) {
      await allLogout(dispatch);
      await changeMessage("登録処理に失敗しました！もう一度お試しください！");
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {OError && (
        <BasicAlerts type="error" message={OError} space={1} padding={0.6} />
      )}

      {UError && (
        <BasicAlerts type="error" message={UError} space={1} padding={0.6} />
      )}

      {UStatus === "loading" ? (
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
