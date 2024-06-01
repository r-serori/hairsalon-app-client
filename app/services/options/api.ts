import { sendRequest } from "../requestApi";

export const optionApi = {
  createOption: async (formData: { option_name: string; price: number }) => {
    const response = await sendRequest("POST", "/options", formData);
    return response;
  },

  fetchAllOptions: async () => {
    const response = await sendRequest("GET", "/options");
    return response;
  },

  fetchOptionById: async (id: number) => {
    const response = await sendRequest("GET", `/options/${id}`);
    return response;
  },

  updateOption: async (
    id: number,
    formData: {
      option_name: string;
      price: number;
    }
  ) => {
    const response = await sendRequest(
      "POST",
      `/options/${id}/update`,
      formData
    );
    return response;
  },

  deleteOption: async (id: number) => {
    const response = await sendRequest("POST", `/options/${id}/delete`);
    return response;
  },
};
