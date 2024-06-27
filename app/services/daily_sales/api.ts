import { sendRequest } from "../requestApi";

export const dailySaleApi = {
  createDailySales: async (formData: {
    date: string;
    daily_sales: number;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        "/daily_sales/store",
        formData
      );
      // console.log("APIのdailySalesDataだよ");
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllDailySales: async (owner_id: number) => {
    try {
      const response = await sendRequest(
        "GET",
        `/daily_sales/${encodeURIComponent(owner_id)}`
      );
      // console.log("daily_sales fetched",response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  // fetchDailySalesById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/daily_sales/${id}`);
  //   return response;
  // }catch (error) {
  //     console.error("errorだよ", error);
  //     return { error: error };
  // }

  // },

  updateDailySales: async (formData: {
    id: number;
    date: string;
    daily_sales: number;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/daily_sales/update`,
        formData
      );
      // console.log("APIのdailySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
  deleteDailySales: async (formData: { id: number; owner_id: number }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/daily_sales/delete`,
        formData
      );
      // console.log("APIのdailySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
};
