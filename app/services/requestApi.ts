import axios, { AxiosResponse } from 'axios';

//このsendRequest関数は、HTTPメソッド（GET、POST、PUT、DELETEなど）、URL、およびオプションのデータを受け取ります。それを使ってaxiosを呼び出し、結果を返します。

const BASE_URL = 'http://localhost:8000';

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true; // Cookieを使用するための設定を有効にする

export const sendRequest = async <T>(
  method: string,
  url: string,
  data?: any
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.request({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error: any) {
    handleError(error);
  }
};

const handleError = (error: any) => {
  if (error.response) {
    throw new Error(error.response.data.message);
  } else if (error.request) {
    throw new Error('No response from server');
  } else {
    throw new Error(error.message);
  }
};
