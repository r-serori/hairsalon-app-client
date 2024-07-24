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
      return response;
    } catch (error) {
      return { error: error };
    }
  },

  fetchAllMonthlySales: async () => {
    try {
      const response = await sendRequest("GET", `/monthly_sales/all`);
      return response;
    } catch (error) {
      return { error: error };
    }
  },

  selectGetMonthlySales: async (year: string) => {
    try {
      const response = await sendRequest(
        "GET",
        `/monthly_sales/selected/${encodeURIComponent(year)}`
      );
      return response;
    } catch (error) {
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
      return response;
    } catch (error) {
      return { error: error };
    }
  },

  deleteMonthlySales: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/monthly_sales/delete`, {
        id: id,
      });
      return response;
    } catch (error) {
      return { error: error };
    }
  },
};
