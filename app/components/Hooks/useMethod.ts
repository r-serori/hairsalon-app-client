import { getKey } from "../../store/auth/keySlice";
import { isLogout } from "../../store/auth/isLoginSlice";
import { logout } from "../../store/auth/userSlice";
import { ownerRole, managerRole, staffRole } from "./selector";

export const allLogout = async (dispatch: any): Promise<string | null> => {
  try {
    await dispatch(logout({}) as any);
    dispatch(isLogout());
    localStorage.clear();
  } catch (error) {
    console.log("Error", error);
    return null as null;
  }
};

export const getUserKey = async (dispatch: any): Promise<string | null> => {
  try {
    const response = await dispatch(getKey({}) as any);
    console.log("responseGetKey", response);
    return response.payload.key as string;
  } catch (error) {
    console.log("Error", error);
    return null as null;
  }
};

export const ownerPermission = (role: string, router: any): boolean => {
  if (role === ownerRole) {
    return true;
  } else {
    router.push("/dashboard");
  }
};

export const managerPermission = (role: string, router: any): boolean => {
  if (role === managerRole || role === ownerRole) {
    return true;
  } else {
    router.push("/dashboard");
  }
};

export const staffPermission = (role: string, router: any): boolean => {
  if (role === staffRole || role === managerRole || role === ownerRole) {
    return true;
  } else {
    router.push("/dashboard");
  }
};
