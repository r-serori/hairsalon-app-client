import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8000";
// const BASE_URL = "http://localhost:8888";

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true; // Cookieを使用するための設定を有効にする

const getCsrfToken = async () => {
  try {
    // "/sanctum/csrf-cookie" にGETリクエストを送信してCSRFトークンを取得
    await axios.get("/sanctum/csrf-cookie");
    // クッキーからCSRFトークンを取得する
    const csrfCookie = document.cookie.match(/XSRF-TOKEN=([^;]*)/);
    const csrfToken = csrfCookie ? csrfCookie[1] : null;

    if (csrfToken) {
      console.log("CSRFトークンの取得に成功しました", csrfToken);
      return csrfToken;
    } else {
      throw new Error("クッキーからCSRFトークンが見つかりません");
    }
  } catch (error) {
    console.error("CSRFトークンの取得に失敗しました:", error);
    throw new Error("CSRFトークンの取得に失敗しました");
  }
};
export default getCsrfToken;

export const sendRequest = async (
  method: "GET" | "POST" | "OPTIONS",
  url: string,
  csrfToken?: any,
  data?: any
): Promise<any> => {
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
        "X-XSRF-TOKEN": csrfToken,
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
