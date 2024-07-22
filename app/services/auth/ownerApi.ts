import { sendRequest } from "../requestApi";
import { OwnerState } from "../../store/auth/ownerSlice";
export const ownerApi = {
  ownerRegister: async (formData: OwnerState) => {
    try {
      const response = (await sendRequest(
        "POST",
        `api/user/ownerRegister`,
        formData
      )) as any;
      return response;
    } catch (error) {
      return { error: error };
    }
  },

  getOwner: async () => {
    try {
      const response = (await sendRequest("GET", `api/user/getOwner`)) as any;
      return response;
    } catch (error) {
      return { error: error };
    }
  },

  updateOwner: async (formData: OwnerState) => {
    try {
      const response = (await sendRequest(
        "POST",
        `api/user/updateOwner`,
        formData
      )) as any;
      return response;
    } catch (error) {
      return { error: error };
    }
  },
};
