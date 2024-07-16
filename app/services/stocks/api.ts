import { sendRequest } from "../requestApi";
import { StockState } from "../../store/stocks/stockSlice";

export const stockApi = {
  createStock: async (formData: StockState) => {
    try {
      const response = await sendRequest("POST", "/stocks/store", formData);
      // console.log("APIのstockDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllStocks: async () => {
    try {
      const response = await sendRequest("GET", `/stocks/all`);
      // console.log("stocks fetched", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  // fetchStockById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/stocks/${id}`);
  //   return response;
  // }catch(error){
  // console.log("errorだよ", error);
  //   return {error : error};
  // }
  // },

  updateStock: async (formData: StockState) => {
    try {
      const response = await sendRequest("POST", `/stocks/update`, formData);
      // console.log("APIのstockDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  deleteStock: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/stocks/delete`, {
        id: id,
      });
      // console.log("APIのstockDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },
};
