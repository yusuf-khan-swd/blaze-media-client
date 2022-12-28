import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div data-theme={`${darkTheme ? "dark" : "light"}`}>
      <button className="btn btn-ghost m-2" onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? "Light" : "Dark"}</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
