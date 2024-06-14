import { sendRequest } from "../requestApi";

export const customerApi = {
  createCustomer: async (formData: {
    customer_name: string;
    phone_number: string;
    remarks: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    users_id: number[];
  }) => {
    const response = await sendRequest("POST", "/customers", formData);
    console.log("APIのcustomerDataだよ");
    return response;
  },

  fetchAllCustomers: async () => {
    const response = await sendRequest("GET", "/customers");
    console.log("customers fetched");
    return response;
  },

  fetchCustomerById: async (id: number) => {
    const response = await sendRequest("GET", `/customers/${id}`);
    console.log("customer fetched");
    return response;
  },

  updateCustomer: async (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    users_id: number[];
  }) => {
    console.log("formDataだよ", formData);
    const response = await sendRequest(
      "POST",
      `/customers/${formData.id}/update`,
      formData
    );
    console.log("APIのcustomerDataだよ");
    return response;
  },

  deleteCustomer: async (id: number) => {
    const response = await sendRequest("POST", `/customers/${id}/delete`);
    console.log("APIのcustomerDataだよ");
    return response;
  },
};
