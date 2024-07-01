import { sendRequest } from "../requestApi";

export const schedulesApi = {
  //両方作成します
  createCustomerAndSchedule: async (formData: {
    customer_name: string;
    phone_number: string | null;
    remarks: string | null;
    course_id: number[] | null;
    option_id: number[] | null;
    merchandise_id: number[] | null;
    hairstyle_id: number[] | null;
    user_id: number[] | null;
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
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

  fetchAllSchedules: async () => {
    try {
      const response = await sendRequest("GET", `/schedules/all`);
      // console.log("schedules fetched", response);
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  selectGetSchedules: async (year: string) => {
    try {
      const response = await sendRequest(
        "GET",
        `/schedules/customers/selectGetYear/${encodeURIComponent(year)}`
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
    customer_id: number; // customer_id
    customer_name: string;
    phone_number: string | null;
    remarks: string | null;
    course_id: number[] | null;
    option_id: number[] | null;
    merchandise_id: number[] | null;
    hairstyle_id: number[] | null;
    user_id: number[] | null;
    Sid: number; // schedule_id
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
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
    course_id: number[] | null;
    option_id: number[] | null;
    merchandise_id: number[] | null;
    hairstyle_id: number[] | null;
    user_id: number[] | null;
    title: string;
    start_time: string;
    end_time: string;
    allDay: number;
    customer_id: number;
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
