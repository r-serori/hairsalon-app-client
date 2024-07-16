import { sendRequest } from "../requestApi";
import { CustomerState } from "../../store/customers/customerSlice";

export const customerApi = {
  createCustomer: async (formData: CustomerState) => {
    try {
      const response = await sendRequest("POST", "/customers/store", formData);
      // console.log("APIのcustomerDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllCustomers: async () => {
    try {
      const response = await sendRequest("GET", `/customers/all`);
      // console.log("customers fetched");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  // fetchCustomerById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/customers/${id}`);
  // console.log("customer fetched");
  //   return response;
  // } catch (error) {
  //   console.error("errorだよ", error);
  //   return { error: error };

  // },

  updateCustomer: async (formData: CustomerState) => {
    try {
      // console.log("formDataだよ", formData);
      const response = await sendRequest("POST", `/customers/update`, formData);
      // console.log("APIのcustomerDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  deleteCustomer: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/customers/delete`, {
        id: id,
      });
      // console.log("APIのcustomerDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },
};
