import { sendRequest } from "../requestApi";

export const yearlySaleApi = {
  createYearlySales: async (formData: {
    year: string;
    yearly_sales: number;
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/yearly_sales", formData);
    return response;
  },

  fetchAllYearlySales: async (owner_id: number) => {
    const response = await sendRequest("GET", `/yearly_sales/${owner_id}`);
    return response;
  },

  // fetchYearlySalesById: async (id: number) => {
  //   const response = await sendRequest("GET", `/yearly_sales/${id}`);
  //   return response;
  // },

  updateYearlySales: async (formData: {
    id: number;
    year: string;
    yearly_sales: number;
  }) => {
    const response = await sendRequest(
      "POST",
      `/yearly_sales/update`,
      formData
    );
    return response;
  },

  deleteYearlySales: async (id: number) => {
    const response = await sendRequest("POST", `/yearly_sales/delete`, {
      id: id,
    });
    return response;
  },
};
