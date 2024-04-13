import { sendRequest } from "../requestApi";

export const merchandiseApi = {
  create: async (formData: {
    merchandise_name: string;
    price: number;
  }) => {
    return await sendRequest("/merchandises", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/merchandises", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/merchandises/${id}`, "GET");
  },

  update: async (id: number, formData: {
    merchandise_name: string;
    price: number;
  }) => {
    return await sendRequest(`/merchandises/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/merchandises/${id}`, "DELETE");
  },
};