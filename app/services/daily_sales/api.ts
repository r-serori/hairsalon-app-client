import { sendRequest } from "../requestApi";

export const dailySaleApi = {
  createDailySales: async (formData: {
    date: string;
    daily_sales: number;
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/daily_sales", formData);
    return response;
  },

  fetchAllDailySales: async (owner_id: number) => {
    const response = await sendRequest("GET", `/daily_sales/${owner_id}`);
    return response;
  },

  // fetchDailySalesById: async (id: number) => {
  //   const response = await sendRequest("GET", `/daily_sales/${id}`);
  //   return response;
  // },

  updateDailySales: async (formData: {
    id: number;
    date: string;
    daily_sales: number;
  }) => {
    const response = await sendRequest("POST", `/daily_sales/update`, formData);
    return response;
  },
  deleteDailySales: async (id: number) => {
    const response = await sendRequest("POST", `/daily_sales/delete`, {
      id: id,
    });
    return response;
  },
};
