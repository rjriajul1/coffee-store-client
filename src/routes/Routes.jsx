import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Update from "../pages/Update";
import Edit from "../pages/Edit";
import CoffeeDetails from "../pages/CoffeeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true,
        hydrateFallbackElement:<p>Loading...</p>,
        loader: ()=> fetch('http://localhost:3000/coffees'),
       Component: Home
       },
       {
        path:'update',
        Component:Update
       },
       {
        path:'/edit/:id',
         hydrateFallbackElement:<p>Loading...</p>,
        loader:({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: Edit
       },
       {
        path:'coffeeDetails/:id',
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component:CoffeeDetails
       }
    ],
  },
]);
