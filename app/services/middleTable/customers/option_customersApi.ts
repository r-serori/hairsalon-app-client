import { sendRequest } from "../../requestApi";

export const optionCustomerApi = {
  fetchAllOptionCustomers: async () => {
    const response = await sendRequest("GET", "/option_customers");
    return response;
  },
};
