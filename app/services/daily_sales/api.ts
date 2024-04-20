import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const dailySaleApi = {
  createDailySales: async (formData: { date: string; daily_sales: number }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/daily_sales", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating daily sales: ${error.message}`);
    }
  },

  fetchAllDailySales: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/daily_sales", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all daily sales: ${error.message}`);
    }
  },

  fetchDailySalesById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/daily_sales/${id}`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching daily sales with ID ${id}: ${error.message}`
      );
    }
  },

  updateDailySales: async (
    id: number,
    formData: {
      date: string;
      daily_sales: number;
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/daily_sales/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating daily sales with ID ${id}: ${error.message}`
      );
    }
  },

  deleteDailySales: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/daily_sales/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error deleting daily sales with ID ${id}: ${error.message}`
      );
    }
  },
};
