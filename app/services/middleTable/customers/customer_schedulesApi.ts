import { sendRequest } from "../../requestApi";

export const customerScheduleApi = {
  createCustomerSchedule: async (formData: {
    customers_id: number;
    schedules_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/customer_schedules", formData);
    } catch (error) {
      throw new Error(`Error creating customer schedule: ${error.message}`);
    }
  },

  fetchAllCustomerSchedules: async () => {
    try {
      return await sendRequest("GET", "/customer_schedules");
    } catch (error) {
      throw new Error(
        `Error fetching all customer schedules: ${error.message}`
      );
    }
  },
};
