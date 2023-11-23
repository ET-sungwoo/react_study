import { AxiosError } from 'axios';
import { QueryClient } from '@tanstack/react-query';

function queryErrorHandler(error) {
  if (error instanceof AxiosError) {
    const { response } = error;
    const data = response?.data;
    const resultType = data?.resultType;
    const resultMessage = data?.resultMessage;
    if (resultType === 'FAIL') {
      // 실패 상태 처리
      console.error(resultMessage);
    } else if (resultType === 'WARNING') {
      // 경고 상태 처리
      console.warn(resultMessage);
    } else if (resultType === 'ERROR') {
      // 오류 상태 처리
      console.error(resultMessage);
    } else {
      // 기타 상태 처리
      console.error(resultMessage, data);
    }
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 1000 * 60 * 5,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});

export default queryClient;
