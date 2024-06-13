import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const ownerApi = {
  ownerRegister: async (formData: {
    store_name: string;
    address: string;
    phone_number: string;
    user_id: number;
  }) => {
    const response = (await sendRequest(
      "POST",
      "/ownerRegister",
      formData
    )) as any;
    console.log("responseRegisterDataだよ", response);
    return response;
  },
};
