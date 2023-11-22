import { Route, Routes } from 'react-router';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route
        path="*"
        element={
          <div>
            <div>404 Not Found</div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
