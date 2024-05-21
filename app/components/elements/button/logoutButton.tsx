// LogoutButton.js

import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../../../store/auth/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface logoutProps {
  className?: string;
}

const LogoutButton: React.FC<logoutProps> = ({ className }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = useSelector((state: RootState) => state.auth);

  const user = auth.auth;

  console.log(user);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

  // ログアウト処理
  const handleLogout = async () => {
    confirm("ログアウトしますか？");
    if (!confirm) {
      return;
    } else {
      const response = await dispatch(logout({}) as any);
      console.log("responseindex", response);
      if (response.payload.status === "error") {
        console.log("Rejected", response);
        return;
      } else if (response.payload.status === "success") {
        console.log("Success", response);
        router.push("/login");
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
