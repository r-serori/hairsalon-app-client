import { sendRequest } from "../requestApi";

export const monthlySaleApi = {
  createMonthlySales: async (formData: {
    year_month: string;
    monthly_sales: number;
    owner_id: number;
  }) => {
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

  fetchAllMonthlySales: async (owner_id: number) => {
    try {
      const response = await sendRequest(
        "GET",
        `/monthly_sales/${encodeURIComponent(owner_id)}`
      );
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

  updateMonthlySales: async (formData: {
    id: number;
    year_month: string;
    monthly_sales: number;
    owner_id;
  }) => {
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

  deleteMonthlySales: async (formData: { id: number; owner_id: number }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/monthly_sales/delete`,
        formData
      );
      // console.log("APIのmonthlySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },
};
