import { sendRequest } from "../../requestApi";
import getCsrfToken from "../../requestApi";

export const merchandiseCustomerApi = {
  createMerchandiseCustomer: async (formData: {
    merchandises_id: number;
    customers_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/merchandise_customers",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating merchandise customer: ${error.message}`);
    }
  },

  fetchAllMerchandiseCustomers: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/merchandise_customers", csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching all merchandise customers: ${error.message}`
      );
    }
  },
};
