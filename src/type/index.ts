import type { ComponentType } from "react";
import type { IRide } from "./ride.type";

export interface IRideResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    data: IRide[];
  };
}

export interface ISidebarItems {
  title: string;
  items: {
    url: string;
    title: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "USER" | "ADMIN";
