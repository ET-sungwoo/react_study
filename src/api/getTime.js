import { axiosInstance } from './axiosInstance';
import { useQuery } from '@tanstack/react-query';

// eslint-disable-next-line no-unused-vars
async function getTime() {
  const result = await axiosInstance.get('any-response');
  return result.data;
}
/* 
Todo
1. useQuery를 사용해 시간정보 받아옴.
  1-1. 그 사이에 queryKey, queryFn, staleTime, gcTime 추가해가기
 */
export default function useGetTime() {
  const result = useQuery();
  return result;
}
