import { sendRequest } from "../../requestApi";

export const courseCustomerApi = {
  fetchAllCourseCustomers: async () => {
    const response = await sendRequest("GET", "/course_customers");
    return response;
  },
};
