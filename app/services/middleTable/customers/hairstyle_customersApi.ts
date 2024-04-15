import { sendRequest } from "../../requestApi";

export const hairstyleCustomerApi = {
  createHairstyleCustomer: async (formData: {
    hairstyles_id: number;
    customers_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/hairstyle_customers", formData);
    } catch (error) {
      throw new Error(`Error creating hairstyle customer: ${error.message}`);
    }
  },

  fetchAllHairstyleCustomers: async () => {
    try {
      return await sendRequest("GET", "/hairstyle_customers");
    } catch (error) {
      throw new Error(
        `Error fetching all hairstyle customers: ${error.message}`
      );
    }
  },
};
