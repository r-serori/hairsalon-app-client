import AuthForm from '../components/elements/form/AuthLoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginStart } from '../store/auth/authLoginSlice';
import { isLogin } from '../store/auth/authLogoutSlice'
import { useRouter } from 'next/router';
import { RootState } from '../redux/reducers/rootReducer';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);

  const handleLogin = async (formData: { login_id: string, password: string }) => {
    try {
      dispatch(loginStart());
      await dispatch(loginUser(formData) as any);
      await dispatch(isLogin());
      router.push('/dashboard'); // ログイン後にトップページに遷移
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AuthForm onSubmit={handleLogin} />
      )}
    </div>
  );
};

export default LoginPage;
