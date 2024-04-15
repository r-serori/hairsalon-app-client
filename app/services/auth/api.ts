import { sendRequest } from "../requestApi";

export const authApi = {
  login: async (formData: { login_id: string; password: string }) => {
    try {
      return await sendRequest("POST", "/login", formData);
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  },

  register: async (formData: {
    login_id: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      return await sendRequest("POST", "/register", formData);
    } catch (error) {
      throw new Error(`Error registering: ${error.message}`);
    }
  },

  logout: async () => {
    try {
      return await sendRequest("POST", "/logout");
    } catch (error) {
      throw new Error(`Error logging out: ${error.message}`);
    }
  },
};
