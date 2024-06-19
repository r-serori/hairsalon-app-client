import { sendRequest } from "../requestApi";

export const stockCategoryApi = {
  createStockCategory: async (formData: {
    category: string;
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/stock_categories", formData);
    return response;
  },

  fetchAllStockCategories: async (owner_id: number) => {
    const response = await sendRequest("GET", `/stock_categories/${owner_id}`);
    return response;
  },

  // fetchStockCategoryById: async (id: number) => {
  //   const response = await sendRequest("GET", `/stock_categories/${id}`);
  //   return response;
  // },

  updateStockCategory: async (formData: { id: number; category: string }) => {
    const response = await sendRequest(
      "POST",
      `/stock_categories/update`,
      formData
    );
    return response;
  },

  deleteStockCategory: async (id: number) => {
    const response = await sendRequest("POST", `/stock_categories/delete`, {
      id: id,
    });
    return response;
  },
};
