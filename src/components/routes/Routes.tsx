import MainLayout from "@/layout/MainLayout";
import { createBrowserRouter } from "react-router";
import Home from "../modules/HomePage/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Registration,
  },
]);
