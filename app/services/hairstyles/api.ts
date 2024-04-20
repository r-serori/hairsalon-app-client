import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const hairstyleApi = {
  createHairstyle: async (formData: { hairstyle_name: string }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/hairstyles", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating hairstyle: ${error.message}`);
    }
  },

  fetchAllHairstyles: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/hairstyles", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all hairstyles: ${error.message}`);
    }
  },

  fetchHairstyleById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/hairstyles/${id}`, csrfToken);
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
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/hairstyles/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating hairstyle with ID ${id}: ${error.message}`
      );
    }
  },

  deleteHairstyle: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/hairstyles/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error deleting hairstyle with ID ${id}: ${error.message}`
      );
    }
  },
};
