import { sendRequest } from "../../requestApi";

export const customerUserApi = {
  fetchAllCustomerUsers: async () => {
    const response = await sendRequest("GET", "/customer_users");
    return response;
  },
};
