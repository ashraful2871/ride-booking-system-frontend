import type { IRide } from "./ride.type";

export interface IRideResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    data: IRide[];
  };
}
