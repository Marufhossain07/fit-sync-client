import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Error from "../components/error/Error";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Dashboard from "../layout/dashboard/Dashboard";
import Subscribers from "../layout/dashboard/admin/Subscribers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'/dashboard/subscribers',
          element: <Subscribers></Subscribers>
        }
      ]
    }
  ]);
export default router;