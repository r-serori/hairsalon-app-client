import { sendRequest } from "../requestApi";

export const courseApi = {
  create: async (formData: {
    
    course_name: string;
    price: number;
  }) => {
    return await sendRequest("/courses", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/courses", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/courses/${id}`, "GET");
  },

  update: async (id: number, formData: {
    course_name: string;
    price: number;
  }) => {
    return await sendRequest(`/courses/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/courses/${id}`, "DELETE");
  },
};