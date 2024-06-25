import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthRegisterForm from "../../components/elements/form/auth/AuthRegisterForm";
import { register } from "../../store/auth/authSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { clearError } from "../../store/auth/authSlice";
import { isLogin } from "../../store/auth/isLoginSlice";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);

  const error = useSelector((state: RootState) => state.auth.error);

  const owner = useSelector((state: RootState) => state.owner.owner);

  const ownerError = useSelector((state: RootState) => state.owner.error);

  const ownerMessage = useSelector((state: RootState) => state.owner.message);

  // useEffect(() => {
  //   const hasLaravelSessionCookie = () => {
  //     // ブラウザのCookieからlaravel_session Cookieを取得する
  //     const cookies = document.cookie;
  //     console.log("cookies", cookies);

  //     if (cookies.startsWith("XSRF-TOKEN")) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };

  //   if (hasLaravelSessionCookie()) {
  //     console.log("XCSRF存在します");
  //     router.push("/dashboard");
  //     // ログイン済みの場合の処理を記述する
  //   } else {
  //     console.log("XCSRFが存在しません");
  //     // 未ログインの場合の処理を記述する
  //   }
  // }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

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
      const response = await dispatch(register(formData) as any);
      const userId = response.payload.responseUser.id;
      const role = response.payload.responseUser.role;
      localStorage.setItem("user_id", userId);
      localStorage.setItem("role", role);
      localStorage.setItem("isLogin", "true");
      dispatch(isLogin());
      console.log("Success", response);
      router.push("/auth/owner");
    } catch (error) {
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {ownerError && (
        <BasicAlerts
          type="error"
          message={ownerError}
          space={1}
          padding={0.6}
        />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      {isLoading ? (
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
          <AuthRegisterForm onSubmitOwner={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
