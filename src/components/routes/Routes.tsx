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
import About from "../pages/About";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
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
        Component: withAuth(Rides),
      },
      {
        path: "/booking-ride",
        Component: withAuth(BookRide),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/features",
        Component: Features,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/faq",
        Component: FAQ,
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
