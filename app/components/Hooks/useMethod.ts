import { getKey } from "../../store/auth/keySlice";
import { isLogout } from "../../store/auth/isLoginSlice";
import { logout } from "../../store/auth/userSlice";

export const allLogout = async (dispatch: any) => {
  try {
    await dispatch(logout({}) as any);
    dispatch(isLogout());
    localStorage.clear();
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const getUserKey = async (dispatch: any) => {
  try {
    const response = await dispatch(getKey({}) as any);
    return response.payload.key as string;
  } catch (error) {
    console.log("Error", error);
    return null as null;
  }
};
