import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const ownerApi = {
  ownerRegister: async (formData: {
    store_name: string;
    address: string;
    phone_number: string;
    contract_info: string;
    user_id: number;
  }) => {
    const csrfToken = await getCsrfToken();
    if (csrfToken) {
      const response = (await sendRequest(
        "POST",
        "/ownerRegister",
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
