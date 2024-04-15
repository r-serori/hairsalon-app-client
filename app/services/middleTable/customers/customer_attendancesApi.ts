import { sendRequest } from "../../requestApi";

export const customerAttendanceApi = {
  createCustomerAttendance: async (formData: {
    customers_id: number;
    attendances_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/customer_attendances", formData);
    } catch (error) {
      throw new Error(`Error creating customer attendance: ${error.message}`);
    }
  },

  fetchAllCustomerAttendances: async () => {
    try {
      return await sendRequest("GET", "/customer_attendances");
    } catch (error) {
      throw new Error(
        `Error fetching all customer attendances: ${error.message}`
      );
    }
  },
};
