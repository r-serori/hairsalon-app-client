import { sendRequest } from "../requestApi";

export const optionApi = {
  createOption: async (formData: {
    id: number;
    option_name: string;
    price: number;
  }) => {
    try {
      return await sendRequest("POST", "/options", formData);
    } catch (error) {
      throw new Error(`Error creating option: ${error.message}`);
    }
  },

  fetchAllOptions: async () => {
    try {
      return await sendRequest("GET", "/options");
    } catch (error) {
      throw new Error(`Error fetching all options: ${error.message}`);
    }
  },

  fetchOptionById: async (id: number) => {
    try {
      return await sendRequest("GET", `/options/${id}`);
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
      return await sendRequest("PUT", `/options/${id}`, formData);
    } catch (error) {
      throw new Error(`Error updating option with ID ${id}: ${error.message}`);
    }
  },

  deleteOption: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/options/${id}`);
    } catch (error) {
      throw new Error(`Error deleting option with ID ${id}: ${error.message}`);
    }
  },
};
