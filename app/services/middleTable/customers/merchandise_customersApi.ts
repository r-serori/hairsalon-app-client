import { sendRequest } from "../../requestApi";

export const merchandiseCustomerApi = {
  createMerchandiseCustomer: async (formData: {
    merchandises_id: number;
    customers_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/merchandise_customers", formData);
    } catch (error) {
      throw new Error(`Error creating merchandise customer: ${error.message}`);
    }
  },

  fetchAllMerchandiseCustomers: async () => {
    try {
      return await sendRequest("GET", "/merchandise_customers");
    } catch (error) {
      throw new Error(
        `Error fetching all merchandise customers: ${error.message}`
      );
    }
  },
};
