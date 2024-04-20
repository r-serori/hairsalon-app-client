import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const merchandiseApi = {
  createMerchandise: async (formData: {
    merchandise_name: string;
    price: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/merchandises", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating merchandise: ${error.message}`);
    }
  },

  fetchAllMerchandises: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/merchandises", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all merchandises: ${error.message}`);
    }
  },

  fetchMerchandiseById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/merchandises/${id}`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching merchandise with ID ${id}: ${error.message}`
      );
    }
  },

  updateMerchandise: async (
    id: number,
    formData: {
      merchandise_name: string;
      price: number;
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/merchandises/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating merchandise with ID ${id}: ${error.message}`
      );
    }
  },

  deleteMerchandise: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/merchandises/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error deleting merchandise with ID ${id}: ${error.message}`
      );
    }
  },
};
