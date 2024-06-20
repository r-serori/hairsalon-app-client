import { sendRequest } from "../requestApi";

export const hairstyleApi = {
  createHairstyle: async (formData: {
    hairstyle_name: string;
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/hairstyles/store", formData);
    console.log("APIのhairstyleDataだよ");
    return response;
  },

  fetchAllHairstyles: async (owner_id: number) => {
    const response = await sendRequest("GET", `/hairstyles/${owner_id}`);
    console.log("hairstyles fetched");
    return response;
  },

  // fetchHairstyleById: async (id: number) => {
  //   const response = await sendRequest("GET", `/hairstyles/${id}`);
  //   return response;
  // },

  updateHairstyle: async (formData: { id: number; hairstyle_name: string }) => {
    const response = await sendRequest("POST", `/hairstyles/update`, formData);
    return response;
  },

  deleteHairstyle: async (id: number) => {
    const response = await sendRequest("POST", `/hairstyles/delete`, {
      id: id,
    });
    return response;
  },
};
