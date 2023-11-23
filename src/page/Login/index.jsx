import { useEffect, useState } from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import useLoginMutate from '../../api/login';

/* 
Todo
1. useLoginMutate 사용해 로그인 구현
*/
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLogin = useSelector((state) => state.auth.isLogin);

  const handleLogin = () => {};

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
