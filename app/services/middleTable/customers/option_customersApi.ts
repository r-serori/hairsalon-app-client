import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const optionCustomerApi = {
  createOptionCustomer: async (formData: {
    options_id: number;
    customers_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/option_customers",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating option customer: ${error.message}`);
    }
  },

  fetchAllOptionCustomers: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/option_customers", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all option customers: ${error.message}`);
    }
  },
};
