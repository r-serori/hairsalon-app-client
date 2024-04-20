import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const yearlySaleApi = {
  createYearlySales: async (formData: {
    year: number;
    yearly_sales: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/yearly_sales", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating yearly sales: ${error.message}`);
    }
  },

  fetchAllYearlySales: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/yearly_sales", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all yearly sales: ${error.message}`);
    }
  },

  fetchYearlySalesById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/yearly_sales/${id}`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching yearly sales with ID ${id}: ${error.message}`
      );
    }
  },

  updateYearlySales: async (
    id: number,
    formData: {
      year: number;
      yearly_sales: number;
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/yearly_sales/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating yearly sales with ID ${id}: ${error.message}`
      );
    }
  },

  deleteYearlySales: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/yearly_sales/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error deleting yearly sales with ID ${id}: ${error.message}`
      );
    }
  },
};
