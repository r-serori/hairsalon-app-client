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
    try {
      const response = await sendRequest(
        "POST",
        "/schedules/customers/double",
        formData
      );
      // console.log("APIのschedulesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  createSchedule: async (formData: {
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    owner_id: number;
  }) => {
    try {
      const response = await sendRequest("POST", "/schedules/store", formData);
      // console.log("APIのschedulesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllSchedules: async (id: number) => {
    try {
      const response = await sendRequest(
        "GET",
        `/schedules/${encodeURIComponent(id)}`
      );
      // console.log("schedules fetched", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  selectGetSchedules: async (formData: { owner_id: number; year: string }) => {
    try {
      const response = await sendRequest(
        "GET",
        `/schedules/customers/selectGetYear/${encodeURIComponent(
          formData.owner_id
        )}/${encodeURIComponent(formData.year)}`
      );
      // console.log("APIのschedulesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  // fetchScheduleById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/schedules/${id}`);
  //   return response;
  // }catch(error){
  // console.error("errorだよ", error);
  // return { error: error };
  // }
  // },

  updateSchedule: async (formData: {
    Sid: number;
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
  }) => {
    try {
      const response = await sendRequest("POST", `/schedules/update`, formData);
      // console.log("APIのschedulesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
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
    try {
      const response = await sendRequest(
        "POST",
        `/schedules/customers/doubleUpdate`,
        formData
      );
      // console.log("APIのschedulesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  deleteSchedule: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/schedules/delete`, {
        id: id,
      });
      // console.log("APIのschedulesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
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
    try {
      const response = await sendRequest(
        "POST",
        `schedules/customers/customerOnlyUpdate`,
        formData
      );
      // console.log("APIのschedulesDataだよ", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
};
