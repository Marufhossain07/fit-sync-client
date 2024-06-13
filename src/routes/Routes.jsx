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
import Payment from "../pages/all-trainer/Payment";
import ActivityLog from "../layout/dashboard/member/ActivityLog";
import Profile from "../layout/dashboard/member/Profile";
import AdminRoute from "../auth/AdminRoute";
import TrainerRoute from "../auth/TrainerRoute";
import Forums from "../pages/community/Forums";

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
        element: <PrivateRoute><Trainer></Trainer></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/trainer/details/${params.email}`)
      },
      {
        path: '/book-slot/:_id',
        element: <BookedTrainer></BookedTrainer>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/book-slot/${params._id}`)
      },
      {
        path: '/booking/:_id',
        element: <Payment></Payment>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/book-slot/${params._id}`)
      },
      {
        path: '/community',
        element: <Forums></Forums>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/subscribers',
        element: <AdminRoute><Subscribers></Subscribers></AdminRoute>
      },
      {
        path: '/dashboard/add-class',
        element: <AdminRoute><AddClass></AddClass></AdminRoute>
      },
      {
        path:'/dashboard/all-trainers',
        element: <AdminRoute><Trainers></Trainers></AdminRoute>
      },
      {
        path: '/dashboard/applied',
        element: <AdminRoute><AppliedTrainer></AppliedTrainer></AdminRoute>
      },
      {
        path: '/dashboard/applied/:_id',
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/applied/${params._id}`),
        element: <AdminRoute><TrainerDetails></TrainerDetails></AdminRoute>
      },
      {
        path: '/dashboard/manage-slots',
        element: <TrainerRoute><ManageSlots></ManageSlots></TrainerRoute>
      },
      {
        path: '/dashboard/add-slots',
        element: <TrainerRoute><AddSlot></AddSlot></TrainerRoute>
      },
      {
        path: '/dashboard/add-forum',
        element: <PrivateRoute><AddForum></AddForum></PrivateRoute>
      },
      {
        path: '/dashboard/activity',
        element: <ActivityLog></ActivityLog>
      },
      {
        path: '/dashboard/profile',
        element: <Profile></Profile>
      }
    ]
  }
]);
export default router;