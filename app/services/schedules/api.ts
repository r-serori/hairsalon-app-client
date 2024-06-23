import { sendRequest } from "../requestApi";

export const schedulesApi = {
  //両方作成します
  createCustomerAndSchedule: async (formData: {
    customer_name: string;
    phone_number: string | null;
    remarks: string | null;
    courses_id: number[] | null;
    options_id: number[] | null;
    merchandises_id: number[] | null;
    hairstyles_id: number[] | null;
    user_id: number[] | null;
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
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
    const response = await sendRequest("POST", "/schedules/store", formData);
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

  // 両方更新します
  updateCustomerAndSchedule: async (formData: {
    customers_id: number; // customer_id
    customer_name: string;
    phone_number: string | null;
    remarks: string | null;
    courses_id: number[] | null;
    options_id: number[] | null;
    merchandises_id: number[] | null;
    hairstyles_id: number[] | null;
    user_id: number[] | null;
    Sid: number; // schedule_id
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    owner_id: number;
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

  updateCustomerAndScheduleCreate: async (formData: {
    customer_name: string;
    phone_number: string | null;
    remarks: string | null;
    courses_id: number[] | null;
    options_id: number[] | null;
    merchandises_id: number[] | null;
    hairstyles_id: number[] | null;
    user_id: number[] | null;
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
