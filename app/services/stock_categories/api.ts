import { sendRequest } from "../requestApi";

export const stockCategoryApi = {
  createStockCategory: async (formData: { category: string }) => {
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

  fetchAllStockCategories: async () => {
    try {
      const response = await sendRequest("GET", `/stock_categories/all`);
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

  updateStockCategory: async (formData: { id: number; category: string }) => {
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

  deleteStockCategory: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/stock_categories/delete`, {
        id: id,
      });
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
