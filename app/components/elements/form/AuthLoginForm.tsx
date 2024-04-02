import React, { useState } from 'react';
import AuthInput from '../input/AuthInput';

interface AuthFormProps {
  onSubmit: (formData: { login_id: string, password: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [login_id, setLogin_id] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ login_id, password });
  };

  return (
    <form onSubmit={handleSubmit} className="...">
      <AuthInput
        type="text"
        placeholder="Login ID"
        value={login_id}
        onChange={(e) => setLogin_id(e.target.value)}
      />

      <AuthInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
 
      <button type="submit" className="...">Submit</button>
    </form>
  );
};

export default AuthForm;
