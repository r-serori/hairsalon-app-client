import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const authApi = {
  login: async (formData: {
    id: number;
    login_id: string;
    password: string;
    created_at: string;
    updated_at: string;
  }) => {
    const csrfToken = await getCsrfToken();
    if (csrfToken) {
      const response = (await sendRequest(
        "POST",
        "/login",
        formData,
        csrfToken
      )) as any;
      console.log("responseLoginDataだよ", response);
      return response;
    } else {
      return {
        resStatus: "error",
        message: "一度ログアウトしてください。",
      };
    }
  },

  register: async (formData: {
    id: number;
    login_id: string;
    password: string;
    created_at: string;
    updated_at: string;
    confirmPassword: string;
  }) => {
    const csrfToken = await getCsrfToken();
    if (csrfToken) {
      const response = (await sendRequest(
        "POST",
        "/register",
        formData,
        csrfToken
      )) as any;
      console.log("responseRegisterDataだよ", response);
      return response;
    } else {
      return {
        resStatus: "error",
        message: "一度ログアウトしてください。",
      };
    }
  },

  logout: async (formData) => {
    const csrfToken = await getCsrfToken();
    if (csrfToken) {
      const response = (await sendRequest(
        "POST",
        "/logout",
        formData,
        csrfToken
      )) as any;
      console.log("responseLogOutDataだよ", response);
      return response;
    } else {
      return {
        resStatus: "error",
        message: "やり直してください。",
      };
    }
  },
};
