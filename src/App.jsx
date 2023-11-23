import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Layout from './components/Layout';
import Home from './page/Home';
import Profile from './page/Profile';
import TimeLog from './page/TimeLog';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/timelog" element={<TimeLog />} />
      </Route>
    </Routes>
  );
}

export default App;
