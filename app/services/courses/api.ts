import { sendRequest } from "../requestApi";

export const courseApi = {
  createCourse: async (formData: { course_name: string; price: number }) => {
    const response = await sendRequest("POST", "/courses", formData);
    console.log("APIのcourseDataだよ");
    return response;
  },

  fetchAllCourses: async () => {
    const response = await sendRequest("GET", "/courses");
    console.log("courses fetched");
    return response;
  },

  fetchCourseById: async (id: number) => {
    const response = await sendRequest("GET", `/courses/${id}`);
    console.log("course fetched");
    return response;
  },

  updateCourse: async (
    id: number,
    formData: { course_name: string; price: number }
  ) => {
    const response = await sendRequest(
      "POST",
      `/courses/${id}/update`,
      formData
    );
    console.log("APIのcourseDataだよ");
    return response;
  },

  deleteCourse: async (id: number) => {
    const response = await sendRequest("POST", `/courses/${id}/delete`);
    console.log("APIのcourseDataだよ");
    return response;
  },
};
