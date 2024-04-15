import { sendRequest } from "../requestApi";

export const courseApi = {
  createCourse: async (formData: { course_name: string; price: number }) => {
    try {
      return await sendRequest("POST", "/courses", formData);
    } catch (error) {
      throw new Error(`Error creating course: ${error.message}`);
    }
  },

  fetchAllCourses: async () => {
    try {
      return await sendRequest("GET", "/courses");
    } catch (error) {
      throw new Error(`Error fetching all courses: ${error.message}`);
    }
  },

  fetchCourseById: async (id: number) => {
    try {
      return await sendRequest("GET", `/courses/${id}`);
    } catch (error) {
      throw new Error(`Error fetching course with ID ${id}: ${error.message}`);
    }
  },

  updateCourse: async (
    id: number,
    formData: { course_name: string; price: number }
  ) => {
    try {
      return await sendRequest("PUT", `/courses/${id}`, formData);
    } catch (error) {
      throw new Error(`Error updating course with ID ${id}: ${error.message}`);
    }
  },

  deleteCourse: async (id: number) => {
    try {
      return await sendRequest("DELETE", `/courses/${id}`);
    } catch (error) {
      throw new Error(`Error deleting course with ID ${id}: ${error.message}`);
    }
  },
};
