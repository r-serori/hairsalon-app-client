import { sendRequest } from "../../requestApi";

export const merchandiseScheduleApi = {
  createMerchandiseSchedule: async (formData: {
    merchandises_id: number;
    schedules_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/merchandise_schedules", formData);
    } catch (error) {
      throw new Error(`Error creating merchandise schedule: ${error.message}`);
    }
  },

  fetchAllMerchandiseSchedules: async () => {
    try {
      return await sendRequest("GET", "/merchandise_schedules");
    } catch (error) {
      throw new Error(
        `Error fetching all merchandise schedules: ${error.message}`
      );
    }
  },
};
