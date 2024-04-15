import { sendRequest } from "../requestApi";

export const merchandiseApi = {
  createMerchandise: async (formData: {
    merchandise_name: string;
    price: number;
  }) => {
    try {
      return await sendRequest("POST", "/merchandises", formData);
    } catch (error) {
      throw new Error(`Error creating merchandise: ${error.message}`);
    }
  },

  fetchAllMerchandises: async () => {
    try {
      return await sendRequest("GET", "/merchandises");
    } catch (error) {
      throw new Error(`Error fetching all merchandises: ${error.message}`);
    }
  },

  fetchMerchandiseById: async (id: number) => {
    try {
      return await sendRequest("GET", `/merchandises/${id}`);
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
      return await sendRequest("PUT", `/merchandises/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating merchandise with ID ${id}: ${error.message}`
      );
    }
  },

  deleteMerchandise: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/merchandises/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting merchandise with ID ${id}: ${error.message}`
      );
    }
  },
};
