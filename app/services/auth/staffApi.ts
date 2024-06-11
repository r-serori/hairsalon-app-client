import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const staffApi = {
  staffRegister: async (formData: {
    position: string;
    user_id: number;
    owner_id: number;
  }) => {
    const csrfToken = await getCsrfToken();
    if (csrfToken) {
      const response = (await sendRequest(
        "POST",
        "/staffRegister",
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
};
