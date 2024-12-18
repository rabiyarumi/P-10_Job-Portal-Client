import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";


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
          path: "/jobs/:id",
          element: <PrivateRoute>
             <JobDetails />
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: "/jobApply/:id",
          element:<PrivateRoute>
            <JobApply/>
          </PrivateRoute>,
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