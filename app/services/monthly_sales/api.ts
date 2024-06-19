import { sendRequest } from "../requestApi";

export const monthlySaleApi = {
  createMonthlySales: async (formData: {
    year_month: string;
    monthly_sales: number;
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/monthly_sales", formData);
    return response;
  },

  fetchAllMonthlySales: async (owner_id: number) => {
    const response = await sendRequest("GET", `/monthly_sales/${owner_id}`);
    return response;
  },

  // fetchMonthlySalesById: async (id: number) => {
  //   const response = await sendRequest("GET", `/monthly_sales/${id}`);
  //   return response;
  // },

  updateMonthlySales: async (formData: {
    id: number;
    year_month: string;
    monthly_sales: number;
  }) => {
    const response = await sendRequest(
      "POST",
      `/monthly_sales/update`,
      formData
    );
    return response;
  },

  deleteMonthlySales: async (id: number) => {
    const response = await sendRequest("POST", `/monthly_sales/delete`, {
      id: id,
    });
    return response;
  },
};
