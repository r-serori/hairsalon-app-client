import { sendRequest } from "../requestApi";

export const customerApi = {
  createCustomer: async (formData: {
    customer_name: string;
    phone_number: string;
    address: string;
    remarks: string;
    new_customer: boolean;
  }) => {
    try {
      return await sendRequest("POST", "/customers", formData);
    } catch (error) {
      throw new Error(`Error creating customer: ${error.message}`);
    }
  },

  fetchAllCustomers: async () => {
    try {
      return await sendRequest("GET", "/customers");
    } catch (error) {
      throw new Error(`Error fetching all customers: ${error.message}`);
    }
  },

  fetchCustomerById: async (id: number) => {
    try {
      return await sendRequest("GET", `/customers/${id}`);
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
      address: string;
      remarks: string;
      new_customer: boolean;
    }
  ) => {
    try {
      return await sendRequest("PUT", `/customers/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating customer with ID ${id}: ${error.message}`
      );
    }
  },

  deleteCustomer: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/customers/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting customer with ID ${id}: ${error.message}`
      );
    }
  },
};
