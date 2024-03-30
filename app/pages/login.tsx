import React from 'react';
import AuthForm from '../components/elements/form/AuthForm'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/auth/authSlice';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (formData: { login_id: string, password: string }) => {
    try {
      await dispatch(loginUser(formData) as any); // Add 'as any' to bypass type checking
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      
      <AuthForm onSubmit={handleLogin} /> 
    </div>
  );
};

export default LoginPage;