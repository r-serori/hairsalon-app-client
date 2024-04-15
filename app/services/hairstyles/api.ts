import { sendRequest } from "../requestApi";

export const hairstyleApi = {
  createHairstyle: async (formData: { hairstyle_name: string }) => {
    try {
      return await sendRequest("POST", "/hairstyles", formData);
    } catch (error) {
      throw new Error(`Error creating hairstyle: ${error.message}`);
    }
  },

  fetchAllHairstyles: async () => {
    try {
      return await sendRequest("GET", "/hairstyles");
    } catch (error) {
      throw new Error(`Error fetching all hairstyles: ${error.message}`);
    }
  },

  fetchHairstyleById: async (id: number) => {
    try {
      return await sendRequest("GET", `/hairstyles/${id}`);
    } catch (error) {
      throw new Error(
        `Error fetching hairstyle with ID ${id}: ${error.message}`
      );
    }
  },

  updateHairstyle: async (
    id: number,
    formData: {
      hairstyle_name: string;
    }
  ) => {
    try {
      return await sendRequest("PUT", `/hairstyles/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating hairstyle with ID ${id}: ${error.message}`
      );
    }
  },

  deleteHairstyle: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/hairstyles/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting hairstyle with ID ${id}: ${error.message}`
      );
    }
  },
};
