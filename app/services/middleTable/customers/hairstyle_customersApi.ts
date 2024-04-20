import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const hairstyleCustomerApi = {
  createHairstyleCustomer: async (formData: {
    hairstyles_id: number;
    customers_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/hairstyle_customers",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating hairstyle customer: ${error.message}`);
    }
  },

  fetchAllHairstyleCustomers: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/hairstyle_customers", csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching all hairstyle customers: ${error.message}`
      );
    }
  },
};
