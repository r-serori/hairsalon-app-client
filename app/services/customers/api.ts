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
    users_id: number[];
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/customers/post", formData);
    console.log("APIのcustomerDataだよ");
    return response;
  },

  fetchAllCustomers: async (owner_id: number) => {
    const response = await sendRequest("GET", `/customers/${owner_id}`);
    console.log("customers fetched");
    return response;
  },

  // fetchCustomerById: async (id: number) => {
  //   const response = await sendRequest("GET", `/customers/${id}`);
  //   console.log("customer fetched");
  //   return response;
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
    users_id: number[];
    owner_id: number;
  }) => {
    console.log("formDataだよ", formData);
    const response = await sendRequest("POST", `/customers/update`, formData);
    console.log("APIのcustomerDataだよ");
    return response;
  },

  deleteCustomer: async (id: number) => {
    const response = await sendRequest("POST", `/customers/delete`, { id: id });
    console.log("APIのcustomerDataだよ");
    return response;
  },
};
