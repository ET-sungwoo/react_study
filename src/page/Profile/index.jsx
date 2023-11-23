import { useSelector } from 'react-redux';

/* 
Todo
1. useGetProfile 호출
*/
function Profile() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div>
      <h1>유저 정보</h1>
      {isLogin ? <p>{`{data.username}`}</p> : <p>로그인 하고 오세요</p>}
    </div>
  );
}

export default Profile;
