import { sendRequest } from "../../requestApi";

export const attendance_timeApi = {
  createAttendanceTimes: async (formData: {
    id: number;
    date: Date;
    start_time: Date;
    end_time: Date;
    break_time: number;
    attendance_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/attendance_times", formData);
    } catch (error) {
      throw new Error(`Error creating attendance times: ${error.message}`);
    }
  },

  fetchAllAttendanceTimes: async () => {
    try {
      return await sendRequest("GET", "/attendance_times");
    } catch (error) {
      throw new Error(`Error fetching all attendance times: ${error.message}`);
    }
  },

  fetchAttendanceTimesById: async (id: number) => {
    try {
      return await sendRequest("GET", `/attendance_times/${id}`);
    } catch (error) {
      throw new Error(
        `Error fetching attendance times with ID ${id}: ${error.message}`
      );
    }
  },

  updateAttendanceTimes: async (
    id: number,
    formData: {
      date: Date;
      start_time: Date;
      end_time: Date;
      break_time: number;
      attendance_id: number;
    }
  ) => {
    try {
      return await sendRequest("PUT", `/attendance_times/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating attendance times with ID ${id}: ${error.message}`
      );
    }
  },

  deleteAttendanceTimes: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/attendance_times/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting attendance times with ID ${id}: ${error.message}`
      );
    }
  },
};
