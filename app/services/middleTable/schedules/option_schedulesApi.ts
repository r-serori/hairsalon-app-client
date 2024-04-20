import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const optionScheduleApi = {
  createOptionSchedule: async (formData: {
    options_id: number;
    schedules_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/option_schedules",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating option schedule: ${error.message}`);
    }
  },

  fetchAllOptionSchedules: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/option_schedules", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all option schedules: ${error.message}`);
    }
  },
};
