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
    const response = await sendRequest("POST", "/stocks/store", formData);
    return response;
  },

  fetchAllStocks: async (owner_id: number) => {
    const response = await sendRequest("GET", `/stocks/${owner_id}`);
    return response;
  },

  // fetchStockById: async (id: number) => {
  //   const response = await sendRequest("GET", `/stocks/${id}`);
  //   return response;
  // },

  updateStock: async (formData: {
    id: number;
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    notice: number;
    stock_category_id: number;
  }) => {
    const response = await sendRequest("POST", `/stocks/update`, formData);
    return response;
  },

  deleteStock: async (id: number) => {
    const response = await sendRequest("POST", `/stocks/delete`, { id: id });
    return response;
  },
};
