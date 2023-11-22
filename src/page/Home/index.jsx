import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/sungwoo">장성우의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/hyuno">정현호의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
