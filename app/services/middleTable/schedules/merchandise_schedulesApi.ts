import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const merchandiseScheduleApi = {
  createMerchandiseSchedule: async (formData: {
    merchandises_id: number;
    schedules_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/merchandise_schedules",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating merchandise schedule: ${error.message}`);
    }
  },

  fetchAllMerchandiseSchedules: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/merchandise_schedules", csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching all merchandise schedules: ${error.message}`
      );
    }
  },
};
