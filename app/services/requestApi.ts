import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8000";

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true; // Cookieを使用するための設定を有効にする

const getCsrfToken = async () => {
  try {
    const response = await axios.get("/csrf-token");
    console.log("CSRF token fetched successfully");
    console.log(response);
    return response;
  } catch (error) {
    console.error("Failed to fetch CSRF token:", error);
    throw new Error("Failed to fetch CSRF token");
  }
};

export default getCsrfToken;

export const sendRequest = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: any,
  csrfToken?: any
): Promise<T> => {
  try {
    const response: AxiosResponse<any> = await axios.request({
      method,
      url,
      data,
      headers: {
        "X-CSRF-Token": csrfToken,
      },
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
