import { useDispatch, useSelector } from "react-redux";
import { registerUser, registerStart } from "../store/auth/authRegisterSlice";
import { isLogin } from "../store/auth/authLogoutSlice";
import { useRouter } from "next/router";
import AuthRegister from "../components/elements/form/AuthRegisterForm";
import { RootState } from "../redux/reducers/rootReducer";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector(
    (state: RootState) => state.authRegister.loading
  );

  const handleLogin = async (formData: {
    login_id: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      console.log(formData);
      dispatch(registerStart());
      await dispatch(registerUser(formData) as any);
      await dispatch(isLogin());
      router.push("/dashboard"); // ログイン後にトップページに遷移
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <AuthRegister onSubmit={handleLogin} />}
    </div>
  );
};

export default LoginPage;
