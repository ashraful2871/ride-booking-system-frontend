import MainLayout from "@/Common-Layout/MainLayout";
import { createBrowserRouter } from "react-router";
import Home from "../modules/HomePage/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Rides from "../pages/Rides";
import BookRide from "../pages/BookRide";
import { withAuth } from "@/assets/utils/withAuth";
import DashboardLayout from "@/Common-Layout/DashboardLayout";
import { role } from "@/constants/role";
import type { TRole } from "@/type";
import { generateRoutes } from "@/assets/utils/generateRoutes";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { driverSidebarItems } from "./driverSidebarItems";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/rides",
        Component: Rides,
      },
      {
        path: "/booking-ride",
        Component: BookRide,
      },
    ],
  },

  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [...generateRoutes(adminSidebarItems)],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider",
    children: [...generateRoutes(userSidebarItems)],
  },
  {
    Component: withAuth(DashboardLayout, role.driver as TRole),
    path: "/driver",
    children: [...generateRoutes(driverSidebarItems)],
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
