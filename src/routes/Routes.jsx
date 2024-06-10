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
import AppliedTrainer from "../layout/dashboard/admin/AppliedTrainer";
import TrainerDetails from "../layout/dashboard/admin/TrainerDetails";
import ManageSlots from "../layout/dashboard/trainer/ManageSlots";
import AddSlot from "../layout/dashboard/trainer/AddSlot";
import AddForum from "../layout/dashboard/AddForum";
import Trainer from "../pages/all-trainer/Trainer";
import BookedTrainer from "../pages/all-trainer/BookedTrainer";

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
      },{
        path: '/trainer/details/:email',
        element: <Trainer></Trainer>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/trainer/details/${params.email}`)
      },
      {
        path: '/book-slot/:_id',
        element: <BookedTrainer></BookedTrainer>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/book-slot/${params._id}`)
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
        path:'/dashboard/all-trainers',
        element: <Trainers></Trainers>
      },
      {
        path: '/dashboard/applied',
        element: <AppliedTrainer></AppliedTrainer>
      },
      {
        path: '/dashboard/applied/:_id',
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/applied/${params._id}`),
        element: <TrainerDetails></TrainerDetails>
      },
      {
        path: '/dashboard/manage-slots',
        element: <ManageSlots></ManageSlots>
      },
      {
        path: '/dashboard/add-slots',
        element: <AddSlot></AddSlot>
      },
      {
        path: '/dashboard/add-forum',
        element: <AddForum></AddForum>
      }
    ]
  }
]);
export default router;