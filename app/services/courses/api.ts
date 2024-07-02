import { sendRequest } from "../requestApi";

export const courseApi = {
  createCourse: async (formData: { course_name: string; price: number }) => {
    try {
      const response = await sendRequest("POST", "/courses/store", formData);
      // console.log("APIのcourseDataだよ");
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  fetchAllCourses: async () => {
    try {
      const response = await sendRequest("GET", `/courses/all`);
      // console.log("courses fetched");
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  // fetchCourseById: async (id: number) => {
  // try{
  //   const response = await sendRequest("GET", `/courses/${id}`);
  // console.log("course fetched");
  //   return response;
  // },

  updateCourse: async (formData: {
    id: number;
    course_name: string;
    price: number;
  }) => {
    try {
      const response = await sendRequest("POST", `/courses/update`, formData);
      // console.log("APIのcourseDataだよ");
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },

  deleteCourse: async (id: number) => {
    try {
      const response = await sendRequest("POST", `/courses/delete`, { id: id });
      // console.log("APIのcourseDataだよ");
      return response;
    } catch (error) {
      // console.error("errorだよ", error);
      return { error: error };
    }
  },
};
