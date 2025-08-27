import type { ISidebarItems } from "@/type";
import DriverEarning from "../pages/Driver/DriverEarning";

export const driverSidebarItems: ISidebarItems[] = [
  {
    title: "History",
    items: [
      {
        title: "History",
        url: "/driver/history",
        component: DriverEarning,
      },
    ],
  },
];
