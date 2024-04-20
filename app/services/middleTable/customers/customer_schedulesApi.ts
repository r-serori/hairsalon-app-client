import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const customerScheduleApi = {
  createCustomerSchedule: async (formData: {
    customers_id: number;
    schedules_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/customer_schedules",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating customer schedule: ${error.message}`);
    }
  },

  fetchAllCustomerSchedules: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/customer_schedules", csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching all customer schedules: ${error.message}`
      );
    }
  },
};
