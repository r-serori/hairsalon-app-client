import { sendRequest } from "../../requestApi";

export const courseCustomerApi = {
  createCourseCustomer: async (formData: {
    courses_id: number;
    customers_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/course_customers", formData);
    } catch (error) {
      throw new Error(`Error creating course customer: ${error.message}`);
    }
  },

  fetchAllCourseCustomers: async () => {
    try {
      return await sendRequest("GET", "/course_customers");
    } catch (error) {
      throw new Error(`Error fetching all course customers: ${error.message}`);
    }
  },
};
