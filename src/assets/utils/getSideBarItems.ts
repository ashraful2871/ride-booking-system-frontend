import { adminSidebarItems } from "@/components/routes/adminSidebarItems";
import { driverSidebarItems } from "@/components/routes/driverSidebarItems";
import { userSidebarItems } from "@/components/routes/userSidebarItems";
import { role } from "@/constants/role";

import type { TRole } from "@/type";

export const getSideBarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.rider:
      return [...userSidebarItems];
    case role.driver:
      return [...driverSidebarItems];

    default:
      return [];
  }
};
