import { sendRequest } from "../../requestApi";

export const hairstyleScheduleApi = {
  createHairstyleSchedule: async (formData: {
    hairstyles_id: number;
    schedules_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/hairstyle_schedules", formData);
    } catch (error) {
      throw new Error(`Error creating hairstyle schedule: ${error.message}`);
    }
  },

  fetchAllHairstyleSchedules: async () => {
    try {
      return await sendRequest("GET", "/hairstyle_schedules");
    } catch (error) {
      throw new Error(
        `Error fetching all hairstyle schedules: ${error.message}`
      );
    }
  },
};
