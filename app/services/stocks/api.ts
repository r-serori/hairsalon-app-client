import { sendRequest } from "../requestApi";

export const stockApi = {
  createStock: async (formData: {
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    stock_category_id: number;
  }) => {
    const response = await sendRequest("POST", "/stocks", formData);
    return response;
  },

  fetchAllStocks: async () => {
    const response = await sendRequest("GET", "/stocks");
    return response;
  },

  fetchStockById: async (id: number) => {
    const response = await sendRequest("GET", `/stocks/${id}`);
    return response;
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
    const response = await sendRequest(
      "POST",
      `/stocks/${id}/update`,
      formData
    );
    return response;
  },

  deleteStock: async (id: number) => {
    const response = await sendRequest("POST", `/stocks/${id}/delete`);
    return response;
  },
};
