import { sendRequest } from "../requestApi";

export const schedulesApi = {
  createSchedule: async (formData: {
    date: string;
    start_time: string;
    end_time: string;
    price: number;
    customers_id: number;
  }) => {
    try {
      return await sendRequest("POST", "/schedules", formData);
    } catch (error) {
      throw new Error(`Error creating schedule: ${error.message}`);
    }
  },

  fetchAllSchedules: async () => {
    try {
      return await sendRequest("GET", "/schedules");
    } catch (error) {
      throw new Error(`Error fetching all schedules: ${error.message}`);
    }
  },

  fetchScheduleById: async (id: number) => {
    try {
      return await sendRequest("GET", `/schedules/${id}`);
    } catch (error) {
      throw new Error(
        `Error fetching schedule with ID ${id}: ${error.message}`
      );
    }
  },

  updateSchedule: async (
    id: number,
    formData: {
      date: Date;
      start_time: Date;
      end_time: Date;
      customer_id: number;
    }
  ) => {
    try {
      return await sendRequest("PUT", `/schedules/${id}`, formData);
    } catch (error) {
      throw new Error(
        `Error updating schedule with ID ${id}: ${error.message}`
      );
    }
  },

  deleteSchedule: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/schedules/${id}`);
    } catch (error) {
      throw new Error(
        `Error deleting schedule with ID ${id}: ${error.message}`
      );
    }
  },
};
