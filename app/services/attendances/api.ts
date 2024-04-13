import { sendRequest }  from '../requestApi';

export const attendanceApi = {
  create: async (formData: {
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
  }) => {
    return await sendRequest('/attendances', 'POST', formData);
  },

  fetchAll: async () => {
    return await sendRequest('/attendances', 'GET');
  },

  fetchById: async (id: number) => {
    return await sendRequest(`/attendances/${id}`, 'GET');
  },

  update: async (id: number, formData: {
    attendance_name: string;
    position: string;
    phone_number: string;
    address: string;
  }) => {
    return await sendRequest(`/attendances/${id}`, 'PUT', formData);
  },

  delete: async (id: number) => {
    return await sendRequest(`/attendances/${id}`, 'DELETE');
  },
};

