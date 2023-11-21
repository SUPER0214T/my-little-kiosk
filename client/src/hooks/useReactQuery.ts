import { useQueryClient } from 'react-query';

export const useGetQueryData: <ResType>(key: string[]) => ResType | undefined = (key) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(key);
};
