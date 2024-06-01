import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const yearlySaleApi = {
  createYearlySales: async (formData: {
    year: string;
    yearly_sales: number;
  }) => {
    const response = await sendRequest("POST", "/yearly_sales", formData);
    return response;
  },

  fetchAllYearlySales: async () => {
    const response = await sendRequest("GET", "/yearly_sales");
    return response;
  },

  fetchYearlySalesById: async (id: number) => {
    const response = await sendRequest("GET", `/yearly_sales/${id}`);
    return response;
  },

  updateYearlySales: async (
    id: number,
    formData: {
      year: string;
      yearly_sales: number;
    }
  ) => {
    const response = await sendRequest(
      "POST",
      `/yearly_sales/${id}/update`,
      formData
    );
    return response;
  },

  deleteYearlySales: async (id: number) => {
    const response = await sendRequest("POST", `/yearly_sales/${id}/delete`);
    return response;
  },
};
