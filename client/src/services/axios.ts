import axios from 'axios';
import { TIMEOUT } from '../constants/apiTimeout';

export const customAxios = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: TIMEOUT.DEFAULT,
});

// @desc 바로 데이터를 받고 싶다면 아래의 interceptor사용
// customAxios.interceptors.response.use((res: { data: any }) => {
//   return res.data;
// });
