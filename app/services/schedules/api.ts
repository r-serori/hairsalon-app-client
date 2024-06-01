import { sendRequest } from "../requestApi";

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
    const response = await sendRequest(
      "POST",
      "/schedules/customers/double",
      formData
    );
    return response;
  },

  createSchedule: async (formData: {
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
  }) => {
    const response = await sendRequest("POST", "/schedules", formData);
    return response;
  },

  fetchAllSchedules: async () => {
    const response = await sendRequest("GET", "/schedules");
    return response;
  },

  selectGetSchedules: async (formData: { year: string }) => {
    const response = await sendRequest(
      "GET",
      "/schedules/customers/selectGetYear",
      formData
    );
    return response;
  },

  fetchScheduleById: async (id: number) => {
    const response = await sendRequest("GET", `/schedules/${id}`);
    return response;
  },

  updateSchedule: async (formData: {
    Sid: number;
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
  }) => {
    console.log("updateScheduleの中だよ", formData);
    const response = await sendRequest(
      "POST",
      `/schedules/${formData.Sid}/update`,
      formData
    );
    return response;
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
    const response = await sendRequest(
      "POST",
      `/schedules/${formData.Sid}/customers/doubleUpdate`,
      formData
    );
    return response;
  },

  deleteSchedule: async (id: number) => {
    const response = await sendRequest("POST", `/schedules/${id}/delete`);
    return response;
  },

  updateCustomerOnlySchedule: async (formData: {
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
    const response = await sendRequest(
      "POST",
      `schedules/${formData.customers_id}/customers/customerOnlyUpdate`,
      formData
    );
    return response;
  },
};
