import { sendRequest } from "../requestApi";

export const monthlySaleApi = {
  createMonthlySales: async (formData: {
    year: number;
    month: number;
    monthly_sales: number;
  }) => {
    try {
      return await sendRequest("POST", "/monthly_sales", formData);
    } catch (error) {
      throw new Error(`Error creating monthly sales: ${error.message}`);
    }
  },

  fetchAllMonthlySales: async () => {
    try {
      return await sendRequest("GET", "/monthly_sales");
    } catch (error) {
      throw new Error(`Error fetching all monthly sales: ${error.message}`);
    }
  },

  fetchMonthlySalesById: async (id: number) => {
    try {
      return await sendRequest("GET", `/monthly_sales/${id}`);
    } catch (error) {
      throw new Error(
        `Error fetching monthly sales with ID ${id}: ${error.message}`
      );
    }
  },

  updateMonthlySales: async (
    id: number,
    formData: {
      year: number;
      month: number;
      monthly_sales: number;
    }
  ) => {
    try {
      return await sendRequest("PUT", `/monthly_sales/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating monthly sales with ID ${id}: ${error.message}`
      );
    }
  },

  deleteMonthlySales: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/monthly_sales/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting monthly sales with ID ${id}: ${error.message}`
      );
    }
  },
};
