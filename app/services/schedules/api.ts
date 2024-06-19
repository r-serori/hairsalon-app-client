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
    users_id: number[];
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    customers_id: number;
    owner_id: number;
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
    owner_id: number;
  }) => {
    const response = await sendRequest("POST", "/schedules", formData);
    return response;
  },

  fetchAllSchedules: async (id: number) => {
    const response = await sendRequest("GET", `/schedules/${id}`);
    return response;
  },

  selectGetSchedules: async (formData: { owner_id: number; year: string }) => {
    const response = await sendRequest(
      "GET",
      `/schedules/customers/selectGetYear/${formData.owner_id}/${formData.year}`
    );
    return response;
  },

  // fetchScheduleById: async (id: number) => {
  //   const response = await sendRequest("GET", `/schedules/${id}`);
  //   return response;
  // },

  updateSchedule: async (formData: {
    Sid: number;
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
  }) => {
    console.log("updateScheduleの中だよ", formData);
    const response = await sendRequest("POST", `/schedules/update`, formData);
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
    users_id: number[];
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    customers_id: number;
  }) => {
    const response = await sendRequest(
      "POST",
      `/schedules/customers/doubleUpdate`,
      formData
    );
    return response;
  },

  deleteSchedule: async (id: number) => {
    const response = await sendRequest("POST", `/schedules/delete`, { id: id });
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
    users_id: number[];
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    customers_id: number;
    owner_id: number;
  }) => {
    const response = await sendRequest(
      "POST",
      `schedules/customers/customerOnlyUpdate`,
      formData
    );
    return response;
  },
};
