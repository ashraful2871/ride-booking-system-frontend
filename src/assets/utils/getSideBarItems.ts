import { adminSidebarItems } from "@/components/routes/adminSidebarItems";
import { userSidebarItems } from "@/components/routes/userSidebarItems";
import { role } from "@/constants/role";

import type { TRole } from "@/type";

export const getSideBarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.rider:
      return [...userSidebarItems];
    // case role.user:
    //   return [...userSidebarItems];

    default:
      return [];
  }
};
