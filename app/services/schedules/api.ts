import { sendRequest } from "../requestApi";

export const schedulesApi = {
  create: async (formData: {
    date: Date;
    start_time: Date;
    end_time: Date;
    customer_id: number;
  }) => {
    return await sendRequest("/schedules", "POST", formData);
  },

  fetchAll: async () => {
    return await sendRequest("/schedules", "GET");
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/schedules/${id}`, "GET");
  },

  update: async (id: number, formData: {
    date: Date;
    start_time: Date;
    end_time: string;
    customer_id: number;
  }) => {
    return await sendRequest(`/schedules/${id}`, "PUT", formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/schedules/${id}`, "DELETE");
  },
};