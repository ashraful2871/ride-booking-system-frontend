import { adminSidebarItems } from "@/components/routes/adminSidebarItems";
import { role } from "@/constants/role";

import type { TRole } from "@/type";

export const getSideBarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    // case role.admin:
    //   return [...adminSidebarItems];
    // case role.user:
    //   return [...userSidebarItems];

    default:
      return [];
  }
};
