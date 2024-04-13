import { sendRequest } from "../requestApi";

export const stockCategoryApi = {
  create: async (formData: {
    category: string;

  }) => {
    return await sendRequest("/stock_categories", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/stock_categories", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/stock_categories/${id}`, "GET");
  },

  update: async (id: number, formData: {
    category: string;
  }) => {
    return await sendRequest(`/stock_categories/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/stock_categories/${id}`, "DELETE");
  },
};