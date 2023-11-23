import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '../../utils/generateQueryKeysFromUrl';

function TimeLog() {
  const queryClient = useQueryClient();
  const queryClientData = queryClient.getQueryData(
    generateQueryKeysFromUrl('any-response')
  );
  const printConsoleLog = () => {
    console.log(queryClientData);
  };
  return (
    <div>
      <br />
      <br />
      <button type="button" onClick={printConsoleLog}>
        콘솔 로그
      </button>
    </div>
  );
}

export default TimeLog;
