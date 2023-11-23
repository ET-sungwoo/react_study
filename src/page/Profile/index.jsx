import { useSelector } from 'react-redux';

function Profile() {
  const { isLogin, username } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>유저 정보</h1>
      {isLogin ? <p>{username}</p> : <p>로그인 하고 오세요</p>}
    </div>
  );
}

export default Profile;
