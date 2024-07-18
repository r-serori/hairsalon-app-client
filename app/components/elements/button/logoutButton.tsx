// LogoutButton.js

import React from "react";
import { useDispatch } from "react-redux";
import { useRouter, NextRouter } from "next/router";
import { logout } from "../../../store/auth/userSlice";
import { isLogout } from "../../../store/auth/isLoginSlice";
import { AppDispatch } from "../../../redux/store";
import { renderError } from "../../../store/errorHandler";
import { useSelector } from "react-redux";
import { userErrorStatus } from "../../Hooks/authSelector";
import { allLogout } from "../../Hooks/useMethod";

interface LogoutProps {
  className?: string;
}

const LogoutButton: React.FC<LogoutProps> = ({ className }) => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const uErrorStatus: number = useSelector(userErrorStatus);

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
        const response = await dispatch(logout() as any);
        if (response.meta.requestStatus === "fulfilled") {
          dispatch(isLogout());
          localStorage.clear();
          router.push("/auth/login");
        } else {
          const re = renderError(uErrorStatus, router, dispatch);
          if (re === null) throw new Error("ログアウト処理に失敗しました");
        }
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
