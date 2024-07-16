import { sendRequest } from "../requestApi";
import { Stock_categoryState } from "../../store/stocks/stock_categories/stock_categorySlice";

export const stockCategoryApi = {
  createStockCategory: async (formData: Stock_categoryState) => {
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

  updateStockCategory: async (formData: Stock_categoryState) => {
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
