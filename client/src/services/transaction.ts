import { customAxios } from './axios';
import { API_LIST } from '../constants/apiList';

type PostTrSaveRes = { CALL_NO: number };

export const postTrSave = () => {
  // @todo 에러 처리
  return customAxios.post<PostTrSaveRes>(API_LIST.TR.SAVE);
};
