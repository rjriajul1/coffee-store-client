import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Update from "../pages/Update";
import Edit from "../pages/Edit";
import CoffeeDetails from "../pages/CoffeeDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Users from "../pages/Users";

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
        path:'update',
        
        Component:Update
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
        Component:CoffeeDetails
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
        Component:Users
       }
    ],
  },
]);
