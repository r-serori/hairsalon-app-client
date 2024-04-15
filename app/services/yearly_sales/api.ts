import { sendRequest } from "../requestApi";

export const yearlySaleApi = {
  createYearlySales: async (formData: {
    year: number;
    yearly_sales: number;
  }) => {
    try {
      return await sendRequest("POST", "/yearly_sales", formData);
    } catch (error) {
      throw new Error(`Error creating yearly sales: ${error.message}`);
    }
  },

  fetchAllYearlySales: async () => {
    try {
      return await sendRequest("GET", "/yearly_sales");
    } catch (error) {
      throw new Error(`Error fetching all yearly sales: ${error.message}`);
    }
  },

  fetchYearlySalesById: async (id: number) => {
    try {
      return await sendRequest("GET", `/yearly_sales/${id}`);
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
      return await sendRequest("PUT", `/yearly_sales/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating yearly sales with ID ${id}: ${error.message}`
      );
    }
  },

  deleteYearlySales: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/yearly_sales/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting yearly sales with ID ${id}: ${error.message}`
      );
    }
  },
};
