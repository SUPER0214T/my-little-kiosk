import { customAxios } from './axios';
import { API_LIST } from '../constants/apiList';

export const getMasterAll = () => {
  return customAxios.get(API_LIST.MASTER.ALL);
};
