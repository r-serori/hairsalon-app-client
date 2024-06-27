import Router from "next/router";
import { sendRequest } from "../requestApi";
import { isLogout } from "../../store/auth/isLoginSlice";
import { logout } from "../../store/auth/authSlice";

export const checkSessionApi = {
  checkSession: async () => {
    try {
      const response = (await sendRequest("GET", "/api/check-session")) as any;
      if (response.status === 200 && response.data.status === "authenticated") {
        return true;
      } else {
        throw new Error("セッション未確認");
      }
    } catch (error) {
      console.error("セッション未確認", error);
      localStorage.clear();
      isLogout();
      logout({}) as any;
      Router.push("/login");
      return false;
    }
  },
};
