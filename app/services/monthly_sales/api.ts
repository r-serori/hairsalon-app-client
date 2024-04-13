import { sendRequest } from "../requestApi";

export const monthlySaleApi = {
  create: async (formData: {
    date: string;
    monthly_sales: number;
  }) => {
    return await sendRequest("/monthly_sales", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/monthly_sales", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/monthly_sales/${id}`, "GET");
  },

  update: async (id: number, formData: {
    date: string;
    monthly_sales: number;
  }) => {
    return await sendRequest(`/monthly_sales/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/monthly_sales/${id}`, "DELETE");
  },
};