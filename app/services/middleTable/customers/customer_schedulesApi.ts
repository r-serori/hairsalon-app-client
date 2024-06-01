import { sendRequest } from "../../requestApi";

export const customerScheduleApi = {
  fetchAllCustomerSchedules: async () => {
    const response = await sendRequest("GET", "/customer_schedules");
    return response;
  },
};
