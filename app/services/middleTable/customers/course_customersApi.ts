import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const courseCustomerApi = {
  createCourseCustomer: async (formData: {
    courses_id: number;
    customers_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/course_customers",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating course customer: ${error.message}`);
    }
  },

  fetchAllCourseCustomers: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/course_customers", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all course customers: ${error.message}`);
    }
  },
};
