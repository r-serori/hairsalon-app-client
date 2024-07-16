import { sendRequest } from "../requestApi";
import { OwnerState } from "../../store/auth/ownerSlice";
export const ownerApi = {
  ownerRegister: async (formData: OwnerState) => {
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
