import { sendRequest } from "../requestApi";

export const ownerApi = {
  ownerRegister: async (formData: {
    store_name: string;
    address: string;
    phone_number: string;
    user_id: number;
  }) => {
    const response = (await sendRequest(
      "POST",
      `api/user/ownerRegister`,
      formData
    )) as any;
    console.log("responseRegisterDataだよ", response);
    return response;
  },
};
