import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const attendance_timeApi = {
  createAttendanceTimes: async (formData: {
    id: number;
    start_time: string;
    end_time: string;
    start_photo_path: string;
    end_photo_path: string;
    attendance_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/attendance_times", formData);
    } catch (error) {
      throw new Error(`Error creating attendance times: ${error.message}`);
    }
  },

  fetchAllAttendanceTimes: async (attendance_id) => {
    const response = await sendRequest("GET", "/attendance_times", {
      attendance_id,
    });
    console.log("APIのattendanceTimeDataだよ");
    return response;
  },

  selectFetchAttendanceTimes: async (attendance_id: number) => {
    const response = await sendRequest(
      "GET",
      `/attendance_times/selectedAttendanceTimes/${attendance_id}`
    );
    console.log("APIのattendanceTimeDataだよ");
    return response;
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

  createStartTime: async (formData: {
    start_time: string;
    start_photo_path: string;
    attendance_id: number;
  }) => {
    try {
      return await sendRequest(
        "POST",
        "/attendance_times/startTimeShot",
        formData
      );
    } catch (error) {
      throw new Error(`Error creating start time: ${error.message}`);
    }
  },

  createEndTime: async (formData: {
    end_time: string;
    end_photo_path: string;
    attendance_id: number;
  }) => {
    try {
      return await sendRequest(
        "POST",
        "/attendance_times/endTimeShot",
        formData
      );
    } catch (error) {
      throw new Error(`Error creating end time: ${error.message}`);
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
