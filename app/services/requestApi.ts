import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8000";
// const BASE_URL = "http://localhost:8888";

axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true; // Cookieを使用するための設定を有効にする

// // CSRFトークンの取得
export const getCsrfToken = async () => {
  try {
    await axios.get("/sanctum/csrf-cookie");
    // CSRFトークンを取得
    const csrfToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common["X-XSRF-TOKEN"] = csrfToken;
    console.log("CSRFトークン取得成功:", csrfToken);
    return csrfToken;
  } catch (error) {
    console.error("CSRFトークンの取得に失敗しました:", error);
    throw new Error("CSRFトークンの取得に失敗しました");
  }
};

export const sendRequest = async (
  method: "GET" | "POST" | "OPTIONS",
  url: string,
  data?: any
): Promise<any> => {
  console.log("送信するデータ:", data);
  try {
    const response = await axios.request({
      method,
      url,
      data,
      withXSRFToken: true, // 追記
      xsrfHeaderName: "X-XSRF-TOKEN", // 追記
      headers: {
        "Content-Type": "application/json; charset=utf-8; ",
      },
    });

    console.log(`${method} request to ${url} successful:`);
    console.log("RESPONSE", response);
    return response;
  } catch (error) {
    console.error("Failed to send request:", error);
    return error.response;
  }

  // ここでCSRFトークンの再取得を試みる
  //   if (error.response?.status === 419) {
  //     console.error("CSRFトークンのエラーが発生しました。再取得を試みます。");

  //     try {
  //       await axios.get("api/sanctum/csrf-cookie"); // CSRFトークンを再取得
  //       const retryResponse = await axios.request({
  //         method,
  //         url,
  //         data,
  //       });

  //       console.log(`${method} request to ${url} successful on retry:`);
  //       console.log("RESPONSE", retryResponse);
  //       return retryResponse;
  //     } catch (retryError) {
  //       console.error("Failed to send request on retry:", retryError);
  //       return retryError.response;
  //     }
  //   } else {
  //     console.error("Failed to send request:", error);
  //     return error.response;
  //   }
  // }
};

// import axios from "axios";

// const BASE_URL = "http://localhost:8000";
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.withCredentials = true;

// // CSRFトークンの取得
// export const getCsrfToken = async () => {
//   try {
//     await axios.get("/sanctum/csrf-cookie");
//     // CSRFトークンを取得
//     const csrfToken = document.cookie.replace(
//       /(?:(?:^|.*;\s*)XSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/,
//       "$1"
//     );
//     axios.defaults.headers.common["X-XSRF-TOKEN"] = csrfToken;
//     return csrfToken;
//   } catch (error) {
//     console.error("CSRFトークンの取得に失敗しました:", error);
//     throw new Error("CSRFトークンの取得に失敗しました");
//   }
// };

// // リクエストの送信
// export const sendRequest = async (method, url, data) => {
//   try {
//     const response = await axios.request({
//       method,
//       url,
//       data,
//     });
//     console.log(`${method} request to ${url} successful:`);
//     console.log("RESPONSE", response);
//     return response;
//   } catch (error) {
//     console.error("Failed to send request:", error);
//     return error.response;
//   }
// };
