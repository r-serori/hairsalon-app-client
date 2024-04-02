// LogoutButton.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { isLogout,logoutUser } from '../../../store/auth/authLogoutSlice';
import { useRouter } from 'next/router';
import { RootState } from '../../../redux/reducers/rootReducer'

function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();


  // ログアウト処理 
  const handleLogout = async () => {
    try {
    // ログアウトアクションをディスパッチ
      dispatch(isLogout());
    await dispatch(logoutUser() as any);
      router.push('/login'); // ログアウト後にログインページに遷移
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={(e) => { e.preventDefault(); handleLogout(); }}>Logout</button>
  );

}

export default LogoutButton;
