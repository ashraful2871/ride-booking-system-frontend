import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Label } from "../ui/label";
import { useAllLocationQuery } from "../redux/Features/Ride/ride.api";
import { useUserInfoQuery } from "../redux/Features/Auth/auth.api";
import { useBookingRideMutation } from "../redux/Features/Rides/ride.api";

interface ILocation {
  lat: number;
  lng: number;
  address: string;
}

interface IRideLocation {
  _id: string;
  pickupLocation: ILocation;
  destinationLocation: ILocation;
}

const BookRide = () => {
  const { data } = useAllLocationQuery(undefined);
  const { data: userInfo } = useUserInfoQuery(undefined);
  const [rideInfo] = useBookingRideMutation();

  const [pickupLocation, setPickupLocation] = useState<ILocation | null>(null);
  const [destinationLocation, setDestinationLocation] =
    useState<ILocation | null>(null);

  const handleBookRide = async () => {
    if (!pickupLocation || !destinationLocation) {
      alert("Please select both locations");
      return;
    }

    const rideData = {
      rider: userInfo?.data?._id,
      pickupLocation,
      destinationLocation,
    };

    // console.log("Ride Data to send:", rideData);
    try {
      const res = await rideInfo(rideData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-span-3 w-full h-[500px] border border-muted rounded-md p-5 space-y-4">
      <div>
        <Label className="mb-2">Pick Up Location</Label>
        <Select
          onValueChange={(value: string) => {
            const selected = data?.data.find(
              (loc: IRideLocation) => loc._id === value
            );
            if (selected) setPickupLocation(selected.pickupLocation);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select pick up location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Pick Up Location</SelectLabel>
              {data?.data.map((location: IRideLocation) => (
                <SelectItem key={location._id} value={location._id}>
                  {location.pickupLocation.address}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-2">Destination Location</Label>
        <Select
          onValueChange={(value: string) => {
            const selected = data?.data.find(
              (loc: IRideLocation) => loc._id === value
            );
            if (selected) setDestinationLocation(selected.destinationLocation);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select destination location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Destination Location</SelectLabel>
              {data?.data.map((location: IRideLocation) => (
                <SelectItem key={location._id} value={location._id}>
                  {location.destinationLocation.address}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <button
        onClick={handleBookRide}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Book Ride
      </button>
    </div>
  );
};

export default BookRide;
