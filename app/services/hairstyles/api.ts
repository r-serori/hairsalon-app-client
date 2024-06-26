import { sendRequest } from "../requestApi";

export const hairstyleApi = {
  createHairstyle: async (formData: {
    hairstyle_name: string;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest("POST", "/hairstyles/store", formData);
      // console.log("APIのhairstyleDataだよ");
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllHairstyles: async (owner_id: number) => {
    try {
      const response = await sendRequest(
        "GET",
        `/hairstyles/${encodeURIComponent(owner_id)}`
      );
      // console.log("hairstyles fetched");
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  // fetchHairstyleById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/hairstyles/${id}`);
  //   return response;
  // }catch (error) {
  // console.error("errorだよ", error);
  //     return { error: error };
  //   }
  // },

  updateHairstyle: async (formData: { id: number; hairstyle_name: string }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/hairstyles/update`,
        formData
      );
      // console.log("APIのhairstyleDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  deleteHairstyle: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/hairstyles/delete`, {
        id: id,
      });
      // console.log("APIのhairstyleDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
};
