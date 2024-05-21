import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthRegisterForm from "../components/elements/form/auth/AuthRegisterForm";
import { register } from "../store/auth/authSlice";
import { RootState } from "../redux/store";
import { useEffect } from "react";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);

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
  //     // 未ログインの場合の処理を記述する
  //   }
  // }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

  const handleRegister = async (formData: {
    id: number;
    login_id: string;
    password: string;
    created_at: string;
    updated_at: string;
  }) => {
    console.log(formData);
    const response = await dispatch(register(formData) as any);
    console.log("responseindex", response);
    if (response.payload.status === "error") {
      console.log("Rejected", response);
      return;
    } else if (response.payload.status === "success") {
      console.log("Success", response);
      router.push("/dashboard");
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AuthRegisterForm onSubmit={handleRegister} errorMessage={error} />
      )}
    </div>
  );
};

export default LoginPage;
