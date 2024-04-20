import { sendRequest } from "../requestApi";
import getCsrfToken from "../requestApi";

export const courseApi = {
  createCourse: async (formData: { course_name: string; price: number }) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", "/courses", formData, csrfToken);
    } catch (error) {
      throw new Error(`Error creating course: ${error.message}`);
    }
  },

  fetchAllCourses: async () => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", "/courses", csrfToken);
    } catch (error) {
      throw new Error(`Error fetching all courses: ${error.message}`);
    }
  },

  fetchCourseById: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("GET", `/courses/${id}`, csrfToken);
    } catch (error) {
      throw new Error(`Error fetching course with ID ${id}: ${error.message}`);
    }
  },

  updateCourse: async (
    id: number,
    formData: { course_name: string; price: number }
  ) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest(
        "POST",
        `/courses/${id}/update`,
        formData,
        csrfToken
      );
    } catch (error) {
      throw new Error(`Error updating course with ID ${id}: ${error.message}`);
    }
  },

  deleteCourse: async (id: number) => {
    try {
      const csrfToken = await getCsrfToken();
      return await sendRequest("POST", `/courses/${id}/delete`, csrfToken);
    } catch (error) {
      throw new Error(`Error deleting course with ID ${id}: ${error.message}`);
    }
  },
};
