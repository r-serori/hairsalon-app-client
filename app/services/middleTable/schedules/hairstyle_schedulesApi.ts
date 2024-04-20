import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const hairstyleScheduleApi = {
  createHairstyleSchedule: async (formData: {
    hairstyles_id: number;
    schedules_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/hairstyle_schedules",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating hairstyle schedule: ${error.message}`);
    }
  },

  fetchAllHairstyleSchedules: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/hairstyle_schedules", csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching all hairstyle schedules: ${error.message}`
      );
    }
  },
};
