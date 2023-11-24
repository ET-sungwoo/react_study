import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <h1>
          <a href="/">react</a>
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">javascript</a>
          </li>
          <li>
            <a href="/read/3">react</a>
          </li>
        </ul>
      </nav>
      <main>
        <h2>Hello React</h2>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
