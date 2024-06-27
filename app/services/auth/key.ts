import Router from "next/router";
import { sendRequest } from "../requestApi";

export const getKeyApi = {
  getKey: async () => {
    try {
      const response = (await sendRequest("GET", "/api/getKey")) as any;
      return response;
    } catch (error) {
      console.error("errorだよ", error);
      return { error: error };
    }
  },
};
