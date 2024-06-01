import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const stockCategoryApi = {
  createStockCategory: async (formData: { category: string }) => {
    const response = await sendRequest("POST", "/stock_categories", formData);
    return response;
  },

  fetchAllStockCategories: async () => {
    const response = await sendRequest("GET", "/stock_categories");
    return response;
  },

  fetchStockCategoryById: async (id: number) => {
    const response = await sendRequest("GET", `/stock_categories/${id}`);
    return response;
  },

  updateStockCategory: async (
    id: number,
    formData: {
      category: string;
    }
  ) => {
    const response = await sendRequest(
      "POST",
      `/stock_categories/${id}/update`,
      formData
    );
    return response;
  },

  deleteStockCategory: async (id: number) => {
    const response = await sendRequest(
      "POST",
      `/stock_categories/${id}/delete`
    );
    return response;
  },
};
