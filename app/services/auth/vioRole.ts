import { sendRequest } from "../requestApi";

export const vioRoleApi = {
  getVioRole: async () => {
    try {
      const response = await sendRequest("GET", "/api/vio-role");
      if (response.status === 200 && response.data.status === "authenticated") {
        return response.data;
      } else {
        throw new Error("権限未確認");
      }
    } catch (error) {
      console.error("権限未確認", error);
      return false;
    }
  },
};
