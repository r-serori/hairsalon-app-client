import { sendRequest } from "../../requestApi";

export const optionScheduleApi = {
  createOptionSchedule: async (formData: {
    options_id: number;
    schedules_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/option_schedules", formData);
    } catch (error) {
      throw new Error(`Error creating option schedule: ${error.message}`);
    }
  },

  fetchAllOptionSchedules: async () => {
    try {
      return await sendRequest("GET", "/option_schedules");
    } catch (error) {
      throw new Error(`Error fetching all option schedules: ${error.message}`);
    }
  },
};
