import { sendRequest } from "../requestApi";

export const yearlySaleApi = {
  createYearlySales: async (formData: {
    year: string;
    yearly_sales: number;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        "/yearly_sales/store",
        formData
      );
      // console.log("APIのyearlySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllYearlySales: async (owner_id: number) => {
    try {
      const response = await sendRequest(
        "GET",
        `/yearly_sales/${encodeURIComponent(owner_id)}`
      );
      // console.log("yearly_sales fetched", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  // fetchYearlySalesById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/yearly_sales/${id}`);
  //   return response;
  // }catch(error){
  // console.log("errorだよ", error);
  //   return {error: error}
  // }
  // },

  updateYearlySales: async (formData: {
    id: number;
    year: string;
    yearly_sales: number;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/yearly_sales/update`,
        formData
      );
      // console.log("APIのyearlySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  deleteYearlySales: async (formData: { id: number; owner_id: number }) => {
    try {
      const response = await sendRequest(
        "POST",
        `/yearly_sales/delete`,
        formData
      );
      // console.log("APIのyearlySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },
};
