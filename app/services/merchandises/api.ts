import { sendRequest } from "../requestApi";

export const merchandiseApi = {
  createMerchandise: async (formData: {
    merchandise_name: string;
    price: number;
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/merchandises/store", formData);
    return response;
  },

  fetchAllMerchandises: async (owner_id: number) => {
    const response = await sendRequest("GET", `/merchandises/${owner_id}`);
    return response;
  },

  // fetchMerchandiseById: async (id: number) => {
  //   const response = await sendRequest("GET", `/merchandises/${id}`);
  //   return response;
  // },

  updateMerchandise: async (formData: {
    id: number;
    merchandise_name: string;
    price: number;
  }) => {
    const response = await sendRequest(
      "POST",
      `/merchandises/update`,
      formData
    );
    return response;
  },

  deleteMerchandise: async (id: number) => {
    const response = await sendRequest("POST", `/merchandises/delete`, {
      id: id,
    });
    return response;
  },
};
