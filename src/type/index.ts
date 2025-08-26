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

interface AuthProvider {
  provider: string;
  providerId: string;
}

export type TRole = "SUPER_ADMIN" | "USER" | "ADMIN";
export type TUserStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED";

export interface IRider {
  _id: string;
  name: string;
  email: string;
  role: TRole;
  isDeleted: boolean;
  isActive: TUserStatus;
  auth: AuthProvider[];
  createdAt: string;
  updatedAt: string;
}

export interface IRiderResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    data: IRider[];
  };
}
export interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    data: T[];
  };
}

export type IDriverApprovedStatus = "PENDING" | "APPROVED" | "SUSPENDED";

export interface IDriver {
  _id: string;
  user: string;
  vehicleNumber: string;
  vehicleType: string;
  licenseNumber: string;
  nationalId: string;
  isOnline: boolean;
  approvedStatus: IDriverApprovedStatus;
  totalEarning: number;
  createdAt: string;
  updatedAt: string;
}
