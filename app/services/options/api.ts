import { sendRequest } from "../requestApi";

export const optionApi = {
  create: async (formData: {
    id: number;
    option_name: string;
    price: number;
    created_at: Date;
    updated_at: Date;

  }) => {
    return await sendRequest("/options", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/options", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/options/${id}`, "GET");
  },

  update: async (id: number, formData: {
    id: number;
    option_name: string;
    price: number;
    created_at: Date;
    updated_at: Date;
  }) => {
    return await sendRequest(`/options/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/options/${id}`, "DELETE");
  },
};