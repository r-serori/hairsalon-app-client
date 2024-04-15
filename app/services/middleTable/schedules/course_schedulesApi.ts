import { sendRequest } from "../../requestApi";

export const courseScheduleApi = {
  createCourseSchedule: async (formData: {
    courses_id: number;
    schedules_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/course_schedules", formData);
    } catch (error) {
      throw new Error(`Error creating course schedule: ${error.message}`);
    }
  },

  fetchAllCourseSchedules: async () => {
    try {
      return await sendRequest("GET", "/course_schedules");
    } catch (error) {
      throw new Error(`Error fetching all course schedules: ${error.message}`);
    }
  },
};
