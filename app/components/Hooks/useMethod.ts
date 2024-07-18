import { getKey, KeyState } from "../../store/auth/keySlice";
import { isLogout } from "../../store/auth/isLoginSlice";
import { logout } from "../../store/auth/userSlice";
import { AppDispatch } from "../../redux/store";
import { NextRouter } from "next/router";

export const allLogout = async (
  dispatch: AppDispatch
): Promise<string | null> => {
  try {
    const response = await dispatch(logout() as any);
    if (response.meta.requestStatus === "fulfilled") {
      dispatch(isLogout());
      localStorage.clear();
      return "ログアウトしました";
    }
    return null;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export const getUserKey = async (
  dispatch: AppDispatch
): Promise<KeyState | null> => {
  try {
    const response = await dispatch(getKey() as any);
    if (response.meta.requestStatus === "fulfilled") {
      console.log("responseGetKey", response);

      return response.payload.roleKey;
    }
    return null;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export const ownerPermission = (role: string, router: NextRouter): boolean => {
  if (role === "オーナー") {
    return true;
  } else {
    router.push("/dashboard");
  }
};

export const managerPermission = (
  role: string,
  router: NextRouter
): boolean => {
  if (role === "マネージャー" || role === "オーナー") {
    return true;
  } else {
    router.push("/dashboard");
  }
};

export const staffPermission = (role: string, router: NextRouter): boolean => {
  if (role === "スタッフ" || role === "マネージャー" || role === "オーナー") {
    return true;
  } else {
    router.push("/dashboard");
  }
};
