import getCsrfToken from "../requestApi";
import { sendRequest } from "../requestApi";

export const attendanceApi = {
  createAttendance: async (formData: {
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/attendances", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating attendance: ${error.message}`);
    }
  },

  fetchAllAttendances: async () => {
    try {
      const csrfToken = await getCsrfToken();
      console.log("fetching all attendances");
      return await sendRequest("GET", "/attendances", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all attendances: ${error.message}`);
    }
  },

  fetchAttendanceById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/attendances/${id}`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching attendance with ID ${id}: ${error.message}`
      );
    }
  },

  updateAttendance: async (
    id: number,
    formData: {
      attendance_name: string;
      position: string;
      phone_number: string;
      address: string;
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/attendances/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating attendance with ID ${id}: ${error.message}`
      );
    }
  },

  deleteAttendance: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/attendances/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error deleting attendance with ID ${id}: ${error.message}`
      );
    }
  },
};
