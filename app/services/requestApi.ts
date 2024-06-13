import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8000";
// const BASE_URL = "http://localhost:8888";

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true; // Cookieを使用するための設定を有効にする

const getCsrfToken = async () => {
  try {
    const response = await axios.get("/sanctum/csrf-cookie");
    console.log("CSRF token fetched successfully");
    console.log("responseCSRF", response);
    return response.data; //responseをreturnしなくても自動的にcoolieに保存される
  } catch (error) {
    console.error("Failed to fetch CSRF token:", error);
    throw new Error("Failed to fetch CSRF token");
  }
};

export default getCsrfToken;

export const sendRequest = async <T>(
  method: "GET" | "POST" | "OPTIONS",
  url: string,
  csrfToken?: any,
  data?: any
): Promise<T> => {
  if (!csrfToken) {
    throw new Error("CSRF token not provided");
  }
  try {
    const response: AxiosResponse<any> = await axios.request({
      method,
      url,
      data,
      headers: {
        "Content-Type": "application/json",
        "XSRF-TOKEN": csrfToken,
      },
    });

    console.log(`${method} request to ${url} successful:`);
    console.log("REQUESTAPI.response", response);
    return response as any;
  } catch (error) {
    // handleError(error);
    console.error("Failed to send request:", error);
    return error.response as any;
  }
};

// const handleError = (error: AxiosError) => {
//   if (error.response) {
//     // レスポンスがある場合のエラー
//     console.log("error.responseだよ", error.response);
//     const { status, data } = error.response;
//     throw new Error(`Request failed with status ${status}: ${data}`);
//   } else if (error.request) {
//     // リクエストが送信されたがレスポンスがない場合のエラー
//     throw new Error("No response from server");
//   } else {
//     // リクエストが送信されなかった場合のエラー
//     throw new Error(error.message);
//   }
// };
