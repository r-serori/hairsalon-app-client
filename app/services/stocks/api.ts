import { sendRequest } from "../requestApi";

export const stockApi = {
  create: async (formData: {
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    stock_category_id: number;

  }) => {
    return await sendRequest("/stock_categories", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/stock_categories", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/stock_categories/${id}`, "GET");
  },

  update: async (id: number, formData: {
    product_name: string;
    product_price: number;
    quantity: number;
    remarks: string;
    stock_category_id: number;
    
  }) => {
    return await sendRequest(`/stock_categories/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/stock_categories/${id}`, "DELETE");
  },
};