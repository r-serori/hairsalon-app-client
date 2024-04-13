import { sendRequest } from '../../requestApi';

export const attendance_timeApi = {
  create: async (formData: {
    id: number;
    date: Date;
    start_time: Date;
    end_time: Date;
    break_time: number;
    attendance_id: number;
    created_at: Date;
    updated_at: Date;
  }) => {
    return await sendRequest('/attendance_times', 'POST', formData);
  },

  fetchAll: async (attendance_id: number) => {
    return await sendRequest(`/attendance_times/${attendance_id}`, 'GET');
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/attendance_times/${id}`, 'GET');
  },

  update: async (id: number, formData: {
    start_time: string;
    end_time: string;
    break_time: string;
    attendance_id: number;
  }) => {
    return await sendRequest(`/attendance_times/${id}`, 'PUT', formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/attendance_times/${id}`, 'DELETE');
  },

search: async (date: Date) => {
  // 日付情報を文字列に変換
  const dateString = date.toISOString().split('T')[0]; // ISO 8601形式の文字列に変換し、日付部分のみを取得

  // 日付情報を含むクエリパラメータを生成
  const queryParams = { date: dateString };
  const queryString = new URLSearchParams(queryParams).toString();

  // クエリパラメータを使用してGETリクエストを送信し、検索結果を返す
  return await sendRequest(`/attendance_times/search?${queryString}`, 'GET');
}
};



