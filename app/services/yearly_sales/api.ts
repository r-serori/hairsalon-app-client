import { sendRequest } from "../requestApi";
import { Yearly_salesState } from "../../store/yearly_sales/yearly_saleSlice";

export const yearlySaleApi = {
  createYearlySales: async (formData: Yearly_salesState) => {
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

  fetchAllYearlySales: async () => {
    try {
      const response = await sendRequest("GET", `/yearly_sales/all`);
      // console.log("yearly_sales fetched", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },

  updateYearlySales: async (formData: Yearly_salesState) => {
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

  deleteYearlySales: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/yearly_sales/delete`, {
        id: id,
      });
      // console.log("APIのyearlySalesDataだよ", response);
      return response;
    } catch (error) {
      // console.log("errorだよ", error);
      return { error: error };
    }
  },
};
