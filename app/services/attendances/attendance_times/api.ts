import { sendRequest } from "../../requestApi";

export const attendance_timeApi = {
  selectFetchAttendanceTimes: async (formData: {
    user_id: number;
    yearMonth: string;
  }) => {
    try {
      const userIdEncoded = encodeURIComponent(formData.user_id.toString());
      const yearMonthEncoded = encodeURIComponent(formData.yearMonth);
      const response = await sendRequest(
        "GET",
        `/attendance_times/selectedAttendanceTimes/${yearMonthEncoded}/${userIdEncoded}`
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  firstGetAttendanceTime: async (id) => {
    try {
      const response = await sendRequest(
        "GET",
        `/firstAttendanceTimes/firstGet/${encodeURIComponent(id)}`
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  pleaseEditEndTime: async (formData: {
    id: number;
    end_time: string;
    end_photo_path: string;
    user_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/attendance_times/pleaseEditEndTime`,
        formData
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  createStartTime: async (formData: {
    start_time: string;
    start_photo_path: string;
    user_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        "/attendance_times/startTimeShot",
        formData
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  createEndTime: async (formData: {
    end_time: string;
    end_photo_path: string;
    user_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        "/attendance_times/endTimeShot",
        formData
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  updateStartTime: async (formData: {
    id: number;
    start_time: string;
    start_photo_path: string;
    user_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/attendance_times/updateStartTime`,
        formData
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  updateEndTime: async (formData: {
    id: number;
    end_time: string;
    end_photo_path: string;
    user_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/attendance_times/updateEndTime`,
        formData
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  deleteAttendanceTime: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/attendance_times/delete`, {
        id: id,
      });
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },
};
