import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../store/slice/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLogin = useSelector((state) => state.auth.isLogin);

  const handleLogin = async () => {
    try {
      const {
        data: { access_token },
      } = await axios.post('http://127.0.0.1:3000/auth/login', {
        username,
        password,
      });
      const {
        data: { username: userName },
      } = await axios.get('http://127.0.0.1:3000/auth/profile', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      dispatch(setUserInfo(userName));
    } catch (error) {
      console.error('로그인 실패');
      console.error(error);
    }
  };

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
