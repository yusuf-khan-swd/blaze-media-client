import { useState } from 'react';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div data-theme={`${darkTheme ? "dark" : "light"}`}>
      <h2>Hello World</h2>
      <button onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? "Light" : "Dark"}</button>
    </div>
  );
}

export default App;
