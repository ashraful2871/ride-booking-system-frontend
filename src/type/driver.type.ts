export interface IDriverRideResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface IDriverRide {
  _id: string;
  rider: string;
  driver: string;
  pickupLocation: Location;
  destinationLocation: Location;
  status: string;
  fare: number;
  requestedAt: string;
  createdAt: string;
  updatedAt: string;
  acceptedAt?: string;
  pickedUpAt?: string;
  completedAt?: string;
}

export interface IDriverEarning<T> {
  totalEarningStored: number;
  totalEarningsCalculated: number;
  rides: T[];
}
