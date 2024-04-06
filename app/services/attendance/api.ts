import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true; // Cookieを使用するための設定を有効にする


export const attendanceApi = async (formData: {
  attendance_name: string, position: string, phone_number: string,
  address: string
 }) => {
  try {
    const response = await axios.post('/attendances', formData);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error('No response from server');
    } else {
      throw new Error(error.message);
    }
  }
};

