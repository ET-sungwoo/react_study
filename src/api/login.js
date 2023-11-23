import { axiosInstance } from './axiosInstance';
import { useMutation } from '@tanstack/react-query';

async function login({ username, password }) {
  const { data } = await axiosInstance.post('auth/login', {
    username,
    password,
  });
  return data;
}
/* 
Todo
1. 로그인 mutation 구현
2. onSuccess 콜백을 사용해 responseData 확인
3. queryClient를 사용해 responseData 캐시
4. dispatch를 활용해 로그인 상태 true로 번경
*/
export default function useLoginMutate() {
  const result = useMutation({
    mutationFn: login,
    onSuccess() {},
  });
  return result;
}
