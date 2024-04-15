import { sendRequest } from "../requestApi";

export const attendanceApi = {
  createAttendance: async (formData: {
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
  }) => {
    try {
      return await sendRequest("POST", "/attendances", formData);
    } catch (error) {
      throw new Error(`Error creating attendance: ${error.message}`);
    }
  },

  fetchAllAttendances: async () => {
    try {
      console.log("fetching all attendances");
      return await sendRequest("GET", "/attendances");
    } catch (error) {
      throw new Error(`Error fetching all attendances: ${error.message}`);
    }
  },

  fetchAttendanceById: async (id: number) => {
    try {
      return await sendRequest("GET", `/attendances/${id}`);
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
      return await sendRequest("PUT", `/attendances/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating attendance with ID ${id}: ${error.message}`
      );
    }
  },

  deleteAttendance: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/attendances/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting attendance with ID ${id}: ${error.message}`
      );
    }
  },
};
