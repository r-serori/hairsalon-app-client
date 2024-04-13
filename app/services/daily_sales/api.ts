import { sendRequest } from "../requestApi";

export const dailySaleApi = {
  create: async (formData: {
    date: string;
    daily_sales: number;
  }) => {
    return await sendRequest("/daily_sales", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/daily_sales", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/daily_sales/${id}`, "GET");
  },

  update: async (id: number, formData: {
    date: string;
    daily_sales: number;
  }) => {
    return await sendRequest(`/daily_sales/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/daily_sales/${id}`, "DELETE");
  },
};