import { sendRequest } from "../requestApi";

export const monthlySaleApi = {
  createMonthlySales: async (formData: {
    year_month: string;
    monthly_sales: number;
  }) => {
    const response = await sendRequest("POST", "/monthly_sales", formData);
    return response;
  },

  fetchAllMonthlySales: async () => {
    const response = await sendRequest("GET", "/monthly_sales");
    return response;
  },

  fetchMonthlySalesById: async (id: number) => {
    const response = await sendRequest("GET", `/monthly_sales/${id}`);
    return response;
  },

  updateMonthlySales: async (
    id: number,
    formData: {
      year_month: string;
      monthly_sales: number;
    }
  ) => {
    const response = await sendRequest(
      "POST",
      `/monthly_sales/${id}/update`,
      formData
    );
    return response;
  },

  deleteMonthlySales: async (id: number) => {
    const response = await sendRequest("POST", `/monthly_sales/${id}/delete`);
    return response;
  },
};
