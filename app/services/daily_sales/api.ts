import { sendRequest } from "../requestApi";
import { Daily_salesState } from "../../store/daily_sales/daily_saleSlice";

export const dailySaleApi = {
  createDailySales: async (formData: Daily_salesState) => {
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

  updateDailySales: async (formData: Daily_salesState) => {
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
