import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Layout from './components/Layout';
import Home from './page/Home';
import Profile from './page/Profile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginCheck } from './store/slice/authSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginCheck());
  }, [dispatch]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
