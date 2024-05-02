import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const stockApi = {
  createStock: async (formData: {
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    stock_category_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/stocks", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating stock: ${error.message}`);
    }
  },

  fetchAllStocks: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/stocks", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all stocks: ${error.message}`);
    }
  },

  fetchStockById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/stocks/${id}`, csrfToken);
    } catch (error) {
      throw new Error(`Error fetching stock with ID ${id}: ${error.message}`);
    }
  },

  updateStock: async (
    id: number,
    formData: {
      product_name: string;
      product_price: number;
      quantity: number;
      remarks: string;
      stock_category_id: number;
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/stocks/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error updating stock with ID ${id}: ${error.message}`);
    }
  },

  deleteStock: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/stocks/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(`Error deleting stock with ID ${id}: ${error.message}`);
    }
  },
};
