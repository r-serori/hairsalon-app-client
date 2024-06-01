import { sendRequest } from "../../requestApi";

export const merchandiseCustomerApi = {
  fetchAllMerchandiseCustomers: async () => {
    const response = await sendRequest("GET", "/merchandise_customers");
    return response;
  },
};
