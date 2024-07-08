import { sendRequest } from "../requestApi";

export const emailVerify = async (formData: { id: number; hash: string }) => {
  try {
    // 実際のパスパラメータを使用してリクエストを送信
    const response = await sendRequest(
      "GET",

      `/api/user/verify-email/${encodeURIComponent(
        formData.id
      )}/${encodeURIComponent(formData.hash)}`
    );
    console.log("responseDataだよ", response);
    return response;
  } catch (error) {
    console.error("errorだよ", error);
    return { error: error };
  }
};
