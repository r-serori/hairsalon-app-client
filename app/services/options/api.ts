import { sendRequest } from "../requestApi";

export const optionApi = {
  createOption: async (formData: {
    option_name: string;
    price: number;
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/options", formData);
    return response;
  },

  fetchAllOptions: async (owner_id: number) => {
    const response = await sendRequest("GET", `/options/${owner_id}`);
    return response;
  },

  // fetchOptionById: async (id: number) => {
  //   const response = await sendRequest("GET", `/options/${id}`);
  //   return response;
  // },

  updateOption: async (formData: {
    id: number;
    option_name: string;
    price: number;
  }) => {
    const response = await sendRequest("POST", `/options/update`, formData);
    return response;
  },

  deleteOption: async (id: number) => {
    const response = await sendRequest("POST", `/options/delete`, { id: id });
    return response;
  },
};
