import { sendRequest } from "../requestApi";

export const yearlySaleApi = {
  create: async (formData: {
    date: string;
    year_sales: number;
  }) => {
    return await sendRequest("/yearly_sales", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/yearly_sales", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/yearly_sales/${id}`, "GET");
  },

  update: async (id: number, formData: {
    date: string;
    year_sales: number;
  }) => {
    return await sendRequest(`/yearly_sales/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/yearly_sales/${id}`, "DELETE");
  },
};