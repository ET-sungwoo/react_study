import { generateQueryKeysFromUrl } from '../utils/generateQueryKeysFromUrl';
import { axiosInstance } from './axiosInstance';
import { useQuery, useQueryClient } from '@tanstack/react-query';

async function getProfile(access_token) {
  const { data } = await axiosInstance.get('auth/profile', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return data;
}
/* 
Todo
1. queryClient에서 access_token정보 가져오기
2. enabled 옵션 설명
 */
export default function useGetProfile(isLogin) {
  const queryClient = useQueryClient();

  const accessToken = queryClient.getQueryData(generateQueryKeysFromUrl('auth/login'));

  const result = useQuery({
    queryKey: generateQueryKeysFromUrl('auth/profile'),
    queryFn: () => getProfile(accessToken.access_token),
    enabled: isLogin,
  });

  return result;
}
