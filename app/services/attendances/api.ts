import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const attendanceApi = {
  createAttendance: async (formData: {
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
    isAttendance: boolean;
  }) => {
    const response = await sendRequest("POST", "/attendances", formData);
    return response;
  },

  fetchAllAttendances: async () => {
    const response = await sendRequest("GET", "/attendances");
    console.log("attendances fetched");
    return response;
  },

  fetchAttendanceById: async (id: number) => {
    const response = await sendRequest("GET", `/attendances/${id}`);
    console.log("attendance fetched");
    return response;
  },

  updateAttendance: async (
    id: number,
    formData: {
      attendance_name: string;
      position: string;
      phone_number: string;
      address: string;
      isAttendance: boolean;
    }
  ) => {
    const response = await sendRequest(
      "POST",
      `/attendances/${id}/update`,
      formData
    );
    return response;
  },

  deleteAttendance: async (id: number) => {
    const response = await sendRequest("POST", `/attendances/${id}/delete`);
    return response;
  },
};
