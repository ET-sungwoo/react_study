import { Link, Outlet } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';

function Layout() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const handleReset = () => {
    setSeconds(0);
  };
  return (
    <div className="layout-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">유저 정보</Link>
          </li>
          <li>
            <Link to="/timelog">시간 출력</Link>
          </li>
        </ul>
      </nav>
      <p>{`${Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`}</p>
      <button onClick={handleReset}>Reset</button>

      <Outlet />
    </div>
  );
}

export default Layout;
