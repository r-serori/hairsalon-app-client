import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const courseScheduleApi = {
  createCourseSchedule: async (formData: {
    courses_id: number;
    schedules_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/course_schedules",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating course schedule: ${error.message}`);
    }
  },

  fetchAllCourseSchedules: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/course_schedules", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all course schedules: ${error.message}`);
    }
  },
};
