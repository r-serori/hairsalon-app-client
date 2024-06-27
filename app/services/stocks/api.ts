import { sendRequest } from "../requestApi";

export const stockApi = {
  createStock: async (formData: {
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    notice: number;
    stock_category_id: number;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest("POST", "/stocks/store", formData);
      // console.log("APIのstockDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllStocks: async (owner_id: number) => {
    try {
      const response = await sendRequest(
        "GET",
        `/stocks/${encodeURIComponent(owner_id)}`
      );
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

  updateStock: async (formData: {
    id: number;
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    notice: number;
    stock_category_id: number;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest("POST", `/stocks/update`, formData);
      // console.log("APIのstockDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  deleteStock: async (formData: { id: number; owner_id: number }) => {
    try {
      const response = await sendRequest("POST", `/stocks/delete`, formData);
      // console.log("APIのstockDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },
};
