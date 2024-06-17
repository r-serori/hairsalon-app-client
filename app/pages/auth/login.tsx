import AuthLoginForm from "../../components/elements/form/auth/AuthLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../redux/store";
import { login } from "../../store/auth/authSlice";
import { useEffect } from "react";
import BasicAlerts from "../../components/elements/alert/Alert";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

  let dispatchError;

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
  //     router.push("/auth/login");
  //     // 未ログインの場合の処理を記述する
  //   }
  // }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

  const handleLogin = async (formData: { email: string; password: string }) => {
    console.log(formData);
    try {
      const response = await dispatch(login(formData) as any);
      console.log("Success", response);
      const userId = response.payload.responseUser.id;
      const ownerId = response.payload.ownerId.id;
      if (ownerId) {
        localStorage.setItem("user_id", userId);
        localStorage.setItem("owner_id", ownerId);
        router.push("/dashboard");
      } else if (!ownerId) {
        localStorage.setItem("user_id", userId);
        router.push("/auth/owner");
      } else {
        throw new Error("ログイン処理に失敗しました！");
      }
    } catch (error) {
      console.log("Error", error);
      dispatchError = error;
      return;
    }
  };

  return (
    <div>
      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {dispatchError && (
        <BasicAlerts
          type="error"
          message={dispatchError}
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
          <AuthLoginForm onSubmit={handleLogin} errorMessage={error} />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
