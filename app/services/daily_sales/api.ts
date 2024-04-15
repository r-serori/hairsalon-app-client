import { sendRequest } from "../requestApi";

export const dailySaleApi = {
  createDailySales: async (formData: { date: string; daily_sales: number }) => {
    try {
      return await sendRequest("POST", "/daily_sales", formData);
    } catch (error) {
      throw new Error(`Error creating daily sales: ${error.message}`);
    }
  },

  fetchAllDailySales: async () => {
    try {
      return await sendRequest("GET", "/daily_sales");
    } catch (error) {
      throw new Error(`Error fetching all daily sales: ${error.message}`);
    }
  },

  fetchDailySalesById: async (id: number) => {
    try {
      return await sendRequest("GET", `/daily_sales/${id}`);
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
      return await sendRequest("PUT", `/daily_sales/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating daily sales with ID ${id}: ${error.message}`
      );
    }
  },

  deleteDailySales: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/daily_sales/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting daily sales with ID ${id}: ${error.message}`
      );
    }
  },
};
