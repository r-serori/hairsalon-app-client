import AuthLoginForm from "../components/elements/form/auth/AuthLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../redux/store";
import { login } from "../store/auth/authSlice";
import { useEffect } from "react";
import BasicAlerts from "../components/elements/alert/Alert";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

  useEffect(() => {
    const hasLaravelSessionCookie = () => {
      // ブラウザのCookieからlaravel_session Cookieを取得する
      const cookies = document.cookie;
      console.log("cookies", cookies);

      if (cookies.startsWith("XSRF-TOKEN")) {
        return true;
      } else {
        return false;
      }
    };

    if (hasLaravelSessionCookie()) {
      console.log("XCSRF存在します");
      router.push("/dashboard");
      // ログイン済みの場合の処理を記述する
    } else {
      console.log("XCSRFが存在しません");
      router.push("/login");
      // 未ログインの場合の処理を記述する
    }
  }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

  const handleLogin = async (formData: {
    id: number;
    login_id: string;
    password: string;
    created_at: string;
    updated_at: string;
  }) => {
    console.log(formData);
    try {
      const response = await dispatch(login(formData) as any);
      console.log("Success", response);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AuthLoginForm onSubmit={handleLogin} errorMessage={error} />
      )}
    </div>
  );
};

export default LoginPage;
