import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Ragister/Register";
import Login from "../pages/Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <p>Page Not Found</p>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ]
    },
  ]);

export default router;