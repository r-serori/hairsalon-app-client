import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const monthlySaleApi = {
  createMonthlySales: async (formData: {
    year_month: string;
    monthly_sales: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/monthly_sales", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating monthly sales: ${error.message}`);
    }
  },

  fetchAllMonthlySales: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/monthly_sales", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all monthly sales: ${error.message}`);
    }
  },

  fetchMonthlySalesById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/monthly_sales/${id}`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching monthly sales with ID ${id}: ${error.message}`
      );
    }
  },

  updateMonthlySales: async (
    id: number,
    formData: {
      year_month: string;
      monthly_sales: number;
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/monthly_sales/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating monthly sales with ID ${id}: ${error.message}`
      );
    }
  },

  deleteMonthlySales: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/monthly_sales/${id}/delete`,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error deleting monthly sales with ID ${id}: ${error.message}`
      );
    }
  },
};
