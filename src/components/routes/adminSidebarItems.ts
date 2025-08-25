// import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItems } from "@/type";
import UserManagement from "../pages/Admin/UserManagement";
import Analytics from "../pages/Admin/Analytics";

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "User Management",
        url: "/admin/user-management",
        component: UserManagement,
      },
      {
        title: "Analytic",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour MAnagement",
    items: [
      //   {
      //     title: "Add Division",
      //     url: "/admin/add-division",
      //    component:<><>
      //   },
    ],
  },
];
