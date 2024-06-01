import { sendRequest } from "../../requestApi";

export const hairstyleCustomerApi = {
  fetchAllHairstyleCustomers: async () => {
    const response = await sendRequest("GET", "/hairstyle_customers");
    return response;
  },
};
