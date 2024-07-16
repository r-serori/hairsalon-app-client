import { sendRequest } from "../requestApi";
import { HairstyleState } from "../../store/hairstyles/hairstyleSlice";

export const hairstyleApi = {
  createHairstyle: async (formData: HairstyleState) => {
    try {
      const response = await sendRequest("POST", "/hairstyles/store", formData);
      // console.log("APIのhairstyleDataだよ");
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllHairstyles: async () => {
    try {
      const response = await sendRequest("GET", `/hairstyles/all`);
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

  updateHairstyle: async (formData: HairstyleState) => {
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
