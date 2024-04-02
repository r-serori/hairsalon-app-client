import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true; // Cookieを使用するための設定を有効にする

export const loginApi = async (formData: { login_id: string, password: string }) => {
  try {
    const response = await axios.post('/login', formData);
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

export const registerApi = async (formData: { login_id: string, password: string, confirmPassword: string }) => {
  try {
    const response = await axios.post('/register', formData);
    console.log(response.data);
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

export const logoutApi = async () => {
  try {
    const response = await axios.post('/logout', null, {
      withCredentials: true, // クッキーを含めるためのオプション
    });
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