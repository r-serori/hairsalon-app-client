import { sendRequest } from "../requestApi";

export const hairstylesApi = {
  create: async (formData: {
    hairstyle_name: string;
  }) => {
    return await sendRequest("/hairstyles", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/hairstyles", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/hairstyles/${id}`, "GET");
  },

  update: async (id: number, formData: {
    hairstyle_name: string;
  }) => {
    return await sendRequest(`/hairstyles/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/hairstyles/${id}`, "DELETE");
  },
};