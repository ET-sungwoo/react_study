import { Navigate, useParams } from 'react-router-dom';
const data = {
  sungwoo: {
    name: '김민준',
    description: '인천 사는 28살',
  },
  hyuno: {
    name: '정현호',
    description: '수원 사는 33살',
  },
};
function Profile() {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        // <p>존재하지 않는 프로필입니다.</p>
        <Navigate to="/notfund" replace={true} />
      )}
    </div>
  );
}

export default Profile;
