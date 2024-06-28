// LogoutButton.js

import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../../../store/auth/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { isLogout } from "../../../store/auth/isLoginSlice";
import { user } from "../../Hooks/authSelector";

interface LogoutProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutProps> = ({ className }) => {
  const dispatch = useDispatch();
  const router = useRouter();

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
