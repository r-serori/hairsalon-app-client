import { sendRequest } from "../requestApi";

export const ownerApi = {
  ownerRegister: async (formData: {
    store_name: string;
    postal_code: string;
    prefecture: string;
    city: string;
    address_line1: string;
    address_line2?: string;
    phone_number: string;
    user_id: number;
  }) => {
    try {
      const response = (await sendRequest(
        "POST",
        `/ownerRegister`,
        formData
      )) as any;
      // console.log("responseRegisterDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
};
