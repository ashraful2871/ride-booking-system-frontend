import type { ISidebarItems } from "@/type";
import RideHistory from "../pages/Rider/RideHistory";
import UpdateProfile from "../pages/Rider/UpdateProfile";
import Profile from "../pages/Rider/Profile";

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
  {
    title: "Profile",
    items: [
      {
        title: "Profile",
        url: "/rider/profile",
        component: Profile,
      },
      {
        title: "Edit Profile ",
        url: "/rider/edit-profile",
        component: UpdateProfile,
      },
    ],
  },
];
