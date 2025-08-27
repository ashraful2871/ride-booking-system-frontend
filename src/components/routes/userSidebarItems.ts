import type { ISidebarItems } from "@/type";
import RideHistory from "../pages/Rider/RideHistory";

export const userSidebarItems: ISidebarItems[] = [
  {
    title: "History",
    items: [
      {
        title: "History",
        url: "/rider/history",
        component: RideHistory,
      },
    ],
  },
];
