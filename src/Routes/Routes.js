import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Register from "../Pages/Authentication/Register";
import SignIn from "../Pages/Authentication/SignIn";
import AddPatient from "../Pages/Dashboard/AddPatient";
import AllPatients from "../Pages/Dashboard/AllPatients";
import MyData from "../Pages/Dashboard/MyData";
import WelcomePage from "../Pages/Dashboard/WelcomePage";
import HomeMain from "../Pages/HomePage/HomeMain";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<HomeMain></HomeMain>
            },
            {
                path:"/signin",
                element:<SignIn></SignIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        // errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:"/dashboard",
                element:<PrivateRoute><WelcomePage/></PrivateRoute>
            },
            {
                path:"/dashboard/patient",
                element:<PrivateRoute><MyData/></PrivateRoute>
            },
            {
                path:"/dashboard/add-patient",
                element:<PrivateRoute><AddPatient/></PrivateRoute>
            },
            {
                path:"/dashboard/all-patients",
                element:<PrivateRoute><AllPatients/></PrivateRoute>
            },
        ]
    }
])