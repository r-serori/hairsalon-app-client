import { sendRequest } from "../../requestApi";

export const attendance_timeApi = {
  selectFetchAttendanceTimes: async (formData: {
    user_id: number;
    yearMonth: string;
    owner_id: number;
  }) => {
    try {
      const userIdEncoded = encodeURIComponent(formData.user_id.toString());
      const yearMonthEncoded = encodeURIComponent(formData.yearMonth);
      const response = await sendRequest(
        "GET",
        `/attendance_times/selectedAttendanceTimes/${yearMonthEncoded}/${userIdEncoded}/${formData.owner_id}`
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  firstGetAttendanceTime: async (user_id: number) => {
    try {
      const response = await sendRequest(
        "GET",
        `/firstAttendanceTimes/firstGet/${encodeURIComponent(user_id)}`
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
    owner_id: number;
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
    owner_id: number;
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
    owner_id: number;
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
    owner_id: number;
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
    owner_id: number;
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

  deleteAttendanceTime: async (formData: { id: number; owner_id: number }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/attendance_times/delete`,
        formData
      );
      console.log("APIのattendanceTimeDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },
};
