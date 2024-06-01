import { sendRequest } from "../../requestApi";

export const attendance_timeApi = {
  selectFetchAttendanceTimes: async (attendance_id: number) => {
    const response = await sendRequest(
      "GET",
      `/images/selectedAttendanceTimes/${attendance_id}`
    );
    console.log("APIのattendanceTimeDataだよ");
    return response;
  },

  createStartTime: async (formData: {
    start_time: string;
    start_photo_path: string;
    attendance_id: number;
  }) => {
    const response = await sendRequest(
      "POST",
      "/attendance_times/startTimeShot",
      formData
    );
    console.log("APIのattendanceTimeDataだよ");
    return response;
  },

  createEndTime: async (formData: {
    end_time: string;
    end_photo_path: string;
    attendance_id: number;
  }) => {
    const response = await sendRequest(
      "POST",
      "/attendance_times/endTimeShot",
      formData
    );
    console.log("APIのattendanceTimeDataだよ");
    return response;
  },

  updateStartTime: async (formData: {
    id: number;
    start_time: string;
    start_photo_path: string;
    attendance_id: number;
  }) => {
    const response = await sendRequest(
      "POST",
      `/attendance_times/${formData.id}/updateStartTime`,
      formData
    );
    console.log("APIのattendanceTimeDataだよ");
    return response;
  },

  updateEndTime: async (formData: {
    id: number;
    end_time: string;
    end_photo_path: string;
    attendance_id: number;
  }) => {
    const response = await sendRequest(
      "POST",
      `/attendance_times/${formData.id}/updateEndTime`,
      formData
    );
    console.log("APIのattendanceTimeDataだよ");
    return response;
  },

  deleteAttendanceTime: async (id: number) => {
    const response = await sendRequest(
      "POST",
      `/attendance_times/${id}/delete`
    );
    console.log("APIのattendanceTimeDataだよ");
    return response;
  },
};
