import { sendRequest, getCsrfToken } from "../requestApi";

export const authApi = {
  //ログイン処理
  login: async (formData: { email: string; password: string }) => {
    await getCsrfToken();
    const response = (await sendRequest("POST", "api/login", formData)) as any;
    console.log("responseLoginDataだよ", response);
    return response;
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
    await getCsrfToken();
    console.log("requestDataRegisterだよ", formData);
    const response = await sendRequest("POST", "api/register", formData);
    console.log("responseRegisterDataだよ", response);
    return response;
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
    const response = (await sendRequest(
      "POST",
      `api/user/staffRegister`,
      formData
    )) as any;
    console.log("responseRegisterDataだよ", response);
    return response;
  },

  //ログアウト処理 Gate,ALL
  logout: async () => {
    const response = (await sendRequest("POST", `api/user/logout`)) as any;
    console.log("responseLogOutDataだよ", response);
    return response;
  },

  //オーナーがスタッフの情報を取得 Gate,OWNER
  getUsers: async (owner_id: number) => {
    const response = (await sendRequest(
      "GET",
      `api/user/getUsers/${owner_id}`
    )) as any;
    return response;
  },

  //各スタッフが自分の情報を取得 Gate,ALL
  showUser: async (user_id: number) => {
    const response = (await sendRequest(
      "GET",
      `api/user/showUser${user_id}/`
    )) as any;
    return response;
  },

  //ユーザーが自分の個人情報を変更 Gate,ALL
  updateUser: async (formData: {
    id: number; //user_id
    name: string;
    email: string;
    phone_number: string;
  }) => {
    const response = (await sendRequest(
      "POST",
      `api/user/updateUser`,
      formData
    )) as any;
    return response;
  },

  //ユーザーが自分のパスワードを変更 Gate,ALL
  updateUserPassword: async (formData: {
    id: number; //user_id
    current_password: string;
    password: string;
  }) => {
    const response = (await sendRequest(
      "POST",
      `api/user/updateUserPassword`,
      formData
    )) as any;
    return response;
  },

  //ownerがstaffの個人情報を変更するときに使用
  updateUserPermission: async (formData: {
    id: number; //user_id
    role: string;
  }) => {
    const response = (await sendRequest(
      "POST",
      `api/user/updatePermission`,
      formData
    )) as any;
    return response;
  },

  //ownerがstaffを削除するときに使用
  deleteUser: async (id: number) => {
    const response = (await sendRequest("POST", `api/user/deleteUser`, {
      id: id,
    })) as any;
    return response;
  },
};
