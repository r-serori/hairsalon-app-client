import { sendRequest } from "../requestApi";

export const stockCategoryApi = {
  createStockCategory: async (formData: { category: string }) => {
    try {
      return await sendRequest("POST", "/stock_categories", formData);
    } catch (error) {
      throw new Error(`Error creating stock category: ${error.message}`);
    }
  },

  fetchAllStockCategories: async () => {
    try {
      return await sendRequest("GET", "/stock_categories");
    } catch (error) {
      throw new Error(`Error fetching all stock categories: ${error.message}`);
    }
  },

  fetchStockCategoryById: async (id: number) => {
    try {
      return await sendRequest("GET", `/stock_categories/${id}`);
    } catch (error) {
      throw new Error(
        `Error fetching stock category with ID ${id}: ${error.message}`
      );
    }
  },

  updateStockCategory: async (
    id: number,
    formData: {
      category: string;
    }
  ) => {
    try {
      return await sendRequest("PUT", `/stock_categories/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating stock category with ID ${id}: ${error.message}`
      );
    }
  },

  deleteStockCategory: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/stock_categories/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting stock category with ID ${id}: ${error.message}`
      );
    }
  },
};
