import { sendRequest } from "../requestApi";

export const stockCategoryApi = {
  createStockCategory: async (formData: {
    category: string;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        "/stock_categories/store",
        formData
      );
      // console.log("APIのstockCategoryDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return {
        error: error,
      };
    }
  },

  fetchAllStockCategories: async (owner_id: number) => {
    try {
      const response = await sendRequest(
        "GET",
        `/stock_categories/${encodeURIComponent(owner_id)}`
      );
      // console.log("stock_categories fetched", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return {
        error: error,
      };
    }
  },

  // fetchStockCategoryById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/stock_categories/${id}`);
  //   return response;
  // }catch(error){
  // console.log("errorだよ", error);
  // return {
  //   error:error
  // }
  // }
  // },

  updateStockCategory: async (formData: {
    id: number;
    category: string;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/stock_categories/update`,
        formData
      );
      // console.log("APIのstockCategoryDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return {
        error: error,
      };
    }
  },

  deleteStockCategory: async (formData: { id: number; owner_id: number }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/stock_categories/delete`,
        formData
      );
      // console.log("APIのstockCategoryDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return {
        error: error,
      };
    }
  },
};
