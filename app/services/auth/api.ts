import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const authApi = {
  login: async (formData: { login_id: string; password: string }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/login", formData, csrfToken);
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
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/register", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error registering: ${error.message}`);
    }
  },

  logout: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/logout", csrfToken);
    } catch (error) {
      throw new Error(`Error logging out: ${error.message}`);
    }
  },
};
