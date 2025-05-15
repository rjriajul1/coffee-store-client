import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Update from "../pages/Update";
import Edit from "../pages/Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true,
       Component: Home
       },
       {
        path:'update',
        Component:Update
       },
       {
        path:'edit',
        Component: Edit
       }
    ],
  },
]);
