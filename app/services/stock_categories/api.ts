import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const stockCategoryApi = {
  createStockCategory: async (formData: { category: string }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/stock_categories",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating stock category: ${error.message}`);
    }
  },

  fetchAllStockCategories: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/stock_categories", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all stock categories: ${error.message}`);
    }
  },

  fetchStockCategoryById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/stock_categories/${id}`, csrfToken);
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
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/stock_categories/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating stock category with ID ${id}: ${error.message}`
      );
    }
  },

  deleteStockCategory: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/stock_categories/${id}/delete`,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error deleting stock category with ID ${id}: ${error.message}`
      );
    }
  },
};
