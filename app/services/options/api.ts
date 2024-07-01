import { sendRequest } from "../requestApi";

export const optionApi = {
  createOption: async (formData: { option_name: string; price: number }) => {
    try {
      const response = await sendRequest("POST", "/options/store", formData);
      console.log("APIのoptionDataだよ", response);
      return response;
    } catch (error) {
      // console.log("error", error);
      return { error: error };
    }
  },

  fetchAllOptions: async () => {
    try {
      const response = await sendRequest("GET", `/options/all`);
      // console.log("options fetched",response);
      return response;
    } catch (error) {
      // console.log("error", error);
      return { error: error };
    }
  },

  // fetchOptionById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/options/${id}`);
  //   return response;
  // }catch(error){
  // console.log('error',error);
  //   return { error: error };
  // }
  // },

  updateOption: async (formData: {
    id: number;
    option_name: string;
    price: number;
  }) => {
    try {
      const response = await sendRequest("POST", `/options/update`, formData);
      // console.log("APIのoptionDataだよ", response);
      return response;
    } catch (error) {
      // console.log("error", error);
      return { error: error };
    }
  },

  deleteOption: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/options/delete`, {
        id: id,
      });
      // console.log("APIのoptionDataだよ", response);
      return response;
    } catch (error) {
      // console.log("error", error);
      return { error: error };
    }
  },
};
