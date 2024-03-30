import React from 'react';
import AuthForm from '../components/elements/form/AuthForm';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/auth/authSlice';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = (formData: { login_id: string, password: string }) => {
    dispatch(loginUser(formData) as any); // Update the parameter type of `loginUser` to match the `formData` type
  };

  return (
    <div>
      <h1>Login Page</h1>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
