import { sendRequest } from "../requestApi";

export const merchandiseApi = {
  createMerchandise: async (formData: {
    merchandise_name: string;
    price: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        "/merchandises/store",
        formData
      );
      // console.log("APIのmerchandiseDataだよ",response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllMerchandises: async () => {
    try {
      const response = await sendRequest("GET", `/merchandises/all`);
      // console.log("merchandises fetched",response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  // fetchMerchandiseById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/merchandises/${id}`);
  //   return response;
  // }catch (error ){
  // console.error("errorだよ", error);
  // return { error: error };
  // }
  // },

  updateMerchandise: async (formData: {
    id: number;
    merchandise_name: string;
    price: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/merchandises/update`,
        formData
      );
      // console.log("APIのmerchandiseDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  deleteMerchandise: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/merchandises/delete`, {
        id: id,
      });
      // console.log("APIのmerchandiseDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
};
