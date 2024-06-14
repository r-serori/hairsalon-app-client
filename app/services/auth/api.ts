import { get } from "http";
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
    isAttendance: boolean;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      console.log("requestDataRegisterだよ", formData);
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

  //staffの登録
  secondRegister: async (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    isAttendance: boolean;
    owner_id: number;
  }) => {
    const response = (await sendRequest(
      "POST",
      `/user/${formData.owner_id}/secondRegister`,
      formData
    )) as any;
    console.log("responseRegisterDataだよ", response);
    return response;
  },

  logout: async () => {
    const response = (await sendRequest("POST", `/user/logout`)) as any;
    console.log("responseLogOutDataだよ", response);
    return response;
  },

  // ownerがstaff権限変更時に使用
  getUsers: async (formData: { owner_id: number; user_id: number }) => {
    const response = (await sendRequest(
      "GET",
      `user/${formData.owner_id}/getUsers/${formData.user_id}`
    )) as any;
    return response;
  },

  // 各スタッフが自分の個人情報を変更するときに使用
  showUser: async (user_id: number) => {
    const response = (await sendRequest(
      "GET",
      `/user/${user_id}/showUser`
    )) as any;
    return response;
  },

  // 各スタッフが自分の個人情報を変更するときに使用
  updateUser: async (formData: {
    id: number; //user_id
    name: string;
    email: string;
    phone_number: string;
    password: string;
  }) => {
    const response = (await sendRequest(
      "POST",
      `/user/${formData.id}/updateUser`
    )) as any;
    return response;
  },

  //ownerがstaffの個人情報を変更するときに使用
  updateUserPermission: async (formData: {
    id: number; //user_id
    role: string;
    owner_id: number;
  }) => {
    const response = (await sendRequest(
      "POST",
      `/user/${formData.owner_id}/updatePermission/${formData.id}`,
      formData
    )) as any;
    return response;
  },

  //ownerがstaffを削除するときに使用
  deleteUser: async (formData: { id: number; owner_id: number }) => {
    const response = (await sendRequest(
      "POST",
      `/user/${formData.owner_id}/deleteUser/${formData.id}`
    )) as any;
    return response;
  },
};
