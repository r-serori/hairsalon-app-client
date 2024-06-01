import { sendRequest } from "../../requestApi";

export const customerAttendanceApi = {
  fetchAllCustomerAttendances: async () => {
    const response = await sendRequest("GET", "/customer_attendances");
    return response;
  },
};
