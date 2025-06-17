import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Update from "../pages/AddCoffees";
import Edit from "../pages/Edit";
import CoffeeDetails from "../pages/CoffeeDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Users from "../pages/Users";
import AddCoffees from "../pages/AddCoffees";
import PrivateRoute from "../routes/PrivateRoute";
import AllCoffees from "../pages/AllCoffees";
import MyOrders from "../pages/MyOrders";
import MyAddedCoffees from "../pages/MyAddedCoffees";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true,
        hydrateFallbackElement:<p>Loading...</p>,
        loader: ()=> fetch('https://coffee-store-server-tau-two.vercel.app/coffees'),
       Component: Home
       },
       {
        path:'addCoffees',
        element: <PrivateRoute><AddCoffees></AddCoffees></PrivateRoute>
       },
       {
        path:'allCoffees',
        hydrateFallbackElement:<p>loading....</p>,
        loader: ()=> fetch('https://coffee-store-server-tau-two.vercel.app/coffees'),
        element:<PrivateRoute><AllCoffees></AllCoffees></PrivateRoute>
       },
       {
        path:'myOrders',
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
       },
       {
        path:'myAddedCoffees',
        element: <PrivateRoute><MyAddedCoffees></MyAddedCoffees></PrivateRoute>
       },
       {
        path:'/edit/:id',
         hydrateFallbackElement:<p>Loading...</p>,
        loader:({params}) => fetch(`https://coffee-store-server-tau-two.vercel.app/coffees/${params.id}`),
        Component: Edit
       },
       {
        path:'coffeeDetails/:id',
        hydrateFallbackElement:<p>Loading...</p>,
        loader: ({params}) => fetch(`https://coffee-store-server-tau-two.vercel.app/coffees/${params.id}`),
        element:<PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>
       },
       {
        path:'signUp',
        Component:SignUp
       },
       {
        path: 'signIn',
        Component: SignIn
       },
       {
        path:'users',
        hydrateFallbackElement:<p>Loading...</p>,
        loader: ()=> fetch('https://coffee-store-server-tau-two.vercel.app/users'),
        element:<PrivateRoute><Users></Users></PrivateRoute>
       }
    ],
  },
]);
