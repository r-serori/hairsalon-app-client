import { sendRequest } from "../requestApi";

export const customerApi = {
  create: async (formData: {
    customer_name: string;
    phone_number: string;
    address: string;
    remarks: string;
    new_customer: boolean;
  }) => {
    return await sendRequest("/customers", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/customers", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/customers/${id}`, "GET");
  },

  update: async (id: number, formData: {
    customer_name: string;
    phone_number: string;
    address: string;
    remarks: string;
    new_customer: boolean;
  }) => {
    return await sendRequest(`/customers/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/customers/${id}`, "DELETE");
  },
};