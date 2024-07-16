import { sendRequest } from "../requestApi";
import { Monthly_salesState } from "../../store/monthly_sales/monthly_saleSlice";

export const monthlySaleApi = {
  createMonthlySales: async (formData: Monthly_salesState) => {
    try {
      const response = await sendRequest(
        "POST",
        "/monthly_sales/store",
        formData
      );
      // console.log("APIのmonthlySalesDataだよ",response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllMonthlySales: async () => {
    try {
      const response = await sendRequest("GET", `/monthly_sales/all`);
      // console.log("monthly_sales fetched",response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  // fetchMonthlySalesById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/monthly_sales/${id}`);
  //   return response;
  // }catch (error){
  //   console.log("errorだよ", error);
  //   return { error: error };
  // }
  // },

  selectGetMonthlySales: async (year: string) => {
    try {
      const response = await sendRequest(
        "GET",
        `/monthly_sales/selected/${encodeURIComponent(year)}`
      );
      // console.log("APIのmonthlySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  updateMonthlySales: async (formData: Monthly_salesState) => {
    try {
      const response = await sendRequest(
        "POST",
        `/monthly_sales/update`,
        formData
      );
      // console.log("APIのmonthlySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  deleteMonthlySales: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/monthly_sales/delete`, {
        id: id,
      });
      // console.log("APIのmonthlySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },
};
