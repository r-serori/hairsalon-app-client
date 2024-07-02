import { sendRequest } from "../requestApi";

export const vioRoleApi = {
  getVioRole: async () => {
    try {
      const response = await sendRequest("GET", "/api/vio-role");
      console.log("responseMyRoleApi", response);
      if (response.status === 200) {
        console.log("権限確認成功", response);
        return response;
      } else {
        throw new Error("権限未確認");
      }
    } catch (error) {
      console.error("権限未確認", error);
      return false;
    }
  },
};
