export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export type RideStatus =
  | "REQUESTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export interface IRide {
  _id: string;
  rider: string;
  driver: string | null;
  pickupLocation: Location;
  destinationLocation: Location;
  status: RideStatus;
  fare: number;
  requestedAt: string;
  createdAt: string;
  updatedAt: string;
  acceptedAt?: string;
  pickedUpAt?: string;
  completedAt?: string;
  canceledAt?: string;
}
