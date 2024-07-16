import { sendRequest } from "../requestApi";
import {
  ScheduleState,
  RequestScheduleState,
} from "../../store/schedules/scheduleSlice";

export const schedulesApi = {
  //両方作成します
  createCustomerAndSchedule: async (formData: RequestScheduleState) => {
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

  createSchedule: async (formData: ScheduleState) => {
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

  updateSchedule: async (formData: ScheduleState) => {
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
  updateCustomerAndSchedule: async (formData: RequestScheduleState) => {
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

  updateCustomerAndScheduleCreate: async (formData: RequestScheduleState) => {
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
