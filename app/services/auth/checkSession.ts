import { sendRequest } from "../requestApi";

export const checkSessionApi = {
  checkSession: async () => {
    try {
      const response = await sendRequest("GET", "/api/check-session");
      if (response.status === 200 && response.data.status === "authenticated") {
        return true;
      } else {
        throw new Error("セッション未確認");
      }
    } catch (error) {
      console.error("セッション未確認", error);
      return false;
    }
  },
};
