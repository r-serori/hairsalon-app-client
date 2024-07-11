import { sendRequest } from "../requestApi";

export const dailySaleApi = {
  createDailySales: async (formData: { date: string; daily_sales: number }) => {
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

  fetchAllDailySales: async () => {
    try {
      const response = await sendRequest("GET", `/daily_sales/all`);
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

  selectGetDailySales: async (year: string) => {
    try {
      const response = await sendRequest(
        "GET",
        `/daily_sales/selected/${encodeURIComponent(year)}`
      );
      // console.log("APIのdailySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  updateDailySales: async (formData: {
    id: number;
    date: string;
    daily_sales: number;
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
  deleteDailySales: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/daily_sales/delete`, {
        id: id,
      });
      // console.log("APIのdailySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
};
