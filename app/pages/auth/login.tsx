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
import { useEffect } from "react";
import CryptoJS from "crypto-js";
import { getKey } from "../../store/auth/keySlice";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.status);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

  const key = useSelector((state: RootState) => state.key.key);

  const keyStatus = useSelector((state: RootState) => state.key.status);

  useEffect(() => {
    localStorage.setItem("registerNow", "true");
  }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

  const handleLogin = async (formData: { email: string; password: string }) => {
    console.log(formData);
    try {
      const response = await dispatch(login(formData) as any);
      console.log("Success", response);
      const userId = response.payload.responseUser.id;
      const ownerId = response.payload.responseOwnerId;
      const role = response.payload.responseUser.role;

      if (isLoading === "success") {
        await dispatch(getKey({}) as any);
      } else {
        throw new Error("キーの取得に失敗しました！");
      }
      const responseData = {
        user_id: userId,
        role: role,
      };
      // データをJSON文字列に変換
      const dataString = JSON.stringify(responseData);
      const ownerIdString = JSON.stringify(ownerId);

      const encryptedData = CryptoJS.AES.encrypt(dataString, key).toString();
      const encryptedOwnerId = CryptoJS.AES.encrypt(
        ownerIdString,
        key
      ).toString();

      if (ownerId && keyStatus === "success") {
        dispatch(isLogin());
        // 暗号化されたデータをローカルストレージに保存
        localStorage.setItem("user_data", encryptedData);
        localStorage.setItem("owner_id", encryptedOwnerId);
        localStorage.setItem("isLogin", "true");
        localStorage.removeItem("registerNow");
        router.push("/dashboard");
      } else if (ownerId === null && keyStatus === "success") {
        dispatch(isLogin());
        localStorage.setItem("user_data", encryptedData);
        localStorage.setItem("owner_id", encryptedOwnerId);
        localStorage.setItem("isLogin", "true");
        localStorage.removeItem("registerNow");
        router.push("/auth/owner");
      } else {
        localStorage.removeItem("registerNow");
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
