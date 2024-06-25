import { sendRequest } from "../requestApi";

export const customerApi = {
  createCustomer: async (formData: {
    customer_name: string;
    phone_number: string;
    remarks: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    user_id: number[];
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest("POST", "/customers/store", formData);
      // console.log("APIのcustomerDataだよ");
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllCustomers: async (owner_id: number) => {
    try {
      const response = await sendRequest("GET", `/customers/${owner_id}`);
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

  updateCustomer: async (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    user_id: number[];
    owner_id: number;
  }) => {
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
