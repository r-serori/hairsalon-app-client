import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const attendance_timeApi = {
  createAttendanceTimes: async (formData: {
    id: number;
    date: string;
    start_time: string;
    end_time: string;
    break_time: number;
    attendance_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/attendance_times",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating attendance times: ${error.message}`);
    }
  },

  fetchAllAttendanceTimes: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/attendance_times", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all attendance times: ${error.message}`);
    }
  },

  fetchAttendanceTimesById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/attendance_times/${id}`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching attendance times with ID ${id}: ${error.message}`
      );
    }
  },

  updateAttendanceTimes: async (
    id: number,
    formData: {
      date: string;
      start_time: string;
      end_time: string;
      break_time: number;
      attendance_id: number;
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/attendance_times/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating attendance times with ID ${id}: ${error.message}`
      );
    }
  },

  deleteAttendanceTimes: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/attendance_times/${id}/delete`,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error deleting attendance times with ID ${id}: ${error.message}`
      );
    }
  },
};
