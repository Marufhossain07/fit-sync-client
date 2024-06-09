import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Error from "../components/error/Error";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Dashboard from "../layout/dashboard/Dashboard";
import Subscribers from "../layout/dashboard/admin/Subscribers";
import AddClass from "../layout/dashboard/admin/AddClass";
import AllClasses from "../pages/allclasses/AllClasses";
import PrivateRoute from "../auth/PrivateRoute";
import BeTrainer from "../pages/be a trainer/BeTrainer";
import AllTrainers from "../pages/all-trainer/AllTrainers";
import Trainers from "../layout/dashboard/admin/Trainers";

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/all-classes',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/beTrainer',
        element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
      },
      {
        path:'/all-trainers',
        element: <AllTrainers></AllTrainers>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/subscribers',
        element: <Subscribers></Subscribers>
      },
      {
        path: '/dashboard/add-class',
        element: <AddClass></AddClass>
      },
      {
        path:'all-trainers',
        element: <Trainers></Trainers>
      }
    ]
  }
]);
export default router;