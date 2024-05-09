import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const customerApi = {
  createCustomer: async (formData: {
    customer_name: string;
    phone_number: string;
    remarks: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    attendances_id: number[];
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/customers", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating customer: ${error.message}`);
    }
  },

  fetchAllCustomers: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/customers", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all customers: ${error.message}`);
    }
  },

  fetchCustomerById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/customers/${id}`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching customer with ID ${id}: ${error.message}`
      );
    }
  },

  updateCustomer: async (
    id: number,
    formData: {
      customer_name: string;
      phone_number: string;
      remarks: string;
      courses_id: number[];
      options_id: number[];
      merchandises_id: number[];
      hairstyles_id: number[];
      attendances_id: number[];
    }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/customers/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating customer with ID ${id}: ${error.message}`
      );
    }
  },

  deleteCustomer: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/customers/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error deleting customer with ID ${id}: ${error.message}`
      );
    }
  },
};
