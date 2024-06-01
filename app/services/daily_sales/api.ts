import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const dailySaleApi = {
  createDailySales: async (formData: { date: string; daily_sales: number }) => {
    const response = await sendRequest("POST", "/daily_sales", formData);
    return response;
  },

  fetchAllDailySales: async () => {
    const response = await sendRequest("GET", "/daily_sales");
    return response;
  },

  fetchDailySalesById: async (id: number) => {
    const response = await sendRequest("GET", `/daily_sales/${id}`);
    return response;
  },

  updateDailySales: async (
    id: number,
    formData: {
      date: string;
      daily_sales: number;
    }
  ) => {
    const response = await sendRequest(
      "POST",
      `/daily_sales/${id}/update`,
      formData
    );
    return response;
  },
  deleteDailySales: async (id: number) => {
    const response = await sendRequest("POST", `/daily_sales/${id}/delete`);
    return response;
  },
};
