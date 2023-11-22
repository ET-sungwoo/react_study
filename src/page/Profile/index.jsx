import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { isLogin, username } = useSelector((state) => state.auth);
  useEffect(() => {
    (async () => {
      try {
        await axios.get('http://127.0.0.1:3000/auth/profile', {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNlYXN0b3J5NjI0Iiwic3ViIjoxLCJpYXQiOjE3MDA2NDg5NTYsImV4cCI6MTcwMDY1NDk1Nn0.3wxXzYWeBW9eIQ1t4hY1LjuEL4SARuK4g5vpjHTtofs',
          },
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <div>
      <h1>유저 정보</h1>
      {isLogin ? <p>{username}</p> : <p>로그인 하고 오세요</p>}
    </div>
  );
}

export default Profile;
