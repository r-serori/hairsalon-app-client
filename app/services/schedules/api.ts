import { updateCustomerSchedule } from "../../store/schedules/scheduleSlice";
import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const schedulesApi = {
  createCustomerSchedule: async (formData: {
    customer_name: string;
    phone_number: string;
    remarks: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    attendances_id: number[];
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    customers_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        "/schedules/customers/double",
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error creating schedule: ${error.message}`);
    }
  },

  createSchedule: async (formData: {
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    customers_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/schedules", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating schedule: ${error.message}`);
    }
  },

  fetchAllSchedules: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/schedules", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all schedules: ${error.message}`);
    }
  },

  fetchScheduleById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/schedules/${id}`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error fetching schedule with ID ${id}: ${error.message}`
      );
    }
  },

  updateSchedule: async (formData: {
    Sid: number;
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      console.log("updateScheduleの中だよ", formData);
      return await sendRequest(
        "POST",
        `/schedules/${formData.Sid}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating schedule with ID ${formData.Sid}: ${error.message}`
      );
    }
  },

  updateCustomerSchedule: async (formData: {
    Sid: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    attendances_id: number[];
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    customers_id: number;
  }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/schedules/${formData.Sid}/customers/doubleUpdate`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(
        `Error updating schedule with ID ${formData.Sid}: ${error.message}`
      );
    }
  },

  deleteSchedule: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/schedules/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(
        `Error deleting schedule with ID ${id}: ${error.message}`
      );
    }
  },
};
