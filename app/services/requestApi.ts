import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8000";

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true; // Cookieを使用するための設定を有効にする

export const sendRequest = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: any
): Promise<T> => {
  try {
    const response: AxiosResponse<any> = await axios.request({
      method,
      url,
      data,
    });
    console.log(`${method} request to ${url} successful:`);
    console.log(response.data);
    // レスポンスのデータをJSON形式に変換して返す
    return JSON.parse(JSON.stringify(response.data));
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: AxiosError) => {
  if (error.response) {
    // レスポンスがある場合のエラー
    const { status, data } = error.response;
    throw new Error(`Request failed with status ${status}: ${data}`);
  } else if (error.request) {
    // リクエストが送信されたがレスポンスがない場合のエラー
    throw new Error("No response from server");
  } else {
    // リクエストが送信されなかった場合のエラー
    throw new Error(error.message);
  }
};
