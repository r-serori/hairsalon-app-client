import AuthLoginForm from "../../components/elements/form/auth/AuthLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../redux/store";
import { login } from "../../store/auth/authSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import { useState } from "react";
import { isLogin } from "../../store/auth/isLoginSlice";
import { clearError } from "../../store/auth/authSlice";
import RouterButton from "../../components/elements/button/RouterButton";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.status);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

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
      const ownerId = response.payload.responseOwnerId;
      const role = response.payload.responseUser.role;
      if (ownerId) {
        dispatch(isLogin());
        localStorage.setItem("user_id", userId);
        localStorage.setItem("owner_id", ownerId);
        localStorage.setItem("role", role);
        localStorage.setItem("isLogin", "true");
        router.push("/dashboard");
      } else if (ownerId === null) {
        dispatch(isLogin());
        localStorage.setItem("user_id", userId);
        localStorage.setItem("role", role);
        localStorage.setItem("isLogin", "true");

        router.push("/auth/owner");
      } else {
        throw new Error("ログイン処理に失敗しました！");
      }
    } catch (error) {
      console.log("Error", error);
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

      {isLoading === "loading" ? (
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
