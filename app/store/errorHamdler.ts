export interface ErrorResponse {
  status: number;
  message: string;
  data?: any;
}

export const handleErrorResponse = (
  response: any,
  rejectWithValue: Function
) => {
  if (response.status >= 200 && response.status < 300) {
    // 成功時の処理
    console.log("response.success", response); // 成功メッセージをコンソールに表示するなど、適切な処理を行う
    return response.data; // response.dataを返すことで、必要なデータのみを返す
  } else if (response.status >= 400 && response.status < 500) {
    // クライアントエラー時の処理
    console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
    if (
      response.status === 401 ||
      response.status === 403 ||
      response.status === 404
    ) {
      return rejectWithValue({
        status: response.status,
        message: response.data.message,
      }); // rejectWithValueでエラーメッセージを返す
    }
    return rejectWithValue(response.data); // rejectWithValueでエラーメッセージを返す
  } else if (response.status >= 500) {
    // サーバーエラー時の処理
    console.log("response.error", response); // エラーメッセージをコンソールに表示するなど、適切な処理を行う
    return rejectWithValue({
      status: response.status,
      message: response.data.message,
    }); // rejectWithValueでエラーメッセージを返す
  } else {
    return rejectWithValue({
      status: response.status,
      message: "予期しないエラーが発生しました",
    }); // 一般的なエラーメッセージを返す
  }
};

export const handleCatchError = (err: any, rejectWithValue: Function) => {
  console.log("errだよ", err);
  return rejectWithValue({
    status: 500,
    message: "予期しないエラーが発生しました",
  });
};
