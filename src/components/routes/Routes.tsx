import MainLayout from "@/layout/MainLayout";
import { createBrowserRouter } from "react-router";
import Home from "../modules/HomePage/Home";
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
]);
