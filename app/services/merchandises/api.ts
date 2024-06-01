import { sendRequest } from "../requestApi";

export const merchandiseApi = {
  createMerchandise: async (formData: {
    merchandise_name: string;
    price: number;
  }) => {
    const response = await sendRequest("POST", "/merchandises", formData);
    return response;
  },

  fetchAllMerchandises: async () => {
    const response = await sendRequest("GET", "/merchandises");
    return response;
  },

  fetchMerchandiseById: async (id: number) => {
    const response = await sendRequest("GET", `/merchandises/${id}`);
    return response;
  },

  updateMerchandise: async (
    id: number,
    formData: {
      merchandise_name: string;
      price: number;
    }
  ) => {
    const response = await sendRequest(
      "POST",
      `/merchandises/${id}/update`,
      formData
    );
    return response;
  },

  deleteMerchandise: async (id: number) => {
    const response = await sendRequest("POST", `/merchandises/${id}/delete`);
    return response;
  },
};
