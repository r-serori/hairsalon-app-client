import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthRegisterForm from "../../components/elements/form/auth/AuthRegisterForm";
import { register } from "../../store/auth/authSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { clearError } from "../../store/auth/authSlice";
import { isLogin } from "../../store/auth/isLoginSlice";
import { useEffect } from "react";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.status);

  const error = useSelector((state: RootState) => state.auth.error);

  const owner = useSelector((state: RootState) => state.owner.owner);

  const ownerError = useSelector((state: RootState) => state.owner.error);

  const ownerMessage = useSelector((state: RootState) => state.owner.message);

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
    const response = await dispatch(register(formData) as any);
    console.log("register.tsxのデータだよ", response);
    if (response.status) {
      if (
        response.status === 401 ||
        response.status === 403 ||
        response.status === 404 ||
        response.status === 500
      ) {
        router.push({
          pathname: "/_error",
          query: { status: response.status },
        });
      }
    }
    if (response.payload.responseUser) {
      dispatch(isLogin());
      const userId = response.payload.responseUser.id;
      const role = response.payload.responseUser.role;
      localStorage.setItem("user_id", userId);
      localStorage.setItem("role", role);
      localStorage.setItem("isLogin", "true");
      console.log("Success", response);
      localStorage.removeItem("registerNow");
      router.push("/auth/owner");
    } else {
      console.log("Error", response);
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

      {isLoading === "loading" ? (
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
