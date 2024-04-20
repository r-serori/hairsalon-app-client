import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const optionApi = {
  createOption: async (formData: { option_name: string; price: number }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/options", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating option: ${error.message}`);
    }
  },

  fetchAllOptions: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/options", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all options: ${error.message}`);
    }
  },

  fetchOptionById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/options/${id}`, csrfToken);
    } catch (error) {
      throw new Error(`Error fetching option with ID ${id}: ${error.message}`);
    }
  },

  updateOption: async (
    id: number,
    formData: {
      option_name: string;
      price: number;
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/options/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error updating option with ID ${id}: ${error.message}`);
    }
  },

  deleteOption: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/options/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(`Error deleting option with ID ${id}: ${error.message}`);
    }
  },
};
