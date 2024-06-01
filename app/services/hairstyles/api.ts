import { sendRequest } from "../requestApi";

export const hairstyleApi = {
  createHairstyle: async (formData: { hairstyle_name: string }) => {
    const response = await sendRequest("POST", "/hairstyles", formData);
    console.log("APIのhairstyleDataだよ");
    return response;
  },

  fetchAllHairstyles: async () => {
    const response = await sendRequest("GET", "/hairstyles");
    console.log("hairstyles fetched");
    return response;
  },

  fetchHairstyleById: async (id: number) => {
    const response = await sendRequest("GET", `/hairstyles/${id}`);
    return response;
  },

  updateHairstyle: async (
    id: number,
    formData: {
      hairstyle_name: string;
    }
  ) => {
    const response = await sendRequest(
      "POST",
      `/hairstyles/${id}/update`,
      formData
    );
    return response;
  },

  deleteHairstyle: async (id: number) => {
    const response = await sendRequest("POST", `/hairstyles/${id}/delete`);
    return response;
  },
};
