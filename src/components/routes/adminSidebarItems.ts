// import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItems } from "@/type";
import UserManagement from "../pages/Admin/UserManagement";
import ApprovedStatus from "../pages/Admin/ApprovedStatus";

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
        title: "Approved Driver Status",
        url: "/admin/approved-status",
        component: ApprovedStatus,
      },
      // {
      //   title: "Analytic",
      //   url: "/admin/analytics",
      //   component: Analytics,
      // },
    ],
  },
  // {
  //   title: "Tour MAnagement",
  //   items: [
  //     //   {
  //     //     title: "Add Division",
  //     //     url: "/admin/add-division",
  //     //    component:<><>
  //     //   },
  //   ],
  // },
];
