import { sendRequest } from "../requestApi";

export const stockApi = {
  createStock: async (formData: {
    product_name: string;
    product_price: number;
    quantity: string;
    remarks: string;
    stock_category_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/stocks", formData);
    } catch (error) {
      throw new Error(`Error creating stock: ${error.message}`);
    }
  },

  fetchAllStocks: async () => {
    try {
      return await sendRequest("GET", "/stocks");
    } catch (error) {
      throw new Error(`Error fetching all stocks: ${error.message}`);
    }
  },

  fetchStockById: async (id: number) => {
    try {
      return await sendRequest("GET", `/stocks/${id}`);
    } catch (error) {
      throw new Error(`Error fetching stock with ID ${id}: ${error.message}`);
    }
  },

  updateStock: async (
    id: number,
    formData: {
      product_name: string;
      product_price: number;
      quantity: string;
      remarks: string;
      stock_category_id: number;
    }
  ) => {
    try {
      return await sendRequest("PUT", `/stocks/${id}`, formData);
    } catch (error) {
      throw new Error(`Error updating stock with ID ${id}: ${error.message}`);
    }
  },

  deleteStock: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/stocks/${id}`);
    } catch (error) {
      throw new Error(`Error deleting stock with ID ${id}: ${error.message}`);
    }
  },
};
