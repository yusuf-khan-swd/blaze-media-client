import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/LoginRegister/Login/Login";
import Register from "../../Page/LoginRegister/Register/Register";
import Media from "../../Page/Media/Media/Media";
import Message from "../../Page/Message/Message/Message";
import About from "../../Page/Other/About/About";
import DisplayError from "../../Page/Shared/DisplayError/DisplayError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/media",
        element: <Media></Media>
      },
      {
        path: "/message",
        element: <Message></Message>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  }
])