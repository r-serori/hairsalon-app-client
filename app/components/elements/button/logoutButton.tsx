// LogoutButton.js

import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../../../store/auth/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { isLogout } from "../../../store/auth/isLoginSlice";

interface LogoutProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutProps> = ({ className }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = useSelector((state: RootState) => state.auth);

  const user = auth.auth;

  console.log(user);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

  const deleteCookie = (name) => {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${location.hostname}`;
  };

  // ログアウト処理
  const handleLogout = async () => {
    confirm("ログアウトしますか？");
    if (!confirm) {
      return;
    } else {
      try {
        const response = await dispatch(logout({}) as any);
        deleteCookie("laravel_session");
        deleteCookie("XSRF-TOKEN");
        localStorage.clear();
        dispatch(isLogout());
        console.log("responseindex", response);
        router.push("/auth/login");
      } catch (error) {
        console.log("Error", error);
        return;
      }
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          handleLogout();
        }}
        className={className}
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
