import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const authApi = {
  login: async (formData: { email: string; password: string }) => {
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
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      if (csrfToken) {
        const response = await sendRequest(
          "POST",
          "/register",
          formData,
          csrfToken
        );
        console.log("responseRegisterDataだよ", response);
        return response;
      } else {
        return {
          resStatus: "error",
          message: "一度ログアウトしてください。",
        };
      }
    } catch (error) {
      console.error("Failed to register:", error);
      throw error; // エラーを投げるか、適切に処理する
    }
  },

  secondRegister: async (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
  }) => {
    const response = (await sendRequest(
      "POST",
      "/secondRegister",
      formData
    )) as any;
    console.log("responseRegisterDataだよ", response);
    return response;
  },

  logout: async (formData) => {
    const response = (await sendRequest("POST", "/logout", formData)) as any;
    console.log("responseLogOutDataだよ", response);
    return response;
  },
};
