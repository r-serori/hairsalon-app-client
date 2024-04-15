import { sendRequest } from "../../requestApi";

export const optionCustomerApi = {
  createOptionCustomer: async (formData: {
    options_id: number;
    customers_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/option_customers", formData);
    } catch (error) {
      throw new Error(`Error creating option customer: ${error.message}`);
    }
  },

  fetchAllOptionCustomers: async () => {
    try {
      return await sendRequest("GET", "/option_customers");
    } catch (error) {
      throw new Error(`Error fetching all option customers: ${error.message}`);
    }
  },
};
