import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const customerAttendanceApi = {
  createCustomerAttendance: async (formData: {
    customers_id: number;
    attendances_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/customer_attendances",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating customer attendance: ${error.message}`);
    }
  },

  fetchAllCustomerAttendances: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/customer_attendances", csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching all customer attendances: ${error.message}`
      );
    }
  },
};
