import { sendRequest } from "../requestApi";
import { CourseState } from "../../store/courses/courseSlice";

export const courseApi = {
  createCourse: async (formData: CourseState) => {
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

  updateCourse: async (formData: CourseState) => {
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
