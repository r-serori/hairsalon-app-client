import React, { useState } from 'react';

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
      <input
        type="login_id"
        value={login_id}
        onChange={(e) => setLogin_id(e.target.value)}
        placeholder="login_id"
        className="..."
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="..."
      />
      <button type="submit" className="...">Submit</button>
    </form>
  );
};

export default AuthForm;
