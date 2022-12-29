import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './Context/ThemeProvider/ThemeProvider';
import { router } from './Routes/Routes/Routes';

function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div data-theme={`${darkTheme ? "dark" : "light"}`}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
