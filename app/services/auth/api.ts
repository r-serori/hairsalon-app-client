import { sendRequest, getCsrfToken } from "../requestApi";

export const userApi = {
  //ログイン処理
  login: async (formData: { email: string; password: string }) => {
    try {
      await getCsrfToken();
      const response = (await sendRequest(
        "POST",
        "api/login",
        formData
      )) as any;
      console.log("responseLoginDataだよ", response);
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  //購入者ownerがuser登録するときの処理
  register: async (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    isAttendance: boolean;
    password_confirmation: string;
  }) => {
    try {
      await getCsrfToken();
      const response = await sendRequest("POST", "api/register", formData);
      console.log("responseRegisterDataだよ", response);
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  //オーナーがスタッフを登録 Gate,OWNER
  staffRegister: async (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    isAttendance: boolean;
  }) => {
    try {
      const response = (await sendRequest(
        "POST",
        `api/user/staffRegister`,
        formData
      )) as any;
      // console.log("responseStaffRegisterDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  //ログアウト処理 Gate,ALL
  logout: async () => {
    try {
      const response = (await sendRequest("POST", `api/user/logout`)) as any;
      // console.log("responseLogOutDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  //オーナーがスタッフの情報を取得 Gate,OWNER
  getUsers: async () => {
    try {
      const response = (await sendRequest("GET", `api/user/getUsers`)) as any;
      // console.log("responseGetUsersDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  getAttendanceUsers: async () => {
    try {
      const response = (await sendRequest(
        "GET",
        `api/user/getAttendanceUsers`
      )) as any;
      // console.log("responseGetUsersDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  //各スタッフが自分の情報を取得 Gate,ALL
  showUser: async () => {
    try {
      const response = (await sendRequest("GET", `api/user/showUser`)) as any;
      // console.log("responseShowUserDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  //ユーザーが自分の個人情報を変更 Gate,ALL
  updateUser: async (formData: {
    name: string;
    email: string;
    phone_number: string;
  }) => {
    try {
      const response = (await sendRequest(
        "POST",
        `api/user/updateUser`,
        formData
      )) as any;
      console.log("responseUpdateUserDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  //ユーザーが自分のパスワードを変更 Gate,ALL
  updateUserPassword: async (formData: {
    current_password: string;
    password: string;
    password_confirmation: string;
  }) => {
    try {
      const response = (await sendRequest(
        "POST",
        `api/user/updateUserPassword`,
        formData
      )) as any;
      // console.log("responseUpdateUserPasswordDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  forgotPassword: async (email: string) => {
    try {
      const response = (await sendRequest("POST", `api/forgotPassword`, {
        email: email,
      })) as any;
      // console.log("responseForgotPasswordDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  resetPassword: async (formData: {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
  }) => {
    try {
      const response = (await sendRequest(
        "POST",
        `api/resetPassword`,
        formData
      )) as any;
      // console.log("responseResetPasswordDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  //ownerがstaffの個人情報を変更するときに使用
  updateUserPermission: async (formData: {
    id: number; //user_id
    role: string;
  }) => {
    try {
      const response = (await sendRequest(
        "POST",
        `api/user/updatePermission`,
        formData
      )) as any;
      // console.log("responseUpdatePermissionDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  //ownerがstaffを削除するときに使用
  deleteUser: async (id: number) => {
    try {
      const response = (await sendRequest("POST", `api/user/deleteUser`, {
        id: id,
      })) as any;
      // console.log("responseDeleteUserDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
};
